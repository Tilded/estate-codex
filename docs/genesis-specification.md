# Genesis Specification
**Corrected hardware standard · The Estate Codex**

The Codex's locked internal resolution is **320×224**.

## 1. Platform

- Sega Genesis / Mega Drive, 16-bit generation.
- Motorola 68000 CPU.
- Visual target: authentic Genesis-era pixel art, not a modern illustration filtered to look pixelated.

## 2. Resolution and tile field

- Locked internal resolution: **320×224 pixels**.
- Tile unit: **8×8 pixels**.
- Tile field: **40 columns × 28 rows**.
- Upscaling: nearest-neighbor only.
- CSS imagery: `image-rendering: pixelated`.
- Preserve the full 320×224 frame; do not substitute a cropped web composition for a hardware-faithful asset.

## 3. Color

- VDP color: 9-bit RGB, 3 bits per channel.
- Total possible RGB combinations: 512.
- Palette organization: four 16-entry sub-palettes (64 CRAM slots).
- Working onscreen maximum: 61 colors, following the supplied transparency convention.
- Pixel depth: 4bpp, with each tile selecting one 16-entry sub-palette.

The exact locked HEX, RGB333, and CRAM values are in `color-ramp.md`. Do not invent additional palette shades.

## 4. Pixel construction

Required:
- Hard-edged shading.
- Deliberate pixel-cluster placement.
- Chunky checkerboard or woodcut-block dithering.
- Strong readable silhouettes at native resolution.
- 8×8 tile-based construction.
- Nearest-neighbor upscaling.
- `image-rendering: pixelated` on imagery.

Forbidden:
- Anti-aliasing.
- Subpixel rendering.
- Gradients.
- Blur.
- Soft shadows.
- Painterly texture.
- High-resolution illustration with a pixel filter.
- Excessive colors or colors outside the locked ramp.

## 5. Asset dimensions

| Asset | Working dimension |
|---|---:|
| Internal scene / lore image | 320×224 |
| Hero art master | 320×224 |
| Character portrait | 128×128 |
| Character sprite | 64×96 |
| Tile | 8×8 |

The prompt library may use a 16:9 composition phrase as a descriptive art direction, but the master canvas remains 320×224 unless an explicitly documented alternate target is requested.

## 6. Export

- Preserve the logical dimensions in the PNG master.
- Use integer nearest-neighbor scaling for display enlargements.
- Apply `image-rendering: pixelated` in CSS to all raster imagery.
- Do not smooth or resample after enlargement.
- Keep any source format that preserves editable tile or palette data.
- Test silhouette, contrast, and readability at 320×224 before approving enlargement.

## 7. Reference source

This is the project's locked production brief. For hardware implementation, verify the target engine's specific asset import and memory constraints against the relevant Genesis/Mega Drive SDK documentation. Do not confuse the Codex's art specification with a claim that every planned tile or asset is loaded simultaneously into VRAM.
