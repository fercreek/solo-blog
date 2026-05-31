#!/usr/bin/env python3
"""Generate /public/og.png (1200x630) in the Solo Leveling 'System' style (cyan/dark)."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

W, H = 1200, 630
BG = (5, 7, 13)
CYAN = (56, 189, 248)
CYAN_BRIGHT = (125, 211, 252)
TEXT = (232, 241, 255)
MUTED = (148, 168, 196)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "og.png")

def font(path, size):
    return ImageFont.truetype(path, size)

ARIAL_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
MENLO = "/System/Library/Fonts/Menlo.ttc"

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# subtle grid
grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(grid)
step = 48
for x in range(0, W, step):
    gd.line([(x, 0), (x, H)], fill=(56, 189, 248, 16), width=1)
for y in range(0, H, step):
    gd.line([(0, y), (W, y)], fill=(56, 189, 248, 16), width=1)
img.paste(Image.alpha_composite(img.convert("RGBA"), grid).convert("RGB"), (0, 0))
d = ImageDraw.Draw(img)

# glow orbs (blurred radial)
def orb(cx, cy, r, alpha):
    o = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(o)
    od.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(56, 189, 248, alpha))
    o = o.filter(ImageFilter.GaussianBlur(70))
    img.paste(Image.alpha_composite(img.convert("RGBA"), o).convert("RGB"), (0, 0))

orb(120, 140, 130, 90)
orb(1080, 520, 110, 70)
d = ImageDraw.Draw(img)

# beveled System-window frame
m, b = 60, 26
pts = [(m + b, m), (W - m, m), (W - m, H - m - b), (W - m - b, H - m),
       (m, H - m), (m, m + b)]
d.line(pts + [pts[0]], fill=CYAN, width=2, joint="curve")
# top rail
d.line([(m + b, m), (W - m - 220, m)], fill=CYAN_BRIGHT, width=4)

# [ SYSTEM ] tag
fm = font(MENLO, 26)
tag_y = 110
d.ellipse([110, tag_y + 6, 122, tag_y + 18], fill=CYAN)
d.text((140, tag_y), "[ SYSTEM ]  ONLINE", font=fm, fill=CYAN_BRIGHT)

# Name
fname = font(ARIAL_BOLD, 92)
d.text((108, 220), "Fernando", font=fname, fill=TEXT)
d.text((108, 320), "Castañeda", font=fname, fill=CYAN_BRIGHT)

# subtitle mono
fsub = font(MENLO, 30)
d.text((112, 450), "AGENTIC  AI  ARCHITECT", font=fsub, fill=CYAN)

# footer line
ffoot = font(MENLO, 22)
d.text((112, 500), "Monterrey · MX   ·   fercontreras.com", font=ffoot, fill=MUTED)

# kicker right
fk = font(MENLO, 18)
kick = "▸ BUILDER · OPERATOR · DANCER · TRADER"
kw = d.textlength(kick, font=fk)
d.text((W - 60 - 24 - kw, 502), kick, font=fk, fill=MUTED)

img.save(OUT, "PNG")
print("wrote", OUT, img.size)
