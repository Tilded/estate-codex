# Locked Color Ramp
**Four palette banks · 16 entries each · RGB333 · Genesis CRAM**

This revision follows the corrected Estate Codex palette supplied in the master brief. No alternate hex values are part of the locked house palette.

## Hardware encoding

- 9-bit RGB: 3 bits per channel, 512 possible colors.
- Four 16-entry sub-palettes: 64 CRAM slots.
- Working onscreen limit: 61 colors, following the brief's transparency convention.
- Each pixel uses a 4-bit palette index; each tile selects one 16-entry sub-palette.
- CRAM word layout: `0BBB0GGG0RRR0`.
- Channel expansion used below: RGB3 levels `0, 36, 73, 109, 146, 182, 219, 255`.

For a HEX color, the `RGB333` column lists the three channel values as decimal digits from 0 through 7. The CRAM value is `(B << 9) | (G << 5) | (R << 1)`, shown as four hexadecimal digits.

## Locked color families

| Name | HEX | RGB333 | CRAM |
|---|---|---|---|
| Charcoal | `#242424` | `111` | `0222` |
| Imperial midnight | `#24246D` | `113` | `0622` |
| Storm | `#49496D` | `223` | `0644` |
| Limestone | `#B6B692` | `554` | `08AA` |
| Warm stone | `#DBB692` | `654` | `08AC` |
| Parchment | `#FFDBB6` | `765` | `0ACE` |
| Bone | `#FFFFDB` | `776` | `0CEE` |
| Antique gold | `#DBB624` | `651` | `02AC` |
| Gilt | `#FFDB49` | `762` | `04CE` |
| Burnished bronze | `#B66D24` | `531` | `026A` |
| Oxblood / Tyrian | `#6D2449` | `312` | `0426` |
| Deep evergreen | `#244924` | `121` | `0242` |
| Moss | `#6D9249` | `342` | `0486` |
| Cold iron | `#6D6D92` | `334` | `0866` |
| Candle amber | `#FFB624` | `751` | `02AE` |
| Mystic violet | `#49246D` | `213` | `0624` |

## P0 — Background

Night field, storm, distant silhouettes, deep recesses, and atmospheric mass.

| Index | Name | HEX | RGB333 | CRAM |
|---|---|---|---|---|
| 00 | Charcoal | `#242424` | `111` | `0222` |
| 01 | Imperial midnight | `#24246D` | `113` | `0622` |
| 02 | Storm | `#49496D` | `223` | `0644` |
| 03 | Cold iron | `#6D6D92` | `334` | `0866` |
| 04 | Mystic violet | `#49246D` | `213` | `0624` |
| 05 | Oxblood / Tyrian | `#6D2449` | `312` | `0426` |
| 06 | Deep evergreen | `#244924` | `121` | `0242` |
| 07 | Moss | `#6D9249` | `342` | `0486` |
| 08 | Burnished bronze | `#B66D24` | `531` | `026A` |
| 09 | Antique gold | `#DBB624` | `651` | `02AC` |
| 0A | Gilt | `#FFDB49` | `762` | `04CE` |
| 0B | Warm stone | `#DBB692` | `654` | `08AC` |
| 0C | Limestone | `#B6B692` | `554` | `08AA` |
| 0D | Parchment | `#FFDBB6` | `765` | `0ACE` |
| 0E | Bone | `#FFFFDB` | `776` | `0CEE` |
| 0F | Candle amber | `#FFB624` | `751` | `02AE` |

## P1 — Architecture

Stone, marble, iron, bronze, and small gilt edges. Preserve limestone and warm stone as distinct materials.

| Index | Name | HEX | RGB333 | CRAM |
|---|---|---|---|---|
| 00 | Charcoal | `#242424` | `111` | `0222` |
| 01 | Cold iron | `#6D6D92` | `334` | `0866` |
| 02 | Limestone | `#B6B692` | `554` | `08AA` |
| 03 | Warm stone | `#DBB692` | `654` | `08AC` |
| 04 | Parchment | `#FFDBB6` | `765` | `0ACE` |
| 05 | Bone | `#FFFFDB` | `776` | `0CEE` |
| 06 | Burnished bronze | `#B66D24` | `531` | `026A` |
| 07 | Antique gold | `#DBB624` | `651` | `02AC` |
| 08 | Gilt | `#FFDB49` | `762` | `04CE` |
| 09 | Storm | `#49496D` | `223` | `0644` |
| 0A | Imperial midnight | `#24246D` | `113` | `0622` |
| 0B | Oxblood / Tyrian | `#6D2449` | `312` | `0426` |
| 0C | Deep evergreen | `#244924` | `121` | `0242` |
| 0D | Moss | `#6D9249` | `342` | `0486` |
| 0E | Mystic violet | `#49246D` | `213` | `0624` |
| 0F | Candle amber | `#FFB624` | `751` | `02AE` |

## P2 — UI & Heraldry

Oxblood controls, parchment plates, readable text, heraldic frames, and restrained interaction states.

| Index | Name | HEX | RGB333 | CRAM |
|---|---|---|---|---|
| 00 | Charcoal | `#242424` | `111` | `0222` |
| 01 | Imperial midnight | `#24246D` | `113` | `0622` |
| 02 | Oxblood / Tyrian | `#6D2449` | `312` | `0426` |
| 03 | Mystic violet | `#49246D` | `213` | `0624` |
| 04 | Burnished bronze | `#B66D24` | `531` | `026A` |
| 05 | Antique gold | `#DBB624` | `651` | `02AC` |
| 06 | Gilt | `#FFDB49` | `762` | `04CE` |
| 07 | Parchment | `#FFDBB6` | `765` | `0ACE` |
| 08 | Limestone | `#B6B692` | `554` | `08AA` |
| 09 | Warm stone | `#DBB692` | `654` | `08AC` |
| 0A | Bone | `#FFFFDB` | `776` | `0CEE` |
| 0B | Cold iron | `#6D6D92` | `334` | `0866` |
| 0C | Moss | `#6D9249` | `342` | `0486` |
| 0D | Deep evergreen | `#244924` | `121` | `0242` |
| 0E | Storm | `#49496D` | `223` | `0644` |
| 0F | Candle amber | `#FFB624` | `751` | `02AE` |

## P3 — Accent & Symbol

Moss, evergreen, oak, symbolic iron, mystic violet, and the single designated candle amber.

| Index | Name | HEX | RGB333 | CRAM |
|---|---|---|---|---|
| 00 | Charcoal | `#242424` | `111` | `0222` |
| 01 | Cold iron | `#6D6D92` | `334` | `0866` |
| 02 | Moss | `#6D9249` | `342` | `0486` |
| 03 | Deep evergreen | `#244924` | `121` | `0242` |
| 04 | Mystic violet | `#49246D` | `213` | `0624` |
| 05 | Candle amber | `#FFB624` | `751` | `02AE` |
| 06 | Antique gold | `#DBB624` | `651` | `02AC` |
| 07 | Gilt | `#FFDB49` | `762` | `04CE` |
| 08 | Burnished bronze | `#B66D24` | `531` | `026A` |
| 09 | Limestone | `#B6B692` | `554` | `08AA` |
| 0A | Storm | `#49496D` | `223` | `0644` |
| 0B | Imperial midnight | `#24246D` | `113` | `0622` |
| 0C | Warm stone | `#DBB692` | `654` | `08AC` |
| 0D | Parchment | `#FFDBB6` | `765` | `0ACE` |
| 0E | Oxblood / Tyrian | `#6D2449` | `312` | `0426` |
| 0F | Bone | `#FFFFDB` | `776` | `0CEE` |

## Usage discipline

- Use only these sixteen locked HEX values in the CSS and style references.
- A tile selects one sub-palette; do not treat the four banks as one unrestricted 64-color palette.
- Reuse colors between banks where useful, but do not introduce substitute shades.
- Amber is reserved for candlelight or a similarly rare inhabited point.
- Gold belongs on borders, capitals, heraldry, and limited emphasis. It must not make the estate celebratory.
- Keep every asset readable at its stated native dimensions. Pixel texture is deliberate structure, not random noise.
