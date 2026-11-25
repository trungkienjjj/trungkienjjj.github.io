"""Render the OCR demo illustrations from the same references the UI uses."""

import json
from pathlib import Path
import sys

from PIL import Image, ImageDraw, ImageFont


def render_references(font_path: str) -> None:
    root = Path(__file__).resolve().parents[1]
    examples = json.loads((root / "src/data/ocr-examples.json").read_text(encoding="utf-8"))
    font = ImageFont.truetype(font_path, 104)
    font.set_variation_by_axes([600])

    missing_glyph = font.getmask("\U0010FFFF")
    characters = {char for example in examples for char in example["reference"] if not char.isspace()}
    missing = [
        char for char in sorted(characters)
        if font.getmask(char).size == missing_glyph.size
        and bytes(font.getmask(char)) == bytes(missing_glyph)
    ]
    if missing:
        raise ValueError("Font cannot render: " + ", ".join(ascii(char) for char in missing))

    width, height = 768, 158
    origin = (47, 112)
    for example in examples:
        left, top, right, bottom = font.getbbox(example["reference"], anchor="ls")
        if not (0 <= origin[0] + left and origin[0] + right <= width
                and 0 <= origin[1] + top and origin[1] + bottom <= height):
            raise ValueError(f'Reference does not fit image: {example["id"]}')

    for example in examples:
        image = Image.new("RGB", (width, height), "#f5edda")
        draw = ImageDraw.Draw(image)
        draw.line([(0, 115), (width, 115)], fill="#cabfaa", width=1)
        draw.line([(20, 0), (20, height)], fill="#dcbab0", width=1)
        draw.text(origin, example["reference"], font=font, fill="#1d2c35", anchor="ls")
        image.save(root / f'src/assets/ocr-{example["id"]}.png', optimize=True)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("Usage: python scripts/render-ocr-references.py <path-to-Dancing-Script-TTF>")
    render_references(sys.argv[1])
