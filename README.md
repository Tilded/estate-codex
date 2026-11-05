# The Estate Codex

> Permanent visual & narrative constitution for the Estate Under Siege aesthetic. Style rules, reference doctrine, adaptation principles, and AI handoff library. Not an app—just the house standard.

**The Estate Codex is a reusable creative reference, not a game, a product landing page, or an image-generation service.** It exists to give future human and AI collaborators one stable source of truth for visual tone, narrative handling, pixel-art constraints, and adaptation across unrelated projects.

## Begin here

- **[House Standard](House-Standard.html)** — the canonical visual and narrative constitution.
- **[Character Bible](Character-Bible.html)** — the first character register, lore treatments, and working chronology.
- **[Visual Constitution](docs/visual-constitution.md)** — the identity and non-negotiable art direction.
- **[Genesis Specification](docs/genesis-specification.md)** — hardware facts, logical canvas rules, tile construction, and export distinctions.
- **[Color Ramp](docs/color-ramp.md)** — four 16-entry RGB333 palette banks with HEX, RGB333, and CRAM values.
- **[Tile Atlas](docs/tile-atlas.md)** — the 96-tile material vocabulary.
- **[Adaptation Doctrine](docs/adaptation-doctrine.md)** — how the house style travels into unrelated games and projects.
- **[Canon & Source Hierarchy](docs/canon-and-source-hierarchy.md)** — how to preserve the truth of supplied lore.
- **[AI Handoff Library](prompts/master-handoff.md)** — the reusable instruction to give a future agent.\n- **[Publishing the website](docs/publishing.md)** — enable GitHub Pages or preview locally.
- **[Prompt: Character Creation](prompts/character-creation.md)**
- **[Prompt: Asset Briefing](prompts/asset-briefing.md)**
- **[Prompt: Game Interface](prompts/game-interface.md)**

## The governing principle

**The source material governs identity. The house style governs presentation.**

A supplied lore bible determines who a character is, what they have done, what they look like, and what is true about their world. The Estate Codex determines how that material is interpreted and presented: visual language, atmosphere, composition, pixel construction, interface treatment, and tone.

The style must travel. A new project may be a Gothic adventure, a card game, a solitaire game, or something with no aristocratic subject matter at all. It should inherit the Codex's material sensibility and visual discipline without being forced into the literal fiction of the estate.

## Canonical visual statement

*The Estate Under Siege* depicts an old, functioning order under pressure. It is neither a ruin nor a victory. Architecture still expresses authority; cultivation still imposes form; people still inhabit the house. But deterioration is visible, nature is pressing against the foundations, and the storm has not yet broken.

The estate must look worth preserving. Its vulnerability is what gives the image meaning.

## Repository structure

```text
/
├── index.html                 # redirects to House-Standard.html
├── House-Standard.html
├── Character-Bible.html
├── styles.css
├── script.js
├── assets/
│   ├── hero-estate.svg
│   ├── last-abbey.svg
│   └── broken-measure.svg
├── docs/
│   ├── visual-constitution.md
│   ├── genesis-specification.md
│   ├── color-ramp.md
│   ├── tile-atlas.md
│   ├── adaptation-doctrine.md
│   └── canon-and-source-hierarchy.md
└── prompts/
    ├── master-handoff.md
    ├── character-creation.md
    ├── asset-briefing.md
    └── game-interface.md
```

## Status and limitations

This repository contains the house standard and clearly labelled visual placeholders. Placeholder art demonstrates composition and palette intent; it is not a finished game asset and must not be treated as a source of character canon. There is no image-generation integration, backend, account system, game runtime, or dependency on any individual game repository.

The website is intended to be read, referenced, and handed to other tools. The Markdown files are the durable source documents; the website is their navigable visual companion.

## Technical note

The locked internal artwork resolution is 320×224 pixels, a 40×28 field of 8×8 tiles. Do not crop it to the retired 320×180 web viewport. The approved four-bank RGB333 palette is recorded in docs/color-ramp.md.

The color ramp uses RGB333 values on the Genesis 3-bit-per-channel lattice. CRAM words are shown as four hexadecimal digits using the hardware bit layout `0BBB0GGG0RRR0`.

## Use

When a future project begins, give the AI the Codex website and the relevant Markdown source documents, then provide that project's lore bible, physical descriptions, references, and practical requirements. Use the handoff prompt to establish the order of authority and request the specific deliverable.
