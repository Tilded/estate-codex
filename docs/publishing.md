# Publishing the Codex Website

The repository contains a plain static website. There is no build step, backend, external image-generation service, or application runtime.

## Enable GitHub Pages

The static site files are in the repository root. `House-Standard.html` is the canonical reference page, `Character-Bible.html` is its companion, and `index.html` forwards the root URL to House Standard. To publish them:

1. Open the repository's **Settings**.
2. Open **Pages** under **Code and automation**.
3. Under **Build and deployment**, set the source to **Deploy from a branch**.
4. Select branch `main` and folder `/(root)`.
5. Save the settings.

GitHub Pages should then publish the root `index.html` and its sibling assets. The `.nojekyll` marker is already present.

The expected project URL for a user-site style account/repository is normally:

```text
https://tilded.github.io/estate-codex/
```

This URL is a hosting convention, not a verified live deployment. Do not distribute it as live until the Pages setting is enabled and GitHub reports a successful deployment.

## Fonts

The stylesheet requests Cinzel Decorative, EB Garamond, and Press Start 2P from Google Fonts. If the fonts cannot load, the page uses local serif and monospace fallbacks. No other runtime service is required.

## Local preview

Open `House-Standard.html` directly in a modern browser, or open `index.html` to follow the root redirect. For a local HTTP preview, serve the repository root with any simple static file server. Keep the relative folder structure intact so `assets/`, `styles.css`, and `script.js` resolve correctly.

## Updating the standard

Edit the Markdown source documents first. Then update `House-Standard.html` or `Character-Bible.html` as applicable. Keep `index.html` as the short root redirect. The Markdown documents are the durable source of truth; the site is their visual companion.
