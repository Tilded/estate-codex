# Tile Atlas
**Master material vocabulary · 8×8 tiles · 96 definitions**

The atlas defines a reusable material language for the Estate Under Siege register. It is a reference layout, not a claim that every tile must be loaded at once. Actual game memory allocation and tile residency depend on the target engine.

## Sheet dimensions

- 8 columns × 12 rows.
- 96 tile definitions.
- Each tile: 8×8 pixels.
- Pixel depth: 4bpp.
- Each tile selects one 16-color palette bank.
- Tile ID ranges are hexadecimal.

| IDs | Group | Palette | Role |
|---|---|---|---|
| `00–07` | Stone wall | P1 | Repeating architectural substrate |
| `08–0F` | Cracked masonry | P1 | Age and structural pressure |
| `10–17` | Moss overlay | P3 | Natural reclamation |
| `18–1F` | Marble column | P1 | Neoclassical structure |
| `20–27` | Balustrade | P1 | Formal garden boundaries |
| `28–2F` | Oak bark and roots | P1/P3 | Ancient natural structure |
| `30–37` | Ivy | P3 | Climbing vegetation |
| `38–3F` | Chain links | P3 | Iron and broken-chain motif |
| `40–47` | Heraldic banner | P2 | Identity, house, and institution |
| `48–4F` | Gilt frame structure | P2 | Interface and portrait framing |
| `50–57` | Gilt frame ornament | P2 | Corners, terminals, dividers |
| `58–5F` | Parchment plate | P2 | Reading surfaces and labels |

## Tile definitions

### 00–07 · Stone wall · P1

| ID | Tile |
|---|---|
| 00 | Flat limestone face |
| 01 | Horizontal mortar seam |
| 02 | Vertical mortar seam |
| 03 | Upper wall edge |
| 04 | Lower wall edge |
| 05 | Exterior corner |
| 06 | Interior corner |
| 07 | Shadowed stone block |

The wall must not repeat as a perfect brick pattern. Use subtle tile variation and uneven stone boundaries without adding random noise.

### 08–0F · Cracked masonry · P1

| ID | Tile |
|---|---|
| 08 | Short hairline fracture |
| 09 | Long vertical crack |
| 0A | Diagonal branching crack |
| 0B | Broken corner |
| 0C | Chipped stone edge |
| 0D | Exposed dark interior |
| 0E | Displaced masonry fragment |
| 0F | Crack with moss intrusion |

Cracks are evidence of age and pressure. Use dark one-pixel paths with limestone edge highlights. Avoid making every wall look structurally unsound.

### 10–17 · Moss overlay · P3

| ID | Tile |
|---|---|
| 10 | Sparse moss patch |
| 11 | Upper ledge growth |
| 12 | Hanging moss |
| 13 | Corner accumulation |
| 14 | Horizontal creeping growth |
| 15 | Dense root-and-moss cluster |
| 16 | Moss around mortar |
| 17 | Heavy overgrown edge |

These are transparent overlays. Keep index 00 transparent so the substrate remains visible. Moss should follow stone edges and water paths rather than appearing as a decorative green outline.

### 18–1F · Marble column · P1

| ID | Tile |
|---|---|
| 18 | Left shaft section |
| 19 | Right shaft section |
| 1A | Fluted central shaft |
| 1B | Shadowed shaft |
| 1C | Capital left half |
| 1D | Capital right half |
| 1E | Base left half |
| 1F | Base right half |

Columns are assembled vertically. The capital and base must read as larger structures. Do not compress the whole column into one tile or over-detail the fluting beyond the native pixel scale.

### 20–27 · Balustrade · P1

| ID | Tile |
|---|---|
| 20 | Horizontal rail segment |
| 21 | Short rail segment |
| 22 | Single baluster |
| 23 | Double baluster |
| 24 | Decorative stone post |
| 25 | Upper rail cap |
| 26 | Broken balustrade |
| 27 | Corner transition |

Repeat at consistent intervals, but interrupt the pattern where the scene calls for deterioration.

### 28–2F · Oak bark and roots · P1/P3

| ID | Tile |
|---|---|
| 28 | Straight trunk |
| 29 | Dark trunk side |
| 2A | Bark fissures |
| 2B | Oak knot |
| 2C | Branch junction |
| 2D | Left root |
| 2E | Right root |
| 2F | Root flare |

Use P1 for bark structure and P3 for moss accents. Assemble roots across multiple tiles so that they can spread into paving and foundations. Oak silhouettes should feel old and irregular, not like repeated tree props.

### 30–37 · Ivy · P3

| ID | Tile |
|---|---|
| 30 | Vertical vine |
| 31 | Horizontal vine |
| 32 | Diagonal growth |
| 33 | Leaf cluster |
| 34 | Hanging ivy |
| 35 | Corner growth |
| 36 | Sparse tendril |
| 37 | Dense foliage |

Ivy follows architectural seams and edges. Do not frame every object with green leaves.

### 38–3F · Chain links · P3

| ID | Tile |
|---|---|
| 38 | Horizontal chain |
| 39 | Vertical chain |
| 3A | Diagonal chain |
| 3B | Single iron link |
| 3C | Interlocking pair |
| 3D | Broken link |
| 3E | Hanging chain end |
| 3F | Severed chain fragment |

Use cold iron and deep shadow. The broken link is a recurring symbol, but it should remain occasional and meaningful.

### 40–47 · Heraldic banner · P2

| ID | Tile |
|---|---|
| 40 | Banner field |
| 41 | Folded fabric |
| 42 | Left hanging edge |
| 43 | Right hanging edge |
| 44 | Pole |
| 45 | Pole finial |
| 46 | Heraldic border |
| 47 | Emblem fragment |

Build larger arms and devices by combining tiles. Use oxblood, parchment, and antique gold. Do not invent pseudo-writing or meaningless glyphs to fill space.

### 48–4F · Gilt frame structure · P2

| ID | Tile |
|---|---|
| 48 | Horizontal top edge |
| 49 | Horizontal bottom edge |
| 4A | Vertical left edge |
| 4B | Vertical right edge |
| 4C | Inner bevel |
| 4D | Outer bevel |
| 4E | Broken-chain divider |
| 4F | Frame junction |

Frame components should be substantial enough to survive native-size viewing. Use hard two- or three-tone gold shading.

### 50–57 · Gilt frame ornament · P2

| ID | Tile |
|---|---|
| 50 | Upper-left corner |
| 51 | Upper-right corner |
| 52 | Lower-left corner |
| 53 | Lower-right corner |
| 54 | Mid-edge flourish |
| 55 | Heraldic terminal |
| 56 | Small filigree cluster |
| 57 | Worn or chipped ornament |

Ornament must describe a boundary, institution, or hierarchy. Do not apply every flourish to every panel.

### 58–5F · Parchment plate · P2

| ID | Tile |
|---|---|
| 58 | Flat parchment field |
| 59 | Aged parchment texture |
| 5A | Top edge |
| 5B | Bottom edge |
| 5C | Left edge |
| 5D | Right edge |
| 5E | Upper-left corner |
| 5F | Lower-right corner |

Use for reading panels, labels, inventory text, or archive entries. Large surfaces should vary subtly without becoming noisy. Text contrast takes priority over texture.

## Construction rules

1. Every tile is exactly 8×8 pixels.
2. Every tile uses no more than its assigned 16-entry palette.
3. Index 00 is transparency for sprite and overlay use; P0 backdrop behavior is defined separately.
4. Use flips only when the material remains plausible after mirroring. Cracks, heraldry, and directional roots may not be safely mirrored.
5. Make the silhouette readable before adding surface detail.
6. No anti-aliasing, subpixel shading, blur, soft gradients, or painterly noise.
7. Group tiles by material so future artists can locate them without guessing.
8. Keep a tile manifest with ID, palette bank, intended use, and any flip restrictions.
