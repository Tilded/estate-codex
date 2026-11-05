# Prompt: Visual Asset Briefing
**For environments, props, objects, illustrations, symbols, and game art**

Use this template when translating written lore or a concrete asset request into a copy-ready image prompt or production brief. It does not generate the image.

---

## COPY FROM HERE

Create a production-ready visual brief under The Estate Codex.

### 1. Establish the subject

Read the supplied source material and identify:
- What the asset represents.
- What it is used for in the game or project.
- Which details are established facts.
- Which details are interpretations.
- Which details would be new proposals.

Do not invent provenance, historical facts, symbols, inscriptions, or relationships. Do not add a heraldic device or religious emblem unless the source or brief supports it.

### 2. Choose a register

Choose one leading direction and explain why:

**Estate of the Crown:** formal architecture, estate grounds, portraits, heraldry, framed objects, and ordered compositions.

**The Last Abbey:** Gothic interiors, institutional ruins, memory, moss, oak roots, dust, and devotional melancholy.

**The Broken Measure / Rootbound:** philosophical accents, broken instruments, severe landscapes, symbolic objects, storm, and woodcut-block dithering.

Mix registers only when the asset has a clear reason to do so.

### 3. Describe the visual construction

Specify:
- Main silhouette and focal point.
- Foreground, middle ground, and background.
- Camera angle and composition.
- Material and surface wear.
- Palette bank and color restrictions.
- Light direction and value contrast.
- Ornament and its functional purpose.
- Negative space and text-safe regions.
- Expected reading size and thumbnail test.

The estate is neither a ruin nor a triumph. When depicting it, show visible pressure without total collapse: a neglected wing, weathered masonry, displaced stone, roots lifting paving, restrained broken chain, and storm gathering before rupture.

### 4. Genesis pixel-art specification

When the task calls for Genesis-style asset art:
- Use 320×224 as the Codex's 16:9 web-art viewport unless the asset has another specified dimension.
- Treat 320×224 as a locked artwork size, not a native Genesis screen mode.
- Build from 8×8 tile logic and the approved RGB333 color ramp.
- Use four 16-entry palette banks, 4bpp pixel construction, and at most 16 selected colors per tile.
- Use hard-edged shading and intentional chunky dithering.
- No anti-aliasing, subpixel rendering, gradients, blur, painterly texture, 3D, or high-resolution illustration with a pixel filter.
- Use nearest-neighbor scaling and keep a native-size readability test.
- State if the asset is intended for web use or a later game engine conversion.

### 5. Required output

Return:
1. Asset purpose and intended placement.
2. Source facts and visual anchors.
3. Leading register and rationale.
4. Composition and material brief.
5. Exact technical specification.
6. Copy-ready positive prompt.
7. Negative prompt.
8. Continuity and readability risks.
9. Any optional additions, visibly labelled as proposals.

Do not claim the image has been generated. The deliverable is a prompt or brief unless an image tool is separately used by the project owner.

## COPY TO HERE

---

## Fill-in brief

**Project:** [name]

**Asset:** [name and type]

**Source lore:** [paste relevant excerpt or attach document]

**Purpose in game:** [environment / UI / object / collectible / illustration / other]

**Leading register:** [Crown / Abbey / Broken Measure / choose for me]

**Dimensions:** [width × height]

**Display size:** [native size / thumbnail / full screen / other]

**Text-safe area:** [coordinates or none]

**Must include:** [facts and required details]

**Must not include:** [negative constraints]

**Reference images:** [attach and explain role]
