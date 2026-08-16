# Mohajer · Phase 3 Prototype

همسفر مالی، مهاجر — *Mohajer, your financial travel companion*

Three static pages, no build step, no dependencies.

| File | What it is |
|---|---|
| `index.html` | Landing page — links to everything below |
| `wallet-v0.html` | **Prototype A · Digital Dollar Wallet v0** — the thing users test. 5 flows, 22 screens. |
| `onboarding.html` | Team guide + the full WS0 document, 28 slides |
| `deck.html` | 9-slide stakeholder deck |
| `design.html` | Design system reference |
| `wedge-v02.html` | Earlier wedge prototype (exchange + transfer), kept for comparison |
| `fonts/` | Radical, 6 weights, woff2 + ttf fallback |

**Give test participants the direct app link** (`/wallet-v0.html`), not the landing page — the landing page shows other options and can prime them.

## Publishing to GitHub Pages

```bash
git init && git add . && git commit -m "Mohajer prototype v0.2"
```

Create an empty repo on GitHub, then:

```bash
git remote add origin https://github.com/USERNAME/REPO.git && git branch -M main && git push -u origin main
```

Then in the repo: **Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `root` → Save.**

Live about a minute later at `https://USERNAME.github.io/REPO/`

- app → `/`
- deck → `/deck.html`
- design system → `/design.html`

If you push this folder as a subdirectory instead of the repo root, set Pages to serve from `/docs` and rename the folder to `docs`.

## Notes

- **Everything must be committed, including `fonts/`.** Without it the pages fall back to a system font and the whole design reads wrong.
- Mock numbers live in one `CONFIG` object near the bottom of `index.html` — market rate, spreads, flat fee, per-route fees. Change them there and every screen updates.
- The three prototype controls (language, reset, wedge labels) sit under the phone on desktop and collapse into a corner button on mobile, so they never cover the app's own buttons.
