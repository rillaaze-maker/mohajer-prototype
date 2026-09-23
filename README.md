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

## Field testing — one link per round

| File | What it is |
|---|---|
| `test.html` | **Console.** Pick a version, take the link, watch the counts |
| `t.html` | **What the participant opens.** Four questions (age first) → the app → five closing questions |
| `test-insights.html` | **Results.** Layers, age, funnel, tap heatmap on the live screen, verbatims, CSV/JSON |
| `test-versions.json` | The list of testable builds — add a line, a new version becomes testable |
| `test-config.json` | The only file you edit: where sessions are sent, and the target |
| `test-collector.gs` | Paste into Google Apps Script to collect sessions into a Sheet |
| `test-kit.js` | Shared runtime for the three pages |

The link carries everything: `t.html?v=4.5&r=2&c=tg` — version, round, channel.
Nothing else is created or saved, so there is no study to author and no state
to sync.

`t.html` frames the wallet build from the same origin, so it can record screen
changes, taps, dead taps and rage taps **without modifying the prototype** —
which is how a frozen build like `wallet-v4.html` can be tested exactly as it
shipped.

With `endpoint` empty, sessions still work: the participant gets a code to send
back and you paste it into the console. Set the endpoint before sending the link
to a hundred people.

## For a moderated session

Give participants the **direct prototype link**, not the landing page:

```
https://USERNAME.github.io/REPO/wallet-v4.5.html
```

The landing page lists other artefacts and will prime them.

Facilitator controls sit behind the ••• button: variant, modules, failure simulation, moment labels, behaviour log, reset.

## Publishing to GitHub Pages

Upload the files to the repo, then **Settings → Pages → Deploy from a branch → `main` / `root` → Save**.

Two things that silently break it:

- **`fonts/` and `icons/` must be uploaded.** Without the fonts everything falls back to a system face and the design reads wrong.
- **Paths are case-sensitive on Pages but not on Windows.** A wrong-case filename works locally and 404s once live.

The live prototype embeds in `client-deck.html` need HTTPS — they will not render from a local `file://` copy in some browsers. On GitHub Pages they work normally.
