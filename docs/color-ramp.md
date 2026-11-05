# Color Ramp
**Four palette banks · 16 entries each · RGB333 · CRAM**

This is the canonical Codex palette revision 1.0. It supersedes the earlier conversational draft: values below are snapped to the Genesis 3-bit-per-channel lattice and CRAM is written as a four-digit word.

## Encoding

The RGB333 column is written `R# G# B#`. The HEX column expands each channel to the 8-bit reference levels in `genesis-specification.md`. CRAM is encoded as `0BBB0GGG0RRR0`:

```text
word = (B << 9) | (G << 5) | (R << 1)
```

All three are equivalent representations of the same color.

## Palette usage

| Bank | Name | Assignment |
|---|---|---|
| P0 | Background | Night sky, depth, dark environmental silhouettes, backdrop |
| P1 | Architecture | Limestone, marble, stone, iron, bronze, gilt |
| P2 | UI & Heraldry | Oxblood controls, parchment plates, text, heraldic detail |
| P3 | Accent & Symbol | Moss, oak, cold iron, mystic violet, restricted candle amber |

In this art convention, P0 index `00` is the black backdrop. Index `00` in P1–P3 is reserved as transparent when used for sprites and overlays. The target engine must handle plane/backdrop transparency according to its own VDP rules. This gives a practical maximum of 61 distinct visible palette slots in a composition that uses the three non-backdrop zero entries as transparency.

## P0 — Background

Use this bank for night, storm, distant silhouettes, deep foliage, and environmental recesses. It should carry the broadest dark value range.

| Index | Name | HEX | RGB333 | CRAM |
|---|---|---|---|---|
| 00 | Backdrop black | `#000000` | `R0 G0 B0` | `0000` |
| 01 | Ink navy | `#000024` | `R0 G0 B1` | `0200` |
| 02 | Night navy | `#000049` | `R0 G0 B2` | `0400` |
| 03 | Imperial midnight | `#00006D` | `R0 G0 B3` | `0600` |
| 04 | Storm blue | `#002492` | `R0 G1 B4` | `0820` |
| 05 | Blue-black slate | `#242449` | `R1 G1 B2` | `0422` |
| 06 | Charcoal | `#242424` | `R1 G1 B1` | `0222` |
| 07 | Iron charcoal | `#494949` | `R2 G2 B2` | `0444` |
| 08 | Distant violet | `#24006D` | `R1 G0 B3` | `0602` |
| 09 | Mystic violet | `#490092` | `R2 G0 B4` | `0804` |
| 0A | Tyrian shadow | `#490049` | `R2 G0 B2` | `0404` |
| 0B | Oxblood shadow | `#490000` | `R2 G0 B0` | `0004` |
| 0C | Deep evergreen | `#004900` | `R0 G2 B0` | `0040` |
| 0D | Evergreen shadow | `#002400` | `R0 G1 B0` | `0020` |
| 0E | Distant iron | `#49496D` | `R2 G2 B3` | `0644` |
| 0F | Storm cloud | `#6D6D92` | `R3 G3 B4` | `0866` |

## P1 — Architecture

Stone and marble must remain distinct from parchment. Gold is used on architectural edges and details, never as a general fill.

| Index | Name | HEX | RGB333 | CRAM |
|---|---|---|---|---|
| 00 | Transparent | `#000000` | `R0 G0 B0` | `0000` |
| 01 | Deep recess | `#242424` | `R1 G1 B1` | `0222` |
| 02 | Cold iron shadow | `#494949` | `R2 G2 B2` | `0444` |
| 03 | Weathered iron | `#6D6D92` | `R3 G3 B4` | `0866` |
| 04 | Stone shadow | `#6D6D49` | `R3 G3 B2` | `0466` |
| 05 | Limestone shadow | `#92926D` | `R4 G4 B3` | `0688` |
| 06 | Warm limestone | `#B6B692` | `R5 G5 B4` | `08AA` |
| 07 | Sunlit limestone | `#DBDBB6` | `R6 G6 B5` | `0ACC` |
| 08 | Bone white | `#FFFFDB` | `R7 G7 B6` | `0CEE` |
| 09 | Parchment highlight | `#FFFFFF` | `R7 G7 B7` | `0EEE` |
| 0A | Bronze shadow | `#492400` | `R2 G1 B0` | `0024` |
| 0B | Burnished bronze | `#6D4900` | `R3 G2 B0` | `0046` |
| 0C | Antique gold | `#926D00` | `R4 G3 B0` | `0068` |
| 0D | Gilt midtone | `#B69224` | `R5 G4 B1` | `028A` |
| 0E | Gilt highlight | `#DBB649` | `R6 G5 B2` | `04AC` |
| 0F | Warm stone | `#DBB692` | `R6 G5 B4` | `08AC` |

## P2 — UI & Heraldry

Use for oxblood controls, aged paper, headings, text, and heraldic trim. Keep interactive states restrained.

| Index | Name | HEX | RGB333 | CRAM |
|---|---|---|---|---|
| 00 | Transparent | `#000000` | `R0 G0 B0` | `0000` |
| 01 | UI ink | `#242424` | `R1 G1 B1` | `0222` |
| 02 | Oxblood black | `#240000` | `R1 G0 B0` | `0002` |
| 03 | Oxblood | `#490000` | `R2 G0 B0` | `0004` |
| 04 | Tyrian purple | `#6D0024` | `R3 G0 B1` | `0206` |
| 05 | Tyrian light | `#920049` | `R4 G0 B2` | `0408` |
| 06 | Parchment shade | `#929249` | `R4 G4 B2` | `0488` |
| 07 | Aged parchment | `#B6B66D` | `R5 G5 B3` | `06AA` |
| 08 | Parchment ivory | `#DBDBB6` | `R6 G6 B5` | `0ACC` |
| 09 | Bone text | `#FFFFDB` | `R7 G7 B6` | `0CEE` |
| 0A | Antique gold shadow | `#6D4900` | `R3 G2 B0` | `0046` |
| 0B | Antique gold | `#926D00` | `R4 G3 B0` | `0068` |
| 0C | Pale gilt | `#DBB649` | `R6 G5 B2` | `04AC` |
| 0D | Evergreen | `#004900` | `R0 G2 B0` | `0040` |
| 0E | Moss hover | `#496D00` | `R2 G3 B0` | `0064` |
| 0F | Oxblood highlight | `#B62424` | `R5 G1 B1` | `022A` |

## P3 — Accent & Symbol

This bank carries moss, oak, symbolic iron, mystic violet, and the only designated candle amber.

| Index | Name | HEX | RGB333 | CRAM |
|---|---|---|---|---|
| 00 | Transparent | `#000000` | `R0 G0 B0` | `0000` |
| 01 | Charcoal ink | `#242424` | `R1 G1 B1` | `0222` |
| 02 | Blue-iron shadow | `#242449` | `R1 G1 B2` | `0422` |
| 03 | Cold iron | `#49496D` | `R2 G2 B3` | `0644` |
| 04 | Iron highlight | `#6D6D92` | `R3 G3 B4` | `0866` |
| 05 | Violet shadow | `#24006D` | `R1 G0 B3` | `0602` |
| 06 | Mystic violet | `#490092` | `R2 G0 B4` | `0804` |
| 07 | Violet haze | `#6D6DB6` | `R3 G3 B5` | `0A66` |
| 08 | Evergreen | `#004900` | `R0 G2 B0` | `0040` |
| 09 | Root moss | `#246D00` | `R1 G3 B0` | `0062` |
| 0A | Moss green | `#499200` | `R2 G4 B0` | `0084` |
| 0B | Oak bark | `#492400` | `R2 G1 B0` | `0024` |
| 0C | Burnished bronze | `#6D4900` | `R3 G2 B0` | `0046` |
| 0D | Antique gold | `#926D00` | `R4 G3 B0` | `0068` |
| 0E | Candle amber | `#FF9224` | `R7 G4 B1` | `028E` |
| 0F | Parchment glint | `#DBDBB6` | `R6 G6 B5` | `0ACC` |

## Usage discipline

- Do not add a fifth palette bank to an asset and still call it a four-bank Genesis palette.
- Reuse identical colors across banks when an asset spans materials.
- Keep amber rare. It marks a candle, a single inhabited window, or a similarly meaningful point.
- Gold belongs on edges, capitals, heraldry, and small ornaments. Too much gold makes the estate celebratory.
- The palette is a constrained material system, not a command to use every entry in every asset.
- For assets that must ship in a real Genesis game, validate palette assignment and transparency in the target engine or art pipeline.
