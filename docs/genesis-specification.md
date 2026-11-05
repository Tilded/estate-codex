# Genesis Specification
**Hardware facts, artwork conventions, and export rules**

This document separates actual Mega Drive / Genesis constraints from the Codex's custom website-art conventions. Do not describe a convenient web asset size as a native console mode.

## 1. Color hardware

The Mega Drive / Genesis VDP uses a 9-bit RGB color system: 3 bits each for red, green, and blue. The master color space therefore contains 512 possible RGB combinations.

CRAM holds 64 color entries arranged as four palettes of 16 entries each. A tile or sprite selects a palette line; its four-bit pixel data selects one of the 16 entries in that line.

The Codex uses a conservative 61-visible-color working budget for ordinary assets. This reflects the usual transparency convention in which color index 0 is not drawn for sprite pixels. The backdrop and plane behavior must be handled correctly by the target engine; do not treat all index-zero entries as ordinary opaque colors.

### RGB333 channel levels

For reference conversion to 8-bit RGB, use the evenly expanded 3-bit channel values:

| 3-bit value | 8-bit channel |
|---:|---:|
| 0 | 0 |
| 1 | 36 |
| 2 | 73 |
| 3 | 109 |
| 4 | 146 |
| 5 | 182 |
| 6 | 219 |
| 7 | 255 |

A color is represented as `R0 G0 B0` through `R7 G7 B7`. The exact displayed analog appearance can vary with console revision, video output, capture hardware, and display. The HEX values in the Codex are a practical digital reference expansion, not a claim that every console/display combination emits identical measured RGB values.

## 2. CRAM word encoding

Genesis CRAM color words use the bit layout:

```text
0BBB0GGG0RRR0
```

The 3-bit blue channel occupies bits 11–9, green occupies bits 7–5, and red occupies bits 3–1. The least-significant bit of each nibble group is zero. The 16-bit register word is displayed as four hexadecimal digits, for example full white is `0EEE`.

For RGB333 values `R`, `G`, and `B`:

```text
CRAM = (B << 9) | (G << 5) | (R << 1)
```

The CRAM column in `color-ramp.md` uses this layout. It is not a three-digit shorthand.

## 3. Tiles and pixels

- Base character/tile unit: 8×8 pixels.
- Pixel depth: 4 bits per pixel (4bpp).
- Each tile uses one selected 16-entry palette line.
- Tile art should use hard-edged clusters and intentional dithering.
- No anti-aliasing, subpixel placement, blur, or smooth gradients.
- Sprites are assembled from multiple 8×8 character cells; their overall dimensions are not restricted to a single tile.
- The tile atlas in this repository is a design vocabulary, not a promise that all 96 tiles can be resident simultaneously in VRAM with no memory planning.

## 4. Native display modes versus Codex artwork

Common Mega Drive display configurations include:
- 320×224 pixels (40×28 8×8 cells), used by common NTSC 40-cell mode.
- 320×240 pixels (40×30 8×8 cells), available in PAL configurations.
- 256-pixel-wide alternatives also exist.

**320×180 is the Codex's custom 16:9 artwork viewport. It is not a standard native Genesis display mode.**

This distinction is deliberate. The artwork must fit the website's wide composition while remaining built with Genesis-like tile discipline and RGB333 color limits. A later game implementation must choose the actual output mode and recompose or letterbox the art as necessary.

## 5. Tile-aligned staging for 320×180 art

180 is not divisible by 8. For an asset that must be composed on a whole-tile vertical grid:

1. Construct at 320×184 (40×23 tiles).
2. Reserve the lowest four rows of pixels as crop allowance or compose them so they can be safely removed.
3. Crop the bottom four pixels to produce the final 320×180 web asset.
4. Record the crop in the asset manifest.

This is a web-art workflow, not a Genesis video mode. For actual console gameplay, compose against the selected native framebuffer dimensions.

## 6. Scaling and export

- Preserve the logical pixel dimensions in the master file.
- Upscale only by integer factors whenever possible.
- Use nearest-neighbor scaling.
- Set CSS `image-rendering: pixelated` for raster assets.
- Do not resample after nearest-neighbor enlargement.
- Preserve palette index metadata in source files where the toolchain supports it.
- Export a clean PNG master and a web-optimized copy.
- Keep a readable source/editable file when practical.

## 7. Dithering and shading

Preferred techniques:
- Two-tone checkerboard dithering for low-frequency transitions.
- Larger woodcut-block clusters for stone, foliage, storm clouds, and worn surfaces.
- Hard-edged shadow masses.
- Palette changes to establish distance instead of blur.
- Highlights placed on material edges and focal points.

Avoid uniform noise. Dither is structure, not digital grain.

## 8. Reference sources

These sources establish the hardware facts above:

- [Sega Genesis Reference Sheets (1992)](https://segaretro.org/images/c/cf/SegaGenesisReferenceSheets_1992-11-05.pdf) — includes 8×8 character cells and the CRAM word layout `0000BBBOGGGORRRO`.
- [Genesis Technical Overview](https://wiki.megacatstudios.com/wp-content/uploads/2020/04/sega2f.pdf) — display dimensions, character generator, and color capabilities.
- [Genesis display and palette summary](https://segaretro.org/Sega_Mega_Drive/Technical_specifications) — useful secondary reference.

When a future game engine or devkit exposes different asset-import constraints, follow the engine's authoritative documentation for the build pipeline while preserving the Codex's visual intent.
