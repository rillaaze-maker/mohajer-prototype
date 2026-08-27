# Mohajer · Phase 3

Static pages. No build step, no dependencies. Everything runs from plain files.

## What to open

| File | What it is |
|---|---|
| `index.html` | Landing page — links to everything |
| `client-deck.html` | **Client presentation.** 13 slides with the prototype running live inside them |
| `first-funding-v1.html` | **Prototype under test.** One flow, three variants (P0/P1/P2), two modules |
| `wallet-v0-3.html` | Wallet prototype — five flows from the WS0 document |
| `trust-onboarding-v2.html` | Trust workshop output, 22 slides |
| `onboarding.html` | The WS0 document, visualised, 28 slides |
| `design.html` | Design system — tokens, type, motion, copy rules |
| `deck.html` | Earlier stakeholder deck, 9 slides |

Archived, kept to show the build path: `wallet-v0-2.html`, `wallet-v0.html`, `wedge-v02.html`, `trust-onboarding.html`.

## Prototype URL parameters

`first-funding-v1.html` accepts:

- `?v=p0` `?v=p1` `?v=p2` — pick the variant
- `&a=1` `&b=1` — turn on the institutional / human module
- `&embed=1` — hide the facilitator controls

The client deck uses these to embed live variants. With no query string it opens in P1 with the facilitator panel available.

## For a test session

Give participants the **direct prototype link**, not the landing page:

```
https://USERNAME.github.io/REPO/first-funding-v1.html
```

The landing page lists other artefacts and will prime them.

Facilitator controls sit behind the ••• button: variant, modules, failure simulation, moment labels, behaviour log, reset.

## Publishing to GitHub Pages

Upload the files to the repo, then **Settings → Pages → Deploy from a branch → `main` / `root` → Save**.

Two things that silently break it:

- **`fonts/` and `icons/` must be uploaded.** Without the fonts everything falls back to a system face and the design reads wrong.
- **Paths are case-sensitive on Pages but not on Windows.** A wrong-case filename works locally and 404s once live.

The live prototype embeds in `client-deck.html` need HTTPS — they will not render from a local `file://` copy in some browsers. On GitHub Pages they work normally.
