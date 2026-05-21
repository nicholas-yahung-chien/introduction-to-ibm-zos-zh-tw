import argparse
import json
import os
import re
import sys
from pathlib import Path

from openai import OpenAI


ROOT = Path(__file__).resolve().parents[1]
SOURCE_EXTRACT = ROOT / "data" / "captured" / "practice-source-extract.json"
OUTPUT = ROOT / "data" / "practice-questions.json"

REVIEW_TARGETS = [
    {
        "lessonSlug": "computer-architecture",
        "lessonTitle": "電腦架構",
        "section": "大型主機環境",
        "coursePath": "/course/mainframe-environment",
        "videoEntryId": "1_vb8qf96d",
        "topics": ["computer architecture", "process state", "firmware", "API"]
    },
    {
        "lessonSlug": "mainframe-architecture",
        "lessonTitle": "大型主機架構",
        "section": "大型主機環境",
        "coursePath": "/course/mainframe-environment",
        "videoEntryId": "1_7e45b5a8",
        "topics": ["storage", "mainframe architecture", "central storage", "paging"]
    },
    {
        "lessonSlug": "virtualization",
        "lessonTitle": "虛擬化",
        "section": "大型主機環境",
        "coursePath": "/course/mainframe-environment",
        "videoEntryId": "1_1fl2qymd",
        "topics": ["LPAR", "processor", "CP", "virtualization"]
    },
    {
        "lessonSlug": "what-is-an-operating-system",
        "lessonTitle": "什麼是作業系統？",
        "section": "大型主機環境",
        "coursePath": "/course/mainframe-environment",
        "videoEntryId": "1_jicvw3wr",
        "topics": ["operating system", "resource management"]
    },
    {
        "lessonSlug": "mainframe-operating-systems",
        "lessonTitle": "大型主機作業系統",
        "section": "大型主機環境",
        "coursePath": "/course/mainframe-environment",
        "videoEntryId": "1_q1drndng",
        "topics": ["CICS", "TSO", "application software", "z/OS component"]
    },
    {
        "lessonSlug": "why-use-mainframes",
        "lessonTitle": "為什麼使用大型主機？",
        "section": "大型主機基礎架構",
        "coursePath": "/course/mainframe-infrastructure",
        "videoEntryId": "1_rqvsd0rw",
        "topics": ["consolidate", "batch", "payroll", "power", "cooling", "network"]
    },
    {
        "lessonSlug": "ibm-z-components",
        "lessonTitle": "IBM Z 元件",
        "section": "大型主機基礎架構",
        "coursePath": "/course/mainframe-infrastructure",
        "videoEntryId": "1_j4rkx3qu",
        "topics": ["component", "processor", "LIC", "STP", "server time protocol"]
    },
    {
        "lessonSlug": "hmc-and-se",
        "lessonTitle": "HMC 與 SE",
        "section": "大型主機基礎架構",
        "coursePath": "/course/mainframe-infrastructure",
        "videoEntryId": "1_6kwwnujx",
        "topics": ["HMC", "SE", "Support Element", "activation profile"]
    },
    {
        "lessonSlug": "sysplex",
        "lessonTitle": "Sysplex",
        "section": "大型主機基礎架構",
        "coursePath": "/course/mainframe-infrastructure",
        "videoEntryId": "1_0umo87q5",
        "topics": ["Sysplex", "GRS", "XCF", "Parallel Sysplex", "Coupling Facility", "WLM"]
    },
    {
        "lessonSlug": "zos-security",
        "lessonTitle": "z/OS 安全",
        "section": "大型主機安全",
        "coursePath": "/course/mainframe-security",
        "videoEntryId": "1_b3hd3sa0",
        "topics": ["RACF", "SAF", "security", "confidentiality", "integrity", "availability", "profile", "data set access"]
    },
    {
        "lessonSlug": "transaction-level-security",
        "lessonTitle": "交易層級安全",
        "section": "大型主機安全",
        "coursePath": "/course/mainframe-security",
        "videoEntryId": "1_1ndlj8bd",
        "topics": ["encryption", "CPACF", "Crypto Express", "key", "pervasive encryption"]
    },
    {
        "lessonSlug": "iocds",
        "lessonTitle": "IOCDS",
        "section": "大型主機安全",
        "coursePath": "/course/mainframe-security",
        "videoEntryId": "1_5hs3mb8z",
        "topics": ["IOCDS", "IODF", "IOCP", "CHPID", "CNTLUNIT", "FICON"]
    },
    {
        "lessonSlug": "activation-profiles",
        "lessonTitle": "啟動設定檔",
        "section": "大型主機安全",
        "coursePath": "/course/mainframe-security",
        "videoEntryId": "1_hchvg5wh",
        "topics": ["activation profile", "reset profile", "load parameter", "POR", "image activation order"]
    },
    {
        "lessonSlug": "ipling-an-operating-system",
        "lessonTitle": "對作業系統執行 IPL",
        "section": "大型主機安全",
        "coursePath": "/course/mainframe-security",
        "videoEntryId": "1_c1w1vq9x",
        "topics": ["IPL", "SYSRES", "load parameter", "loadable code"]
    }
]


def resolve_openai_api_key() -> str:
    key = os.environ.get("OPENAI_API_KEY", "").strip()
    if key:
        return key

    if sys.platform == "win32":
        try:
            import winreg

            with winreg.OpenKey(winreg.HKEY_CURRENT_USER, "Environment") as env_key:
                value, _ = winreg.QueryValueEx(env_key, "OPENAI_API_KEY")
                key = str(value).strip()
                if key:
                    os.environ["OPENAI_API_KEY"] = key
                    return key
        except OSError:
            pass

    return ""


def strip_html(value: str) -> str:
    value = re.sub(r"<br\s*/?>", " ", value or "", flags=re.I)
    value = re.sub(r"<[^>]+>", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def parse_json_array(text: str):
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        match = re.search(r"```(?:json)?\s*(.*?)\s*```", text, re.DOTALL)
        if match:
            return json.loads(match.group(1))
        start = text.find("[")
        end = text.rfind("]")
        if start >= 0 and end > start:
            return json.loads(text[start : end + 1])
        raise


def chunked(items, size):
    for index in range(0, len(items), size):
        yield items[index : index + size]


def normalized_source_items(capture):
    items = []
    for item in capture["questions"]:
        if item["sourceType"] == "h5p":
            answers = item["raw"].get("answers", [])
            choices = [
                {
                    "id": chr(97 + index),
                    "text": strip_html(answer.get("text", "")),
                    "isCorrect": bool(answer.get("correct"))
                }
                for index, answer in enumerate(answers)
            ]
            prompt = strip_html(item["raw"].get("question", ""))
            correct_choice_ids = [choice["id"] for choice in choices if choice["isCorrect"]]
        else:
            choices = [
                {**choice, "isCorrect": choice["id"] in item.get("correctChoiceIds", [])}
                for choice in item.get("choices", [])
            ]
            prompt = item["prompt"]
            correct_choice_ids = item.get("correctChoiceIds", [])

        items.append({
            "id": f"{item['sourceId']}-{item['index']:03d}",
            "sourceId": item["sourceId"],
            "sourceTitle": item["sourceTitle"],
            "sourceType": item["sourceType"],
            "sourceUrl": item["sourceUrl"],
            "section": item["sectionTitle"],
            "prompt": prompt,
            "choices": [{"id": choice["id"], "text": choice["text"]} for choice in choices],
            "correctChoiceIds": correct_choice_ids,
            "correctAnswerText": item.get("correctAnswerText", ""),
            "feedback": item.get("feedback", "")
        })
    return items


def translate_chunk(client, model: str, items):
    request = {
        "rules": [
            "Translate into Traditional Chinese used in Taiwan.",
            "Keep IBM product names and acronyms in English: IBM Z, z/OS, CICS, TSO, LPAR, HMC, SE, Sysplex, Parallel Sysplex, GRS, XCF, RACF, SAF, CPACF, Crypto Express, IOCDS, IODF, IOCP, CHPID, CNTLUNIT, FICON, IPL, SYSRES, VSAM, LDAP, LIC, WLM.",
            "Return JSON only: an array with exactly one object for every input item id.",
            "Do not change choice ids or correctChoiceIds.",
            "Choose the most relevant review target from allowedReviewTargets.",
            "The explanation should briefly explain why the correct answer is right; do not mention scoring, badge, attempts, or certificates.",
            "The review.hint should tell the learner which lesson to revisit after a wrong answer."
        ],
        "allowedReviewTargets": REVIEW_TARGETS,
        "items": items,
        "outputShape": {
            "id": "same as input id",
            "section": "Traditional Chinese section name",
            "lessonSlug": "from selected review target",
            "lessonTitle": "from selected review target",
            "sourceType": "same as input sourceType",
            "sourceUrl": "same as input sourceUrl",
            "sourceReference": "same as input sourceId",
            "prompt": "translated question prompt",
            "choices": [{"id": "same id", "text": "translated choice text"}],
            "correctChoiceIds": ["same ids"],
            "explanation": "Traditional Chinese answer explanation",
            "review": {
                "label": "複習：lessonTitle",
                "coursePath": "from selected review target",
                "videoEntryId": "from selected review target",
                "hint": "Traditional Chinese review hint"
            }
        }
    }

    response = client.responses.create(
        model=model,
        input=[
            {
                "role": "system",
                "content": "You localize IBM Z course practice questions for Taiwan learners. Return valid JSON only."
            },
            {
                "role": "user",
                "content": json.dumps(request, ensure_ascii=False)
            }
        ]
    )
    return parse_json_array(response.output_text)


def main():
    parser = argparse.ArgumentParser(description="Translate captured practice questions to zh-Hant-TW JSON.")
    parser.add_argument("--model", default="gpt-4.1-mini")
    parser.add_argument("--chunk-size", type=int, default=8)
    args = parser.parse_args()

    if not resolve_openai_api_key():
        raise SystemExit("OPENAI_API_KEY is required for practice question translation.")

    capture = json.loads(SOURCE_EXTRACT.read_text(encoding="utf-8"))
    source_items = normalized_source_items(capture)

    client = OpenAI()
    translated = []
    for chunk in chunked(source_items, args.chunk_size):
        translated_chunk = translate_chunk(client, args.model, chunk)
        by_id = {item["id"]: item for item in translated_chunk}
        missing = [item["id"] for item in chunk if item["id"] not in by_id]
        if missing:
            raise RuntimeError(f"Translation response missing ids: {missing}")
        translated.extend(by_id[item["id"]] for item in chunk)
        print(f"translated {len(translated)} / {len(source_items)}", flush=True)

    OUTPUT.write_text(json.dumps(translated, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
