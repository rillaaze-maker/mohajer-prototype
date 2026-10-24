# Mohajer · Project Handoff

**Purpose.** Everything another session (or another person) needs to pick this up
cold. Updated continuously. If you are a new session: **read this file first**,
then `prototype/README.md`.

**Last updated:** 2026-09-13 (13)
**Role:** prototypist / art director. Not responsible for business or feasibility.
**Language:** always reply in English. Product copy is Persian, formal register.

---

## 1. Where the project is

Phase 3 of 4. Phase 1 = discovery (20 interviews + benchmark). Phase 2 =
synthesis. **Phase 3 = build the prototype and validate.** Phase 4 = execution map.

Inside Phase 3 the team is at **Workstream 0 → first user test**. No test has
been run yet. Everything is a working hypothesis until it is.

---

## 2. The product in one paragraph

Mohajer is a **Wealth Mobility Layer** for Iranian users: convert Toman into a
dollar balance, hold it, and actually use it — send it, buy a foreign
subscription, set some aside for a goal, or take it back out as Toman. The
Phase 1 reframe was from *"no financial tool"* to **"no designed financial
agency"**. The core finding: users already have routes, they do not have a system.

Tagline: **همسفر مالی، مهاجر**

---

## 3. Source documents (repo root)

| File | What it gives you |
|---|---|
| `Mohajer_Digital_Dollar_Wallet_WS0_v0.html` | **The build spec.** 7 sections: wedge definition, feature map, design brief, 5 riskiest assumptions, test plan, workstream questions, definition of ready |
| `trust-anchor-output/Mohajer_Ideation_to_Prototype_Handoff_Alireza (1).md` | Trust workshop → prototype handoff. 6 barriers, 6 mechanisms, 4 concepts, P0/P1/P2 variants, 4 hypotheses |
| `trust-anchor-output/mohajer_ideation_synthesis_v2.html` | The same chain as a deck |
| `Trust-Anchor-Brainstorm-1.md` | Earlier, rawer trust brainstorm. 5 anchors. Superseded by the handoff above |
| `Nest/` | Brand identity proposal (آشیانه). **A proposal, not a decision** — see §7 |
| `customer-development-claude-guide.md` | Steve Blank framing the team works from |
| `usability-brainstorming-transcripts.md`, `خروجی جلسه ایده_پردازی برای usability.pdf` | Usability ideation |
| `SVG/logo.svg` | The real logo mark (gold swoosh) |
| `Dana/` | Dana typeface, 10 weights woff2 |
| `Mohajer_Prototype_Test_Protocol_V1.html` | **The test protocol.** Session structure, what the facilitator may and may not say, evidence weighting, Trust Moments, what to record, decision rule |

---

## 4. Decisions already made — do not relitigate

1. **Toman, not Rial**, in all UI. Nobody says ریال in an app.
2. **Dollar amounts in Latin digits, Toman in Persian digits.** `$۶۸۲.۰۰` reads as broken.
3. **Never say USDT / token / network / blockchain** in the first layer of the UI. The asset is «دلار دیجیتال».
   Since the custody-transfer concept (2026-09-13) the technical names are allowed in exactly two places, both
   opened on request: the «جزئیات فنی» explainer of the personal wallet, and the «جزئیات فنی» row on a
   transfer receipt. The sweep ignores `.deep` content for this reason.
4. **Never say the word «اعتماد» in the UI.** Demonstrate it; don't claim it. (No-Name protocol.)
5. **No verbs attached to currency labels.** «تومان» / «دلار دیجیتال» stand alone. «می‌پردازی / می‌گیری» was rejected as cliché and too familiar.
6. **Formal register throughout** (شما, never تو). The audience has money.
7. **No unverified operational promise shown as fact.** Anything unconfirmed carries a «در حال بررسی» badge. Applies to physical branches, insurance, partner names.
8. **Failure is never poetic and never carries an emoji.** Plain sentence first, then the remedy.
9. **Every flow has success, pending, and at least one failure path**, and the money always returns correctly.
10. **Gold only ever on near-black.** On light surfaces it reads dated.
11. **Typeface: Dana.** Radical was replaced 2026-08-28 — the team said it did not suit the concept.
12. **Custody is a state, never a slogan.** No screen may claim the user holds
    the key unless `S.custody` actually says so. Every custody sentence is
    generated from the `CUSTODY` table; none is hard-coded. (2026-09-08)
13. **No absolutist trust claims.** «حتی به ما», «به هیچ‌کس اعتماد نکنید»,
    «نه ما نه هیچ‌کس دیگر» are banned. In the basic mode they are factually
    wrong, and where they are true they read as overselling. (2026-09-08)
14. **Mohajer is a wallet app that also has exchange features** — not an
    exchange. Positioned like MetaMask or Rabby, said in those words on the
    intro and in the FAQ. (2026-09-08)
15. **Plain wording is the default.** Invented product vocabulary (لانه،
    آشیانه، شاخه) is the comparison arm behind the واژگان chip, not what a
    participant meets first. (2026-09-08)
16. **Text budget (سهل و ممتنع).** A title is ≤3 words, a support line ≤12,
    at most one (i) per screen. Anything longer lives on an explainer page:
    diagram first, then numbered rows. Written for someone of 60 who has never
    heard the word crypto. (2026-09-13)
17. **Three tabs only: خانه · انتقال · استفاده.** (2026-09-13)
18. **MPC is out.** Participants could not find it and could not follow it.
    Money has three places: نزد مهاجر · طلای فیزیکی · کلید مهاجر. (2026-09-13)
19. **Every string is in the COPY table.** Nothing is typed into a screen.
    The user owns the wording: they edit it in-app («متن‌ها») or in
    `copy.json` on GitHub, and it goes live. (2026-09-13)

---

## 5. The five WS0 hypotheses (what the prototype exists to test)

| # | Hypothesis | Risk |
|---|---|---|
| H1 | User understands "hold value + stay able to use it" as one value, not two | very high |
| H2 | Clear quote + custody + exit builds enough trust to hold a balance | very high |
| H3 | Buying a subscription/account is a real reason to use the balance | high |
| H4 | Goal pockets create control, not a feeling of being locked in | medium-high |
| H5 | Transfer + withdrawal reduce the fear of money getting stuck | very high |

Decision rule after 3–5 interviews: **Continue / Revise / Narrow / Stop.**
"Majority" = 2 of 3, or 3 of 4–5.

---

## 6. The trust workshop layer (later, sharper)

Problem framed as **First Funding Trust**. Six barriers (B1 asset reality,
B2 freeze risk, B3 exit, B4 cost transparency, **B5 loss of control — deepest**,
B6 legitimacy). Working direction: **Control-led Progressive Trust**.

> Show me → Let me try → Let me exit → Show me who's behind it → Be there if it fails

**⚠ Superseded scope, 2026-08-28.** The workshop recommended a First-Funding-only
prototype with P0/P1/P2 variants. **The team has since rejected that as the test
artefact** — user feedback should be collected on the *full* product prototype,
because the perception of the whole service is what drives the decision to pay.
`first-funding-v1.html` is kept as a reference for the trust mechanisms, not as
the thing users test.

---

## 7. Brand: the Nest concept — still a proposal

`Nest/` proposes آشیانه as the central word, replacing "wallet / balance / vault".
The strongest argument: **«صندوق» means lockable box**, which argues directly
against H4, the hypothesis it exists to test.

Word table: آشیانه (wallet) · شاخه (goal vault, to decide) · در آشیانه (available)
· در راه (pending) · نشستن (deposit, narrative only) · پر کشیدن (withdraw,
narrative only).

**The protective rule:** metaphor is allowed at *narrative* level (notifications,
empty states, onboarding, nav names, success screens) and **forbidden** at
*transaction* level (amounts, rates, fees, quote/confirm, custody, errors,
receipts). `wallet-v0-3.html` ships both lexicons behind a facilitator toggle and
enforces this boundary — verified that transaction strings are byte-identical in
both, and that no failure message carries a metaphor.

**Open:** the design system bans verbs on money; نشست/پر کشید are verbs. The Nest
deck asks for a written narrative-level exception. Not yet added to `design.html`.

---

## 8. What has been built

Everything lives in `prototype/` and is plain static HTML. No build step.

| File | What it is | Status |
|---|---|---|
| `index.html` | Landing page, links everything | live |
| `wallet-v2.html` | **Main prototype.** v1 + the four protocol/round-1 corrections below | **the test artefact** |
| `wallet-v1.html` | Pre-round-1 v0.3 plus the redesigned branch section and the نمای کلی dashboard | superseded by v2 |
| `onboarding-doc.html` | WS0 guide as one scrolling page + chapter rail | live |
| `trust-onboarding-doc.html` | Trust workshop as one scrolling page + chapter rail | live |
| `wallet-v0-3.html` | Previous main prototype | superseded by v1 |
| `client-deck.html` | Client presentation, prototype embedded live | live |
| `onboarding.html` | Same content as a slide deck, for speaking | kept |
| `trust-onboarding-v2.html` | Same content as a slide deck, for speaking | kept |
| `design.html` | Design system | Dana done; nest rule still open |
| `first-funding-v1.html` | First-Funding variant rig | reference only now |
| `wallet-v0.html`, `wallet-v0-2.html`, `wedge-v02.html`, `trust-onboarding.html`, `deck.html` | Archive — kept deliberately to show the build path | frozen |
| `fonts/` | Dana (6 weights) + Radical (legacy, unused) | |
| `icons/`, `manifest.json` | PWA install | |

**Never overwrite the archive files.** The team wants the process visible.

### Prototype URL parameters
`first-funding-v1.html` accepts `?v=p0|p1|p2`, `&a=1`, `&b=1`, `&embed=1`,
`&s=<screen>`, `&amt=<toman>`. The client deck uses these to embed live variants.

### Facilitator panel
••• button in the corner of every prototype: reset, seed balance, **simulate
failure**, vocabulary toggle, moment labels, behaviour log.

---

## 9. Hosting

GitHub repo `rillaaze-maker/mohajer-prototype`, GitHub Pages from `main` / root.
Live at `https://rillaaze-maker.github.io/mohajer-prototype/`.

The user uploads by drag-and-drop in the GitHub web UI — **they do not use the
terminal, and there is no working git auth on their machine.** Always finish by
listing exactly which files to upload.

Two things that silently break it: missing `fonts/`, and case-sensitive paths.
The live iframe embeds in `client-deck.html` need HTTP — they do not render from
a local `file://` copy.

**Testing note for any session:** the preview pane serves local files as `data:`
URLs, so iframes and query strings do not work there. Start the dev server
(`.claude/launch.json` → `preview_start {name:"prototype"}` → port 8765) and test
over `http://localhost:8765`. Two real bugs hid behind this.

---

## 10. Open work — the current queue

Team feedback received 2026-08-28:

1. **✅ Font** — Radical → Dana across all pages. Verified loading over HTTP.
   The Radical files still sit in `fonts/` and are now unreferenced.
2. **✅ Team documents scroll.** `onboarding-doc.html` and
   `trust-onboarding-doc.html` are one continuous page each, with a fixed chapter
   rail, live progress bar, back-to-top, and print styles. The deck versions are
   kept for speaking. **Client-facing decks stayed decks.**
   *Reveal animations were deliberately removed in document mode* — content must
   never depend on a transition having run in a document people scan and print.
3. **✅ Branch section redesigned on the Blu pattern.** See §11.
4. **✅ Dashboard** — the نمای کلی tab. See §11.
5. **✅ Testing refocused** — `index.html` now leads with `wallet-v1.html`;
   First Funding moved to the reference band.

### Home layout, 2026-08-30

The four quick actions moved **up, directly under the balance card**; the ambient
live strip moved **down, under the single primary button**. They swapped. The
reason was crowding: the bottom of the screen previously stacked four circular
buttons + the primary CTA + the five-item tab bar, which read as ten tap targets
competing in one band. It is now one button, one non-interactive strip, and the
tabs. The quick actions also sit closer to the balance they act on.

### Dark theme, 2026-08-30

Implemented as **token overrides only** — `:root[data-theme="dark"]` redefines the
same variables the light theme uses, so no component rule is duplicated and the
two themes cannot drift. The block lives at the very end of the stylesheet.

It follows the phone's own setting by default (a tester on a dark-mode phone gets
the dark app, no white flash) and the facilitator chip «حالت» pins either theme
for side-by-side comparison. `theme-color` updates with it.

Four rules needed real inversion rather than a token swap, and they are documented
in the CSS: the hero card lifts above the canvas instead of dropping below it; the
primary button inverts to dark-on-light; status tints are rebuilt rather than
alpha-composited; the phone bezel lightens.

**Two genuine bugs surfaced while building it, both pre-existing:**

1. `.opt`, `.typecard`, `.support`, `.goal`, `.act`, `.livebar`, `.back`, `.model`
   are `<button>` elements that never set `color`, so they inherited the user
   agent's `buttontext` — black. In light that coincidentally looked correct, so
   nobody saw it; on a dark canvas the text disappeared. Fixed once with
   `color:inherit`, which is a no-op in light.
2. `.preset.trial` pairs `background:var(--ink)` with `color:#fff`, so it inverted
   to white-on-white in dark. Given a dark override.

**Contrast was checked against the token values arithmetically**, not by eye —
browser measurement in this environment returns stale values mid-transition. Dark
passes AA on every text pair (body 17.4:1, secondary 6.8:1, tertiary 5.2:1, gold
10.0:1, all status tints ≥5.2:1). `--ink-3` was lightened from `#6C737B` to
`#848C95` to clear 4.5:1 — it carries the option descriptions, which is exactly
the copy this redesign exists to make readable.

**Known, pre-existing, not changed:** the *light* theme's `--ink-3` sits at
2.37:1 and `--gold` on canvas at 2.05:1. These predate this work and affect every
screen, so changing them is a design decision for the team, not a silent fix. The
new Blu-pattern components sidestep it by using `--ink-2` (4.99:1) for the limit
line and the fact line. Worth raising before the test.

### Still open

- **`client-deck.html` still embeds `first-funding-v1.html`** in three slides.
  That is defensible (those slides argue about trust mechanisms) but the deck
  does not yet show the main prototype or the dashboard. Decide before the next
  client meeting.
- **The Nest narrative-verb exception** is still not written into `design.html`.
- **Radical font files** can be dropped from the upload set.

---

## 10b. Round 1 feedback and the protocol — what changed in v2

The team ran the first sessions and supplied
`Mohajer_Prototype_Test_Protocol_V1.html`. Four things needed correcting, all
now in `wallet-v2.html`.

### 1 · The simulation disclosure was manufacturing trust

Protocol §02: state it **once, verbally, in the facilitator's intro** — quietly.
The prototype instead carried a permanent gold «داده آزمایشی» badge on every
screen. As the team put it: telling the participant up front that no real money
moves *makes the risk acceptable before they have decided anything* — "اون خود
جمله‌ش شاید فیک‌گونه اعتماد داره می‌سازه. ریسک رو اوکی می‌کنه". The test is
supposed to observe whether they would actually proceed.

**Now:** the badge is off by default and no longer appears in the UI at all. A
facilitator chip can restore it if a session needs it. Confirm in this build is
**simulated willingness, not proof of real funding** — record it that way.

### 2 · «تبدیل» only went one way

Two participants pushed on the name: *"این مگه شارژ حساب نیست؟"* and *"تبدیل اگه
هست چرا فقط ریال به دلاره و برای دلار به ریال یه چیز جداگونه گذاشتی؟"* They were
right — it was one operation split into a one-way door plus a separate exit
called «برداشت».

**Now:** one exchange with a direction switch — «تومان به دلار» / «دلار به تومان»
— on both amount screens, both titled «تبدیل». The quick action still says
«برداشت» but deep-links into the sell direction. Buy also states plainly that
Toman leaves the bank account and the dollar equivalent arrives, because
participants read that direction as a top-up and they are not wrong.
**The maths and the screens are unchanged** — verified end-to-end: 100m Toman in
quotes and settles at $682.00, $100 back out leaves $582.00.

### 3 · Nobody knew what the box/صندوق was

Same finding the team had already flagged; the v1 Blu-pattern chooser (§11)
targets it. Round 1 ran on the older build, so **this is still unvalidated** —
it is the thing to watch most closely in round 2.

### 4 · Trust needed an institution, not features

The dominant finding: participants wanted the product attached to a real بنگاه
before risking anything. Digital-ness alone did not earn trust and **no feature
was attractive enough to justify the risk** — which matters more than any UI
note, because it says the current wedge does not clear the trust bar on utility
alone.

**Now:** a «پشتوانه و مسئولیت» module, off by default and switchable, so it can
be tested as a mechanism rather than baked in (the protocol is explicit that what
varies between variants is the Trust Mechanism, not the utility or context). It
shows structure, not a claim: registration, custody, named support as settled;
**partner exchange, physical office and capital insurance each marked «در حال
بررسی»**. Decision 7 holds — we do not name a partner we have not signed or
promise a branch we do not have. The intro's blanket claim about "licensed
partners" was also corrected to say the choice is still under review.

### 5 · FAQ beside human support

Added under «سؤال و پاسخ» on the نمای کلی tab, directly after the human-support
row — the two sit together because they answer the same impulse, one instantly
and one with a person.

The eight questions are **round 1's actual questions**, not invented ones: where
the money is and who holds it, what happens if Mohajer disappears, whether it can
be taken back at any time, whether «تبدیل» is the same as topping up, whether the
boxes pay profit and what they are for otherwise, the exact fee, timings, and what
happens when a transaction fails. Unverified items inside the answers carry
«در حال بررسی» in warn colour, same rule as everywhere else.

Closed by default, so it explains on demand rather than pre-empting confusion —
which matters, because **which question a participant opens is itself evidence.**
The protocol counts "opened the details for Exit / Fee / Status themselves" as a
movement-toward-control signal. Opens are recorded; call `faqReport()` in the
console after a session to get the list in the order they were opened.

### 6 · Balance typography

The home card's `.lab`/`.tot` rules were scoped to `.bal-card`, but the markup
uses `.nest-card` — so **the balance had been rendering at body text size**, never
picking up the intended 40px. It is the one number the screen exists to show.
Now 52px desktop / 46px / 42px, weight 700, against an 11.5px caption — a 3.7×
ratio, so it reads first, Revolut-style. The gold `$` is kept.

### Reading the results

The protocol's ordering rule is the one to hold the team to:
**VALUE → TRUST → ACTION.** If a participant never understood what the product is
for, their trust reaction is not interpretable, and neither is their commitment.
Round 1 suggests value comprehension is itself shaky (the box confusion, the
«تبدیل» naming), so treat round-1 trust findings as provisional.

---

## 10c. Sanjeh — the testing platform (2026-09-03)

A second, separate product now lives in `platform/`. It is **not** Mohajer-specific
and ships in its own repo / GitHub Pages site.

**Why it was built.** The team could not reliably find the right segment, and
sessions were returning polite answers rather than evidence. Both are process
problems, not prototype problems, so they needed a tool rather than another
prototype revision.

**What it does**

| Page | Role |
|---|---|
| `index.html` | Hub — all studies |
| `study.html` | One study: participant link, facilitator link, live counts |
| `builder.html` | Author a study; the Mom Test linter runs as you type |
| `run.html` | Participant runner: welcome → screener → tasks → questions → export |
| `console.html` | Facilitator console: protocol script, timer, tagged notes |
| `results.html` | Import sessions, evidence board per hypothesis, CSV/JSON |
| `guide.html` | How to run a session, plus a live linter sandbox |

**The two mechanisms that matter**

1. **Behavioural screener.** Qualifies on what someone has done, not what they
   say they are. Options carry scores; any option can hard-disqualify (team
   connection always does). Rejections are recorded — a high rejection rate is
   itself the finding that recruiting or the segment definition is wrong.
2. **Mom Test linter.** Flags hypotheticals, opinion-seeking, leading questions,
   pitching, yes/no and double-barrelled questions, each with why it fails and a
   rewrite. Credits questions anchored in past behaviour. Persian and English.

**Two real bugs found while testing the linter, both worth remembering:**
- Persian questions end with `؟` (U+061F), not ASCII `?`. Three rules were
  written with `\?` and silently never fired on real Persian input.
- JS `` is ASCII-only, so `/(آیا|do|did)/` never matches after Persian
  letters. The closed-question rule was dead for Persian until this was found.

Both are the kind of fault that produces a tool that *looks* like it works.
If you extend the rules, test against real Persian strings, not translations.

**The layer diagnosis — the point of the whole thing (added after review).**
After every task the participant taps three things: could they do it, what
stopped them, and would they continue if it were real. The stop reason maps to
one of four layers:

| Layer | The participant's words | What it sends you to fix |
|---|---|---|
| ارزش | نفهمیدم به چه دردم می‌خورد | messaging and positioning |
| کاربردپذیری | فهمیدم ولی نمی‌دانستم چطور | flow and interface |
| اعتماد | بلد بودم ولی مطمئن نبودم | proof, control, backing |
| انگیزه | مطمئن بودم ولی مهم نبود | segment or wedge |

Results leads with the biggest one and names the kind of work it implies — this
is what answers "is trust the issue, or is usability the issue". Verified with
three seeded sessions: 9 of 14 stops attributed to trust → verdict «اعتماد ۶۴٪».
Silent below three qualified sessions.

These three questions are **built into the platform, not authored per study**,
so answers stay comparable across tasks, studies and rounds — and so making a
study stays short.

**The builder was cut down** to three steps: name + prototype URL, a task list,
and a ready-made screener (three templates, or skip). Everything else is
collapsed. A bug found here is worth remembering: `window.renderAll = …` is an
assignment, not a hoisted declaration, and the init path only awaits when there
is an `?id=`, so a *fresh* builder rendered nothing while editing an existing
study worked fine. Now a function declaration.

**Shareable links — a design fault found in real use.** The builder's primary
action produced `run.html?id=study-xxxx`. Studies built in the browser live only
in that browser's localStorage, so the link worked for its author and nobody
else — it failed in incognito and on a colleague's machine. The button that
exists to share produced something unshareable.

Fixed by embedding the study in the link: `?s=<base64url JSON>`. Opens anywhere,
no upload, no account; ~1.3 KB for a three-task study. Bundled studies in
`studies/` keep the short `?id=` form since they are fetchable by anyone. Old
`?id=` links now explain the cause instead of dying. Verified by wiping all
localStorage and opening a packed link cold.

**The architectural constraint, stated plainly.** Static site, no server, no
database — so nothing is stored centrally. A session is recorded in the
participant's browser and leaves as an export they send back; `results.html`
imports them. `settings.webhook` on a study is the upgrade path: any endpoint
accepting a POST collects sessions automatically. No audio/video recording.

**Verified end-to-end** on a local server: screener rejection captures both
disqualifying reasons; the qualifying path runs 5 tasks → 6 questions → export;
results builds 6 hypothesis cards, withholds a verdict below 3 sessions, and
exports BOM-prefixed CSV that opens correctly in Excel with Persian text.

---

## 10d. v3 — investment, self-custody, physical delivery (2026-09-05)

`wallet-v3.html`. The scope changed shape: **صندوق‌ها (goal boxes) and اشتراک
(subscriptions) were removed entirely.** Transfer and exchange are untouched.

### لانه — investment replaces the boxes

The شاخه vocabulary moved onto investment and was renamed **لانه**, so the tab
can carry the line the team wanted: **«همهٔ تخم‌مرغ‌هایت را توی یک سبد نگذار.»**
That sentence is the product argument, not decoration — each لانه is a *mix*, and
the mix is the reason to choose one.

Three baskets, weights summing to 100, shown as a bar plus a key before any tap:

| لانه | Mix | Risk |
|---|---|---|
| آرام | ۵۵٪ دلار · ۳۰٪ طلا · ۱۵٪ بیت‌کوین | کم‌نوسان |
| متعادل | ۳۰٪ دلار · ۲۵٪ طلا · ۳۰٪ بیت‌کوین · ۱۵٪ اتریوم | متوسط |
| جسور | ۴۰٪ بیت‌کوین · ۳۵٪ اتریوم · ۱۵٪ طلا · ۱۰٪ دلار | پرنوسان |

Grounded in institutional allocation practice (Schwab / XBTO / CoinTracker):
BTC-heavy is the *conservative* end and risk is added by shifting toward ETH —
the opposite of the common instinct. Adapted for this audience by starting from
a dollar/gold base, because their first need is not losing to Toman inflation,
not crypto exposure. **No speculative altcoins**: presenting a curated basket of
mid-caps would imply research capability the team does not have.

Detail screen: hand-drawn SVG chart, 3/6/12-month ranges, and a **widening cone**
for the projection rather than a forward line, because a single line reads as a
promise. History is deterministic per basket, so every participant sees the same
curve for the same option and their answers stay comparable. Every screen repeats
that past figures are illustrative and value can fall.

### Custody — «دارایی‌ات زیر بالشته»

The custody sheet was rewritten around self-custody, positioned against
exchanges that pool user funds: key in your hands, never used for our operations,
withdrawal cannot be stopped by us, monthly statement. It closes by naming the
two exits — back to Toman, or **banknotes over a counter** — neither needing our
permission.

### Physical delivery — a switchable variant

Four invented exchanges on a **hand-drawn SVG map**. Deliberately not Google
Maps: it needs a billable key, tile services are unreliable or blocked on Iranian
connections (a tester would stare at a grey square), and inside the test-platform
iframe an external map is one more silent failure. A drawn map always renders and
matches the app.

Flow: locate (simulated, no permission prompt — a denied prompt inside the iframe
would break the session) → pins + ranked list → shop detail with hours, cash
ceiling, open/closed → مسیریابی draws an animated route and step list → مبلغ and
time slot → **one-time code**. Nothing is deducted until collection; the screen
says so. Per-shop cash ceilings are enforced.

Shipped as facilitator variant «تحویل فیزیکی» (default on) so sessions can run
with and without it and the difference attributed to the mechanism.

### Second pass on v3

- **«لانه‌های شما» moved to the top** of the invest tab, above the options and
  the proverb. Once you hold something, that is what the tab is about.
- **Investing now confirms.** It previously dropped silently back to the list —
  the participant had no signal anything happened. There is a proper status
  screen: amount placed, fee, current basket value, the mix, and a receipt link.
- **The آشیانه vocabulary is confined to the آشیانه lexicon.** «لانه» and
  «همهٔ تخم‌مرغ‌هایت را توی یک سبد نگذار» appear only there; the standard
  lexicon says «سبد کم‌ریسک / متعادل / پرریسک» and «همهٔ پولتان را روی یک
  دارایی نگذارید». Otherwise the two vocabularies are not a fair comparison —
  one would have a memorable line and the other nothing.
- **Defaults are now dark theme and آشیانه vocabulary.**
- **The live pulse strip is a variant, off by default** («نبض زنده»), so social
  proof can be traded against other trust mechanisms rather than always present.

### The pillow — trust as a gesture

New variant «بالش», off by default. The balance card becomes a pillow: the
amounts are redacted blocks, the face says **«دارایی‌ات زیر بالشته.»**, and a
gold hint invites the lift. Tapping flips the card in 3D to the real balance.
Leaving home and returning re-covers it, so the second encounter is observable
too — the lift is deliberately not a toggle, because covering it again by hand
would turn the gesture into a toy.

Built from the existing tokens so it stays in the family: the same near-black
gradient as the dark card, gold for the stitched seam and the mark, a softer
asymmetric radius, a woven texture made of two crossing hairline gradients, and
two corner highlights that read as fabric rather than a box. No images.

**Why it is worth testing:** it converts the custody claim from a sentence into
an action the participant performs. What we learn is whether concealment reads
as *safety* or as *obstruction* — and that is not answerable from copy review.

**Flip-state bug found here:** `flipped` was being set true whenever the pillow
variant was off, which rotated the plain card away from the viewer — with
`backface-visibility:hidden` it would simply vanish. Flipped now means only
"the pillow has been lifted".

### Third pass — the pillow becomes a real object

The placeholder version was wrong. Redaction bars read as *loading* or *broken*,
which is the opposite of reassuring, and that is fatal for the one screen whose
job is to make concealment feel safe.

It is now a **drawn pillow**: plump bezier body, woven texture, gold stitched
piping, an embroidered mark, soft corner creases, and floating **z's** — the
pillow is resting, and so is the money. Below it: **«دارایی‌ات زیر بالشته.»**
and the reason — *کلید دست خودت است. تا برنداری، حتی روی همین صفحه هم نشان داده
نمی‌شود.* That is the privacy framing: the app opens showing nothing.

**The lift is one motion.** `rotateX` rather than `rotateY`, so it reads as
lifting rather than a page turn: the pillow rises, tips over, and the balance
card lands in its place — a single 0.95s arc with a rise-then-settle curve.

**Layout lifecycle, which is where this got interesting.** During the animation
both faces must coexist, so the card is absolutely positioned. Afterwards it
must return to normal flow — otherwise it stays absolute inside a wrapper still
sized to the much taller pillow, collapsing to 38px and leaving a hole where the
pillow was. The handover now happens on animation end. Re-covering on a later
visit is instant, never the animation played backwards.

### The colour bug, fixed properly this time

`.tx` rendered UA-black on the dark canvas — the activity list was unreadable.
The v2 fix enumerated components (`.opt,.typecard,.support,…`) and that list was
always going to fall behind; `.tx`, `.shop` and `.nest` were all missing.
Replaced with an element-level rule:

```css
button,input,select,textarea{color:inherit}
```

Specificity (0,0,1) means every class modifier still outranks it, and no future
component can inherit the wrong colour by omission.

### Nearby-exchange list alignment

`.t` and `.d` were inline spans, so shop name and address ran together. Both are
blocks now. The distance column had `class="num"` on the whole string, which
forces LTR over the Persian word too and printed «کیلومتر ۰٫۸» — only the digits
are isolated now.

### Fourth pass — the orphaned tabbar, and the pillow redone

**A stray `</div>` broke the home section.** When the balance card was first
wrapped in the flip container, the slice left one extra closing tag, which shut
the flipper early and ejected everything after it — including `#tabbar` — out of
`<section data-screen="home">`. An orphaned tabbar has no screen to be hidden
with, so it painted over **every** screen, including the intro, where it sat on
top of the شروع button. One deleted line fixed it. Worth remembering the tell:
if chrome from one screen appears on all of them, check nesting before CSS.

A structural check now exists for this class of fault — it walks all 23 screens
and asserts every primary CTA sits inside the phone, nothing overflows
horizontally, and no non-tabbed screen carries a tabbar. Currently zero.

**The pillow was redrawn.** The first silhouette had uniformly rounded corners,
which reads as a pebble. A pillow needs each edge to bow *outward* and the four
corners to stay as soft cusps where two curves meet — that single change is what
makes the shape legible. Added: a contact shadow on the bed, loft shading
brightest just above centre where a stuffed pillow is plumpest, an edge vignette,
short corner folds (the first attempt used long diagonals that read as
scratches), gold piping plus an inset stitch line, and floating z's.

**The caption no longer flips.** It was inside the flipping face, so the text
turned upside-down mid-lift. It now lives outside the flipper and fades out over
340ms while the pillow turns.

### Fifth pass — gold, the hardware key, and the PWA

**تحویل فیزیکی now delivers GOLD, not banknotes.** This was a product error on
my part, not a wording one — the whole flow was built around cash. Everything is
now quoted in **grams of ۱۸-عیار gold first, dollars second**: the amount screen
asks for grams, shows the per-gram rate and the dollar value separately, shop
stock is grams rather than a cash ceiling, and the confirmation says
«۳ گرم طلای ۱۸ عیار». A participant cannot leave that flow thinking they ordered
cash. `CONFIG.goldUsdPerGram` is the single rate every screen quotes.

**کلید مهاجر — the second trust anchor.** A hardware self-custody device,
researched against how Ledger/Trezor actually work: the private key is generated
**on the device** and never leaves it, and a 12-word recovery phrase — not the
device — is what actually restores the balance. That is the true model and the
prototype states it.

تحویل فیزیکی is now a chooser with two ways out. They make *different* claims,
which is why having both is worth testing:
- **Gold** says *you can take it out*.
- **The key** says *we cannot take it at all*.

**The honest cost is stated on every screen of it:** if both the device and the
twelve words are lost, nobody can restore the balance — not Mohajer, not anyone.
A self-custody product that sells only the upside is exactly what a careful
participant would catch us on, and the omission would cost more trust than the
feature earns. It also says plainly that Mohajer will never ask for those words,
because that is the standard phishing vector against this product class.

Ordering charges only the $49 device; any amount earmarked for the key stays in
the wallet until activation, same honest pattern as the gold counter. Cancelling
refunds the device — verified.

**The PWA was not a caching problem.** `manifest.json` still had
`start_url: "./wallet-v0.html"` — the very first build. Every installed icon has
been faithfully opening v0 this whole time. Now `./wallet-v3.html?v=34`; bump
that query on each release so an already-installed icon gets a fresh URL rather
than iOS's cached one.

**Register split, per the team.** آشیانه is now consistently تو-form and
standard stays شما-form; the two no longer mix inside one sentence. Checked
programmatically — zero mixed strings.

**Stale اشتراک copy removed** from the convert success note, the empty-balance
guard and the intro.

**The inline-span bug recurred a third time** (`.keycard`), so the structural
check now detects it directly: any inline element stacking multiline children is
flagged. All 24 screens pass with zero problems.

### The key's product shot

`prototype/mohajer-key.png` (500×500, RGBA, transparent) — a YubiKey-style body
in black with the Mohajer swoosh on a gold touch disc. Used at three sizes:
large on `k-intro`, a 44px thumbnail on the chooser card, and small on the order
confirmation.

**Where the photo is and is not used.** The chooser card uses a *stroked
glyph in a tinted tile*, like every other option on that screen — a photo
thumbnail there broke the icon language. The glyph traces the real silhouette
(body, keyring hole, touch disc, USB-C stub) so it still reads as the product.
The photo appears only on `k-intro` and the order confirmation, where it has
room to be a product shot rather than an icon.

**On `k-intro` it sits in a framed surface**, not loose on the page: standard
card background, border, radius and shadow, with a caption row carrying the name
and price. A photoreal render floating directly on a flat token-built page reads
as pasted in; inside a frame with a caption it reads as a product card. The
hover was also slowed and the rotation dropped — a framed product should sit
still.

**It is a black object on a near-black canvas**, which would normally disappear.
Handled the way product photography handles it: a soft gold radial backlight
behind it, a blurred contact shadow beneath so it sits on a surface rather than
floating, and a slow hover. The chooser thumbnail keeps a drop shadow so it
reads at 44px.

Also fixed while there: seven dollar amounts I had written with Persian digits
(`$۴۹`), which breaks decision 4.2 — dollar figures are always Latin digits.

**Note on the structural check:** it compares element bounds against the phone
frame, so it is only meaningful when the pane is actually drawing. If the
window is minimised the phone measures 0px tall and *every* screen reports a
failure. Confirm `phoneH` is non-zero before believing the output.

### Tab bar: فعالیت‌ها out, تحویل فیزیکی in

The dashboard already carries recent activity, and now has a «همه» link into the
full list, so the activity tab was spending a slot on something reachable
elsewhere. تحویل فیزیکی is the claim this round exists to test and now sits one
tap from anywhere. `p-choose` became a tabbed screen; activity kept its own tab
bar (`tabbar6`) so it still navigates correctly when opened from the dashboard.

### key-showcase.html — the product one-pager

Three A4 pages for the team: what it is and why (with the round-1 quote that
motivated it), how it works, the custody comparison table, the honest-risk note,
where it sits in the app, and what it is meant to test — including four
Mom-Test-clean questions to ask in session.

**It is print-first.** A «ذخیره به‌صورت PDF» button calls `window.print()`;
`@page{size:A4}` plus `page-break-after` on each `.page` gives one sheet per
page. Tell people to switch on **Background graphics** or the dark hero prints
blank.

**Fitting the sheet took measurement, not eyeballing.** The screen box and the
print box differ — print uses smaller padding but a narrower width, so text
rewraps and pages get *taller*, not shorter. Measured by emulating the real
print box (198mm content width, 14mm padding, against 285mm of printable
height): pages 2 and 3 were 38px and 44px over, which would have spilled two
orphan sheets into the PDF. After trimming, headroom is 118 / 19 / 84px — all
three fit. **If you add content, re-measure the same way; the on-screen height
will lie to you.**

### Vocabulary leak, and plain language for custody

**«لانه» was hardcoded in fifteen places** — the invest CTA, the mix heading,
the amount label, the risk warnings, the help sheet, the dashboard. All of it
showed in the *standard* lexicon too, which made the two vocabularies
incomparable: one had a metaphor the other never agreed to. Every one now comes
from the lexicon. Standard says سبد throughout; آشیانه says لانه. A leak check
walks all screens with the standard lexicon active and asserts the word never
appears — currently clean.

**Two bugs surfaced doing it.** A duplicate `dashCustody` key later in each
lexicon object silently won over the new one, so the rewritten label never
appeared. And `{N}ها` produced «لانهها» — a Persian word ending in ه needs a
ZWNJ before the plural, while سبد does not, so plurals need their own key
(`nestWordPl`) rather than string concatenation.

**The invest CTA copy** was «گذاشتن در این لانه», which said nothing about what
it does. Now «سرمایه‌گذاری در این لانه» / «سرمایه‌گذاری در این سبد».

**Custody is no longer called custody.** Most people do not know the word, and
the row label «نگهداری دارایی» was jargon standing where the product's whole
argument should be. It is now «پولت کجاست» → «جدا از حساب‌های ما», and one plain
sentence carries the concept wherever it appears:

> برای برداشتن پولت لازم نیست به ما اعتماد کنی — دسترسی‌اش دست خودت است.

That is the sentence to reuse; it says the thing without the term.

### FAQ rewritten for v3

Ten questions. The box/profit question became a سبد/لانه one, and two new ones
cover this build's trust anchors: how gold delivery works, and what کلید مهاجر
is and what it costs you (both sides of it). The nest word inside answers is a
`{N}` / `{NP}` token resolved at render, so the FAQ follows the active lexicon.

**RTL number order, again.** `<span class="num">` forces LTR over the *whole*
string, so «۱ گرم طلای ۱۸ عیار» rendered with the ۱ at the end. Fixed on the
delivery amount, shop stock and distance by isolating only the digits. This is
the third component to hit it — the rule is: never put `num` on a span that
contains Persian words, only on the digits themselves.

### «حضانت» — the concept, named and explained

The trust argument now has one word, and the word is never used alone. Claim and
plain definition always appear together in the same block, because most people
do not carry a definition of حضانت:

| | |
|---|---|
| آشیانه | **حضانت پولت دست خودته.** «حضانت» یعنی کلید دسترسی به پول دست کیه. اینجا دست خودته — مثل اینه که پولت واقعاً زیر بالشته، نه پیش ما. |
| استاندارد | **حضانت پولتان دست خودتان است.** «حضانت» یعنی کلید دسترسی به پول، دست چه کسی است. اینجا فقط دست خودتان است — برای برداشتن پولتان لازم نیست به هیچ‌کس اعتماد کنید، حتی به ما. |

Placed on four screens (نمای کلی, تحویل فیزیکی, کلید مهاجر, نقشهٔ صرافی‌ها),
plus the custody sheet, the pillow caption and the first FAQ answer — all using
the same term so it is taught by repetition rather than defined once and
forgotten.

### Two real bugs the leak check caught

Switching vocabulary mid-session left the old word behind in two places, which
would quietly ruin the comparison the two lexicons exist for:

1. **Already-visited screens did not repaint.** `openNest()` filled the DOM and
   navigated in one function, so `applyLex()` had no way to refresh a screen the
   participant had already seen. Split into `fillNest()` + `openNest()`;
   `applyLex()` now repaints nest screens, the FAQ, activity and the dashboard.
2. **Transaction titles were frozen at write time.** `title:'گذاشتن در '+nName(n)`
   stored whichever word was active when the purchase happened, so history
   contradicted the rest of the UI after a switch. The record now keeps
   `nestId` and the label is composed at render by `txTitle()`.

The leak check itself is worth keeping: activate the standard lexicon, re-render,
and assert «لانه» appears on no screen. It went 6 screens → 1 → 0 across these
fixes, and would have passed silently at every stage without it.

### Bugs found while building

- **`[hidden]` does not work when CSS declares `display`.** `.maploading` set
  `display:grid`, so the "finding you" spinner never went away even though the
  map had drawn underneath. Needed `.maploading[hidden]{display:none}`.
- **Screen transition race in `go()`.** A screen re-entered before its own
  500ms `leaving` timer fired carried both `active` and `leaving`; `.leaving` is
  declared later so it won, and the screen stayed invisible until the stale timer
  ran. Now `leaving` is cleared on the way in. Latent since v0 — only reachable
  by navigating faster than the animation, which a hurried tester can do.

**Verified:** no console errors; money exact across two basket purchases
(3000 − $1.75 in 0.5% fees = 2998.25); cash-ceiling and balance guards both
block; delivery leaves the balance untouched; both themes; the variant toggle
adds/removes the capability from home and dashboard.

---

## 10e. Team review of v3 — custody accuracy and the buried proposition (2026-09-08)

Source: `Downloads/team-feedback-transcripts.md` (four audio transcripts from the
technical lead) plus the founder's written note. Two separate problems.

### The technical lead: the app was making a claim it could not keep

The flagged sentence was «برای برداشتن پولتان لازم نیست به هیچ‌کس اعتماد کنید،
حتی به ما», shown on the home screen of an account in the default state. In that
state the key **is** held by Mohajer and its licensed partner, so the sentence is
not a strong claim — it is a false one, and the "even us" clause is the part that
makes it false. A withdrawal still executes through our servers.

The fix was structural, not editorial. `S.custody` now holds one of three real
models and a `CUSTODY` table describes each honestly; **every custody sentence in
the app is generated from that table**, so the claim cannot drift out of step
with the state the participant is in.

| | حالت پایه (default) | کلید چندبخشی · MPC | نگهداری شخصی |
|---|---|---|---|
| key | Mohajer + licensed partner | 2 shares user, 1 Mohajer | only inside the device |
| withdrawal | executes through us | needs 2 of 3 | needs the device |
| can we block it | **technically yes** | no | no |
| recovery | support + identity check | Mohajer's share covers a lost backup | 12 words, or nothing |

A new **نگهداری کلید** screen states the active mode at the top, compares all
three, and is where both info buttons now lead. The dashboard carries a live
readout of the same value, and the physical-delivery tab links to it.

**Ordering the device does not move custody — activating a delivered one does.**
That separation was the point of the correction, so `k-status` says so in words
and carries an activation action that flips the state.

Other corrections from the same review:

- Key-device copy rewritten from «کلید دارایی‌ات را خودش داخل خودش می‌سازد» to
  «کلید خصوصی شما را به‌صورت کاملاً ایزوله و آفلاین داخل خودش تولید می‌کند».
- The irreversibility warning was alarmist («نه ما، نه هیچ‌کس دیگر»). It is now
  a calm statement of what self-custody inherently costs, and it offers MPC as
  the alternative that keeps a recovery path.
- The odd list on the old custody sheet («استفاده از پول تو برای کار ما — هرگز»)
  was removed, as the lead suggested.
- Physical gold delivery and the hardware key were being presented as two routes
  to the same thing. They are not: delivery removes the asset from the account
  and leaves custody unchanged; the key leaves the asset and moves the custody.
  `p-choose` now says exactly that.

### The founder: the two ideas were buried

His note: the two concepts that *are* the idea — «پولت رو بذار زیر بالشتت»
(hardware key) and «هر موقع خواستی مالت رو عینی کن» (physical gold) — were three
screens deep, and 100% of viewers must get them at first glance, with no
interpretation and no figurative vocabulary.

- The intro is now those two propositions, stated plainly, occupying the page.
  The old five-row feature checklist is demoted to a single line of secondary
  copy — which is also what he asked for: usability discovered later, as reward.
- The same pair sits on the home screen directly under the balance, above the
  quick actions, each linking to its flow.
- **Default vocabulary switched from آشیانه to standard.** لانه/آشیانه/شاخه are
  exactly the "metaphorical and fantasy words" he asked to avoid on first
  contact. The Nest arm is one chip away, so the A/B is still runnable — flip
  the واژگان chip to run it. This reverses an earlier instruction from the user
  and is the one change to look at first if they disagree.
- «زیر بالشت» is kept: it is an idiom every speaker parses instantly, which is
  the opposite of an invented product word, and it is his own phrasing.

### Bugs found while doing it

- **Balance-split labels were stale and swapped.** Standard said «در صندوق‌ها»
  (goal funds, a feature removed two passes ago) and the Nest lexicon said
  «در سبدها» — the *standard* word, in the Nest arm. Both corrected. This was
  visible on the home screen of every session.
- **Nest vocabulary and informal register were leaking through fixed markup.**
  Sentences written directly into the HTML render under both lexicons, so
  `k-order` and `c-status` were showing «آشیانه» and «لانه» in the plain build,
  and eleven screens carried second-person-singular verbs in the formal one.
  Rule: **fixed markup must be neutral and formal; anything register-bearing
  belongs in the lexicon.**
- The pillow variant asserted self-custody on a basic-mode account. It is a
  privacy device, so it now says what it actually demonstrates: the balance is
  not on display.

### Verification

Zero problems across 28 screens × 3 custody modes × 2 vocabularies × 2 themes
(clipped CTAs, horizontal overflow, black-on-dark, missing lexicon keys, stray
`undefined`/`NaN`). No console errors. Money exact: the device charges $49 and
activation moves no money. No false-claim string survives in either vocabulary;
no Nest word appears in the plain build; no informal ending appears in the
formal one. `manifest.json` bumped to `?v=35`.

**Measurement note.** The structural check reads zero geometry when the Browser
pane is collapsed — every screen reports "not laid out". Front the tab, then
`dispatchEvent(new Event('resize'))` to make `fitPhone` size the stage, before
trusting any measurement. Suppress transitions during the sweep
(`*{transition:none!important}`) or mid-flight screens report false overflow.

### Still open from this review

- The technical lead also mentioned a **smart-contract wallet** as a fourth
  model. Deliberately not built — he called it operationally complex and did not
  ask for it.
- The MPC activation is a single tap. A real setup has a share-generation and
  backup ceremony, which is probably worth prototyping if MPC becomes the
  recommended default.
- `client-deck.html` still embeds `first-funding-v1.html` and shows neither the
  dashboard nor v3.

---

### 10e-3 · Naming (same day)

The product names what it holds, not its category. «کیف پول دلار دیجیتال» was a
shelf label; the user replaced it in both arms:

| | standard | آشیانه |
|---|---|---|
| intro headline | دارایی شما، با دو تفاوت روشن. | آشیانهٔ دارایی شما، با دو تفاوت روشن. |
| balance card | دارایی شما | آشیانهٔ دارایی شما |

The same phrase with and without the brand word, which keeps the two arms
comparable instead of merely different. The wallet-vs-exchange positioning the
technical lead asked for stays, one line down, in `introP`. The browser tab
title no longer names a variant either — it was «مهاجر · آشیانه v3» while the
default build is the plain one.

Also fixed: the withdraw and transfer keypads rendered dollar amounts in Persian
digits («$۱٬۵۰۰»), which decision 2 already forbids — and the Persian-separator
change made it worse. Both are Latin again, and the sweep now checks for Persian
digits inside a dollar amount.

### 10e-2 · Design pass after the team looked at it (same day)

The custody screen shipped with a CSS specificity bug: `.keycard .t` (0,2,0)
overrode `.cu-hd` (0,1,0), so the header never became a flex row, the state chip
stayed inline, and it collided with the last word of the title — which is what
the team saw as «شخصی is not written well». Matching the specificity fixed it.
**Watch for this whenever a utility class is added to an element that already
carries a descendant-selector rule.**

That prompted a full precision sweep. What it turned up:

| defect | where | cause |
|---|---|---|
| chip collided with title | custody options | specificity, above |
| icon invisible | every neutral `.custody` block | `.custody svg` set a stroke colour only in the `.who` and `.risk` variants |
| hint text overran the block below | `k-order` | `.hint` was pinned to `height:12px`, so a wrapping hint overflowed |
| three inputs, three spacings | `k-order` | two used `<label>`, the third a `.sec` heading, and the summary card had no top margin |
| key and value overlapped | `.row` anywhere both are long | `.k` had `flex:1` with an automatic minimum and `.v` sized to content, so neither could shrink |
| «$12.17» rendered as «12.17$» | several | amounts placed in RTL text without a `.num` wrapper |
| «بدون انتقال اولیه» would render reversed | `k-status` | `.num` on the element, not on the digits — the same rule that produced «گرم طلای ۱۸ عیار ۱» |
| «۱۴۶,۳۰۵» and «۰.۹٪» | everywhere | Latin separators inside Persian numerals; `fa()` now emits U+066B and U+066C |
| leading «…» landed on the wrong end | `k-intro` | a neutral character at the start of an RTL run |
| four buttons under 36px | 4 screens | pre-existing |

**The one that mattered most is not visual.** `resetAll()` — the «شروع دوباره»
the facilitator presses between two participants — cleared only balance and
activity. Baskets, key orders, gold reservations, custody mode and the pillow's
lifted flag all survived, so **participant two started inside participant one's
session**. It now clears everything the participant can change and leaves the
facilitator's variant switches alone, since those define the arm being run.

Also, the intro was listing the everyday features, which contradicts the team's
third note — those are meant to be found later, as a reward. The list is gone;
the intro is the two propositions and nothing else.

**The structural check now covers this class of defect**, not just the instances:
stacked rows sharing a line, side-by-side key/value pairs overlapping, `$` bare
in RTL text, `.num` wrapping two or more Persian words, Latin separators between
Persian digits, clipped text, tap targets under 36px, informal register in the
plain build, Nest vocabulary in the plain build, and any false custody claim.
Run it across custody mode × basket × vocabulary × theme. Current state: **0
findings over 28 screens × 10 passes**, no console errors, money exact
(device $49, activation moves nothing, invest 300 → 298.5 net, withdraw exact),
and `resetAll()` verified to return every field to its initial value.

---

## 10f. v4 — the text-budget redesign (2026-09-13)

New file: `prototype/wallet-v4.html` (v3 untouched, per the never-overwrite
rule). Built from the user's eight-point brief after the v3 round.

### What changed and why

- **A text budget as the design system.** Every screen: title ≤3 words, one
  support line ≤12, one (i) at most. Word counts per screen now run 8–57
  (the custody page is allowed 82 — it is the page the product is about).
  Anything longer went behind an (i) onto an **explainer page**: a diagram
  drawn in the icon stroke language, then three numbered rows, then «فهمیدم».
  Eight subjects share one screen (`explain`) driven by the `EXPLAIN` table.
- **Intro is one proposition.** Headline, one line, the three uses as icons
  (انتقال · سرمایه‌گذاری · زیر بالشت), one (i) «امن یعنی چه؟», CTA. Nothing
  else — the secondary features are found later, as the founder asked.
- **Three tabs: خانه · انتقال · استفاده.** استفاده holds the three things you
  do with dollars — invest, gold, the key — plus «برگرداندن به تومان».
- **Home lost the two proposition boxes.** What remains is the balance, the
  quick row, activity, the CTA, and **one custody sentence as a pill under
  the balance** («پول شما نزد مهاجر است ›» / «پول شما زیر بالشت خودتان است ›»),
  generated from state, tapping into the custody page.
- **«پول شما کجاست؟» is the trust page — 80% of the app.** Three cards:
  نزد مهاجر · طلای فیزیکی · کلید مهاجر. Each has one line, ✓/✗ pros and cons,
  «یعنی چه؟» to its explainer, and its action. The current place carries the
  green border and «الان اینجاست». Reachable from the home (i), the home pill,
  and the state row on استفاده.
- **Tutorial before gold and before the key.** `p-tut`: dollar → gold → shop,
  three rows, (i) for where the rate comes from. `k-tut`: device → key inside
  → only you, three rows, a pros/cons card, and «دقیق‌تر چطور کار می‌کند؟» which
  opens the six-step deep page. Both end in the action.
- **Self-custody, explained without jargon.** The deep page says what actually
  happens in a hardware wallet — key generated on first boot and never leaves;
  12 words are the backup; each withdrawal is a physical press; lose the device,
  buy another and enter the words; if Mohajer is gone the words work in any
  standard wallet; lose both and it is gone, and that is the method, not us.
  No بلاکچین / شبکه / توکن anywhere; the sweep flags them.
- **MPC removed.** `S.custody` is `basic | self`. Gold is not a key model; it
  is the third *place* money can be, so it is a card, not a state.
- **Copy system.** Every string lives in `COPY_DEF` (284 keys, grouped by
  screen). `data-c="key"` in markup, `C('key')` in JS. The «متن‌ها» chip opens
  an editor over the app: search, edit live, «ذخیره» (this browser), «خروجی»
  (the full table as JSON), paste-to-apply. On load the app merges
  localStorage, then fetches **`copy.json`** next to the file and merges that —
  so editing `copy.json` in GitHub's web editor changes the words for everyone.
  `copy.json` ships as the full default table. The Nest arm is a small overlay
  (`COPY_NEST`) on top of the same keys.

### The one design rule worth remembering

Flow diagrams **start on the right and arrows point left**. The first gold
diagram read backwards; it is easy to draw in reading order and forget.

### Verification

The Browser pane tools were unavailable this session, so verification runs
**headless** via `scratchpad/harness.html` + `hl.ps1`: the harness loads the
app in a 390×844 iframe, runs a scenario (`?scene=`), the structural sweep
(`?check=1`), and prints RESULT JSON for `--dump-dom`; `-png` screenshots.
Zero findings over 30 screens × 2 custody × 2 vocabularies × 2 themes for:
missing copy keys, Persian digits in a dollar amount, bare `$` in RTL, `.num`
over words, Latin separators, clipped text, overflow, black-on-dark, row
overlap, stacked-row collision, tap targets <36px, clipped CTAs, informal
register in the plain build, Nest words in the plain build, jargon, and
false custody claims. Flows exact: invest 300 → 298.5, gold takes nothing
upfront, key charges $49 and custody moves only on activation, withdraw
exact, reset clears everything. The copy editor: 284 fields, live edit,
save, export, reset — all verified.

### Second pass — one icon family, the deep layer, the comparison (2026-09-13)

The user's review of v4 was about the pictures, not the words: the explainer
diagrams looked hand-drawn, the icons on cards and on diagrams were different
drawings of the same things, labels sat on different baselines, and the forward
chevron was a typed «›».

- **One icon family (`IC`).** Every glyph is on a 24-grid with the same weight;
  tabs, quick actions, cards, activity rows, status discs and the diagrams all
  draw from it. There are no inline `<svg>` icons left in the markup except the
  back button and the keypad delete key.
- **Diagrams are generated from the icons** (`tiles()`): three tiles on one
  baseline, tinted by meaning (green = ours, gold = gold, bad = no), with
  RTL arrows for flows or `+ =` for the basket. Labels are copy keys (`dg*`)
  so the copy editor reaches them. A diagram can no longer drift from its card.
- **The chevron is a glyph** (`IC.chev`) via `data-ic`, so `.go` is consistent
  everywhere and inherits colour.
- **«بیشتر توضیح بده»** on every explainer appends a deep layer (`more:` in
  `EXPLAIN`) under the three rows — the mechanics for the person who asks:
  key in the secure element, BIP-39 words, on-device signing, rate formula,
  custody partner. Precise vocabulary is allowed there and only there; the
  jargon sweep runs on screens as opened, so the deep layer is not screened —
  keep it accurate rather than vague. `cuSelf`'s deep layer is the whole key
  explanation.
- **«به ما اعتماد می‌کنید» is gone as a con.** It insinuated; the honest cost
  of the basic state is «برای برداشت، به ما نیاز دارید» — the mirror of the
  gold state's «بدون نیاز به ما».
- **«در یک نگاه»** under the three cards: four questions × three places, ✓/✗,
  the current column tinted. Custody screen is now 103 words; the table is
  most of the increase and it is the user's request.

Copy table: 329 keys. `copy.json` regenerated. Sweep: 0 problems.

**Third pass, same day.** Two bugs and one workflow change:
- `p-tut`/`k-tut` printed the diagram *function source* because `DIAG` entries
  became functions and the two static callers still read them as strings.
- Status screens (`c-/t-/n-/w-status`) sat at the top with the buttons glued
  underneath: `.screen>*:not(.scroll){flex:none}` was overriding `.center`'s
  `flex:1`. Now `.center` grows and `*-actions` is a gapped column.
- **On-screen copy editing** («ویرایش روی صفحه» chip). In edit mode every
  element whose text is a copy string gets a dashed frame; tap it (hold it if
  it is a button's label) and a bottom panel opens with that one string. Typing
  changes it in place, autosaves to this browser, and the chip counts the
  edits. «فهرست متن‌ها» lists «تغییرهای شما» first, and «خروجی» has a one-tap
  «کپی copy.json» with the GitHub steps written next to it. Matching is by
  `data-c` or by reverse lookup of the rendered text, deepest element wins, so
  JS-rendered strings are editable too; composite strings (label + number) are
  not.
- The copy owner's first pass (intro headline, «حفظ ارزشِ دارایی» CTA, empty
  home line) is now the default table, so copy.json and the built-in text agree
  again. Two honest costs rewritten after a colleague's note: basic = «به مهاجر
  وابسته است», gold = «دزدی یا گم‌شدن، جبران ندارد» (theft was the missing risk).
  Pros/cons are one column, one line each. «یعنی چه» → «یعنی چی» everywhere.
- **The last answer is a person.** After the deep layer, «نیاز به توضیح بیشتر
  دارم» opens a call screen inside the phone (`#callui`): ringing for 2.4s,
  then «وصل شد» with a running clock and «هر سؤالی دارید، بپرسید. عجله‌ای
  نیست.» Copy keys `exAsk`, `call*` (337 keys now). It is a prop — nothing is
  dialled — but it makes the point that the explainer chain ends with a human.

### Open

- `platform/studies/mohajer-ws0.json` still points tasks at v3 screens.
- `key-showcase.html` describes MPC as an alternative in one line.
- The `p-map` screen is the wordiest of the flow screens (39) because of the
  four shop rows; acceptable, but the address could drop to the shop page only.

## 10g. Personal wallet — the custody-transfer concept, in v4 language (2026-09-13)

**Lives in `wallet-v4.5.html`, not v4.** (2026-09-16: **v4.5 is now the test
build**; v4 is the previous version. The deck and index say so.) The user wanted v4 frozen at the time; the custody-transfer concept is a separate file with its own copy table
(`copy-v4.5.json`), manifest (`manifest-v4.5.json`), storage key (`mhj45-copy`)
and index entry. v4 keeps `copy.json` (340 keys). Nothing below touches v4.

Source: `Mohajer_Personal_Wallet_Custody_Transfer_Concept_v2.html` (a colleague's
spec) plus their voice note. What changed in the model: custody is no longer a
binary state you switch into — it is **a split**. Any amount can go from Mohajer
to a personal wallet and back; the home card shows both (`نزد شما` box), the pill
reads «$1,500 نزد مهاجر · $499 نزد شما», and `S.custody` is *derived* from where the
money is (`self` iff the personal balance > 0). MPC and 2-of-3 stay out.

Two ways to hold the key, one wallet: **روی گوشی** (software, immediate — the
twelve words are shown once and checked three times before the wallet exists)
or **دستگاه فیزیکی** (the existing $49 order flow; activating a delivered device
creates the wallet with device-made words and moves the earmarked amount).
Ordering a device never starts a transfer — the concept's acceptance rule.

Flows, all in the text budget: `pw-tut → pw-mode → pw-ready → pw-words →
pw-check → pw-wallet`; A: `pw-amt → pw-quote → pw-status` (ثبت شد → در راه →
رسید; fee $1.20 shown and deducted, «برگشت‌ناپذیر» note; fail mode stops *before*
sending and refunds in full); B: `pw-back-amt → pw-back-quote → pw-sign →
pw-back-status` (destination fixed to the user's own Mohajer account; the user
signs — hold the button on the phone, or press the device — Mohajer cannot; a
refused signature changes nothing). Fee comes out of the amount, so the user never
needs TRX — said in the tech explainer, not in the flow.

The **tech layer** (`openExplain('tech')`) is where USDT / TRON / TRC‑20, the full
address, key type and the on-chain-is-truth sentence live. Receipts of A/B carry a
«جزئیات فنی ›» row that reveals asset and network. Both are `.deep` and the sweep
skips them; everything else still fails on jargon.

Also this pass: the **intro is two slides** — the proposition, then «چرا مهاجر؟»
(three places diagram + three rows: place is your choice, custody with you, exit
any time); dots, swipe or «بعدی», then «شروع». `S.slide` is the index; the scroll
follows it, so it is testable headless.

Verified by scene files (`scene-pw.js`, `scene-pw2.js`): 2,000 → 500 out → wallet
498.80; 200 back → 1,698.80 / 298.80, total 1,997.60 (two fees); fail-mode out
refunds everything; refused signature leaves the wallet untouched; device
activation moves 500 → 498.80; slides reach home. Sweep: 0 problems in both
custody states. Copy table: 450 keys.


---

## 10h. Product deck for the client (2026-09-16)

`prototype/product-deck.html` + `prototype/deck-assets/` (55 PNGs, 2× device
scale, captured headless from every archived version). 21 slides, visual-first
after the user rejected a text-heavy first cut: every screen sits in a CSS iPhone
(`.iph`), and each "devil in the detail" is a **spotlight** (`.spot`) — the
whole screen dimmed and blurred, one region crisp and magnified in a gold lens
with a short note. Lens regions are the app's own 390×844 coordinates,
**measured with getBoundingClientRect in the harness, not read off a
screenshot** (eyeballing a grid was ~40px off). Forward navigation is the LEFT
button/arrow — reading direction. **The deck has its own editor**: «✎ ویرایش»
makes every sentence contenteditable in place (214 elements incl. spotlight
notes), autosaves to localStorage, «خروجی» copies a JSON of overrides to paste
into `prototype/deck-copy.json`, which the deck fetches over http and applies
for everyone. Keys are `s<slide>-<index>` in DOM order — stable as long as the
slide markup is not reordered; if a slide is restructured, its overrides must
be re-keyed. Content order: the workstream map with product as the parallel
lane, the wedge, the five hypotheses, a seven-version timeline, round-1
learnings, the vocabulary/آشیانه argument and its protective rule, v3's three
anchors, the false claim → custody-as-state, the text budget, depth-on-demand,
honest costs, the icon family, the trust page, v4.5, gestures, «مثلاً», copy as
a product surface, the 19 decisions, what the test will learn, next steps.
Static images on purpose — a projector must never depend on an iframe booting.
To refresh a capture: `scratchpad/shots.txt` lists file|scene|name, `shot.ps1`
renders at 2×, the crops are defined in the same session's python.

Note: on 2026-09-15 the three v4.5 files were found deleted from
`prototype/` (they were in the Recycle Bin, last written 02:08). They were
restored from there for this deck; nothing in them changed.

## 10i. Field testing rebuilt — one link per version (2026-09-23)

**Where it lives: the prototype repo, not the سنجه repo.** That is the decision
everything else follows from. `t.html` and `wallet-*.html` are served from the
same origin, so the runner can read *inside* the prototype's iframe — every
screen change, tap, dead tap and rage tap — **without changing one line of the
prototype**. Cross-origin, as سنجه framed it, none of that is readable. It also
means a frozen build (v4) is testable exactly as it shipped.

**سنجه is not replaced.** It stays what it is: a general, product-agnostic tool
for *moderated* sessions — screener, Mom Test linter, facilitator console,
evidence board. This is the unmoderated, at-scale sibling for Mohajer: send a
link to a hundred people and watch the numbers arrive.

### The redesign, in one line

**A test is a link, not a document.** `t.html?v=4.5&r=2&c=tg` — version, round,
channel. Nothing is authored, saved or synced. The old flow demanded a *study*
before it would produce a link, and a study built in a browser produced a link
that worked only in that browser.

| File | Role |
|---|---|
| `test.html` | Console: pick a version, take the link, watch the counts |
| `t.html` | What the participant opens (short URL on purpose) |
| `test-insights.html` | Results, visual first |
| `test-kit.js` | Shared runtime: storage, sending, reading, `derive()` |
| `test-versions.json` | The testable builds — **one line adds a future version** |
| `test-config.json` | The only file to edit: `endpoint`, `target`, `task`, `text` |
| `test-collector.gs` | Paste into Google Apps Script → sessions land in a Sheet |

### The participant's five minutes

خوش‌آمد → **چهار سؤال** (سن اول و تنها سؤال اجباری، بعد: تا حالا دلاری نگه
داشته‌اید؟ · رمزارز؟ · پس‌انداز کجاست؟) → کار شما → **خودِ اپ تمام‌صفحه** →
**پنج سؤال** (اعتماد ۱–۵ · ادامه می‌دادید؟ · کدام لایه متوقفتان کرد · چه چیزی
گیج‌کننده بود · یک چیز را عوض کنید).

Age is first and required because every slice of the result is cut on it. The
closing five are identical in every round, so versions stay comparable — the
same reason سنجه built its three questions in rather than letting them be
authored. The four-layer model (ارزش / کاربردپذیری / اعتماد / انگیزه) carries
over unchanged.

During the app there is a top strip with **«گیر کردم»** — a sheet that records
the mood and the sentence *against the screen they are on*. That is the single
richest field in the whole dataset: a verbatim with a location.

### What is recorded, and what is not

Recorded: age band, three behaviour answers, screen path with time per screen,
taps normalised to 0…1000 of the device box, dead taps, rage taps (three inside
900 ms and 60 units), errors thrown by the prototype, time away, and everything
they wrote. **Not** asked: name, phone, bank details — so there is nothing of
that kind to leak.

Events are arrays, not objects (`['t', 11411, 498, 945, 'home', 'بعدی']`),
because a 200-tap session has to fit in one spreadsheet cell. `TK.derive()` is
the only place that reads them; every number on the dashboard comes from it, so
a figure shown twice is the same figure.

### Collection — four places, because one is not a plan (revised 2026-09-23)

The first build had a single endpoint. The user linked a Sheet, found it shaky,
and asked for backups — correctly. **A session is now written to four places
that fail for different reasons:**

1. `endpoint` — the main collector.
2. `endpoint2` — a second, separate one. Both receive every session; a Google
   outage, a filtered connection and a bad deployment do not happen together.
3. **The participant's own device** (`TK.keepMine`), plus what they can send by
   hand: a copy-able code, the system share sheet, and a **downloadable JSON
   file** with the full event stream. `contact` in the config opens the channel
   to send it to.
4. **`test-sessions.json`, committed in the repo.** The console's «گرفتن
   پشتیبان» merges every source and hands back that file; commit it and the
   results read with every server down. It is also the only copy that lives in
   version control, which is where the rest of this project's evidence lives.

**"ارسال شد" is now a verified claim, not a hope.** A `no-cors` POST resolves
even when nothing was written, so the runner asks the collector `?has=<id>` and
only then says it was sent; otherwise it shows the code path and queues a retry.
Both endpoints are posted and verified **in parallel**, capped at 7s, so a dead
server cannot leave a participant staring at "در حال ارسال…". Older collectors
that do not know `has` answer with the full list, which answers the same
question — both shapes count.

`text/plain` on the POST is deliberate: a "simple request", no CORS preflight,
which is the only reason an Apps Script can receive it. Reading is **JSONP**,
also deliberate: `/exec` redirects to another host and cross-origin `fetch` of
that redirect is unreliable; a script tag never has the problem. Verified end to
end against static JSONP stand-ins, including one live + one dead endpoint, the
repo archive, the retry queue emptying on the next page open, and the
unverified-send path.

The console shows **each source as its own pill** («سرور ۱: ۱۲ جلسه · سرور ۲:
قطع · آرشیو مخزن: ۸»), so a dead pipe is visible the day it dies rather than
when the numbers run out. The results page states which sources it read from.

**Before sending to a hundred people, press «تست اتصال» on the participants'
own network.** Google endpoints are not reliably reachable from every Iranian
connection, and finding that out on session 40 would cost the round.

### The results page

Order is the order of decisions: چند نفر → کجا گیر کردند → **سن** → مسیر و ریزش
→ **نقشهٔ ضربه‌ها** → حرف‌ها → تک‌تک جلسه‌ها.

- **Age** is a row per band: bar width = how many, colour = «ادامه می‌دادم»,
  with completion, trust and stuck counts beside it.
- **The funnel orders itself** from the median position of each screen in the
  real paths, so a future version needs no edit here to appear correctly.
- **The tap heatmap renders on the live prototype**: the iframe is told
  `go(screen)` and the taps are painted over it — grey density mapped to a
  colour ramp in `getImageData`, no library. Red ring = rage, dashed = dead tap.
  This is the "Clarity-like" part, and same-origin is what buys it.
- **Versions side by side** appears only when more than one version is in the
  field; everything else shows one version, because averaging v3 and v4.5 into
  one bar hides the only thing worth seeing.
- Below three sessions the layer verdict refuses to speak (same rule as سنجه).

### Wired to the live Sheet, and what the first real data taught (2026-09-23)

`endpoint` now holds the user's deployed Apps Script. Confirmed live from the
browser: JSONP ping answers, a POST lands, and the sheet already held **four
real sessions** from their own testing before any of this was wired up.

Three things that only showed up against a real deployment:

- **Cold start.** The first call to an idle Apps Script can take over 20
  seconds; the next ones are instant. A 7-second verify would therefore fail on
  the first participant of the day and wrongly show the fallback. The runner now
  **pings every endpoint when the app opens** — minutes before it needs the
  answer — and the verify window is 12s. «تست اتصال» in the console waits 35s
  and says so.
- **Sheets coerces ids into numbers.** `ver: "4.5"` came back as `4.5`, and a
  future `"5.0"` would come back as `5` and stop matching its own version. The
  collector now writes id/round/version/channel as forced text.
- **The sheet was unreadable by a human.** It held one giant JSON cell. It now
  also carries `trust, go, stop, confuse, change, notes, screens, taps, rage,
  dead` as their own columns, so the Sheet itself is sortable. `json` stays in
  **column 9** deliberately, so sheets already filled by the older script keep
  parsing; missing columns are appended to the header on next write.

**The instrumentation bug the real data caught.** One of those four sessions
logged 16 "dead taps" out of 22 events. They were not dead taps — they were
**scrolls and swipes**. `pointerdown` fired, and a tap was recorded before it
was known whether the finger moved. Classification now waits for `pointerup`
and discards anything that moved more than 12px or was held over 1.2s. Verified:
a drag now produces no event at all, a miss produces a dead tap, a hit produces
a labelled tap. Had this shipped to 100 people, every scroller would have looked
like a confused user, and «نقطه‌های گیر» would have ranked the longest screens
highest — a metric that confidently points the wrong way.

Rows whose id starts with `TEST-` are ignored everywhere, so a connection probe
never becomes a data point.

### Restarting a round — the team's own testing was polluting the numbers (2026-09-23)

The team bug-hunts on the same build with the same link, so the console's
counters mixed their sessions with real participants'. The user asked to
"restart" the data.

**The answer is the round, not deletion.** «راند تازه» in the console bumps the
round number, rewrites every link and the invite text, and the live panel counts
**that round only** — zero, immediately. Old sessions are not touched: they stay
in the sheet, stay visible under «همهٔ راندها», and each round keeps its own
«نتیجه» link. A line under the counters says how many sessions are sitting in
other rounds, so a zero is never mistaken for lost data.

Two things this needed to actually work:
- The round is **remembered per version** (`mhj.test.round.<ver>`). It used to
  reset to 1 on reopen, which would have quietly merged the new round back into
  the old data — the restart would have looked like it worked and not have.
- «راند تازه» is **max(data, current) + 1**, so it works before the server
  answers. Apps Script's cold start is slow enough that the button was computing
  "next = 1" from an empty table.

**No remote wipe, deliberately.** The collector URL lives in a public repo;
a delete action behind it would let anyone holding the link erase a round.
Emptying the sheet stays where only the owner can do it — in Google Sheets
(duplicate the tab first, then delete rows 2+). The console says exactly this.

### The optional contact step, and the promise it broke (2026-09-23)

A sixth closing screen was added at the user's request, in their own words:
«اگر دوست دارید که بیشتر راجع به تجربه و ایده‌هاتون صحبت کنید / شماره تماس و
نامتون رو برای ما بنویسید. (کاملاً اختیاری)» — two fields, a «بدون شماره تمام
می‌کنم» skip, and nothing required.

**It contradicted the welcome screen**, which promised «نام، شمارهٔ تماس و
اطلاعات بانکی از شما نمی‌پرسیم». Asking at the end while promising the opposite
at the start is the exact move this product spent three versions removing, so
the promise was rewritten instead: «هیچ اطلاعات بانکی‌ای از شما نمی‌پرسیم. نام و
شماره هم فقط اگر خودتان بخواهید، آن‌هم در پایان.» The console footer and the
invite message were corrected the same way.

Contact lives in `S.contact`, **separate from `S.end`**, so it can be seen,
exported and removed as a unit. It appears in the results as its own section —
«می‌شود تماس گرفت», with the person's own closing sentence next to the number so
a call starts from what they said — as two dedicated CSV columns, and as
`name`/`tel` columns in the Sheet. Everyone in that list typed it themselves;
the collector's header says so, because in six months nobody will remember.

Question numbering («۱ از ۴») is now computed from the array length. It was
hard-coded, and adding this screen would have left five questions labelled
"of 5" while six were asked.

### Copy rules the user set here (2026-09-23)

- **No self-blame in participant copy.** «اگر جایی گیر کنید، ایراد از طراحی
  ماست» was cut: inviting honesty must not be bought by running the product
  down. It reads «هر جا مکث کردید یا سؤالی برایتان پیش آمد، همان‌جا بگویید —
  دقیقاً همان چیزی است که دنبالش هستیم.»
- **Frame it as a simulation, not as an absence.** Not «پول واقعی نیست» but
  «این نسخه یک شبیه‌سازی است». Applied to the runner, the invite message and the
  dashboard. The same rule should be applied to any new participant-facing copy.

### Two bugs worth remembering

- `.sent` is `display:inline-flex`, which **beats `[hidden]`** — the "sent"
  line and the fallback code box showed at the same time. `[hidden]{display:none
  !important}` now sits at the top of the sheet.
- `.num{direction:ltr}` is right for `$1,500` and **wrong for Persian digits in
  a Persian sentence**: "۵ نفر" and "۱۸ تا ۲۴" came out reordered in the tables.
  Persian digits need no LTR override at all; `.num` is now only
  `unicode-bidi:isolate` + tabular numerals, and `.en` carries true LTR.

### Open

- `platform/studies/mohajer-ws0.json` still points tasks at v3 screens; سنجه's
  own study list is untouched by this work.
- `SCREEN_FA` in `test-kit.js` names the screens of v2…v4.5; a screen added in a
  future build shows its raw id until a line is added.
- The task shown to participants is one open task by default. If a round needs
  three specific tasks, that is the next thing to add — the layer questions
  already support being asked per task.


## 10j. v4.5 — distribution, bars, and what the dollar actually is (2026-09-24)

Four changes to `wallet-v4.5.html`, all from the same complaint: the product's
real proposition — **you choose where your money is kept** — was not visible
where it mattered.

### توزیع دارایی on home

Home showed *allocation* (قابل استفاده / سرمایه‌گذاری / در حال پردازش) but never
*custody*. Added a two-colour bar directly under the balance with «نزد مهاجر» and
«نزد شما» and their amounts, and the custody pill became a **full-width row**:
gold dot + «نگهداری دارایی توسط مهاجر», 48px, semibold. Three states, all
generated from `pwBal()` and never typed:

| state | row |
|---|---|
| all at Mohajer | نگهداری دارایی توسط مهاجر |
| split | نگهداری دارایی توسط مهاجر و خودتان (`cuAtBoth`, new) |
| all self | پول شما زیر بالشت خودتان است |

The bar is shown **at zero too**, empty and dimmed: it teaches that money can
live in two places before the user has any. Numbers moved out of the row into
the bar, so the row states *who holds the key* and the bar states *how much*.
The fourth «نزد شما» box was removed — the bar replaced it. The legend is a
readout, not buttons: it used to be two 30px tap targets 20px above a 48px row
that opened the same page. JTBD unchanged: balance, then one action.

### طلای فیزیکی is now شمش, per Milli / Wallgold

The screen asked «چند گرم؟» with a free decimal — you cannot buy 3.7 grams of
gold. It now picks **standard bars**: ۰٫۵ / ۱ / ۲ / ۲٫۵ / ۵ / ۱۰ گرمی, each with
its price and a −/+ stepper, summing to «۳ شمش · ۷ گرم». The shop's stock caps
the + button per row. The pickup screen and the receipt carry the same sentence,
plus **کارت شناسایی — الزامی**, which is how the real services do it. Verified:
1×5g + 2×1g = 7g → $450.50 ($64/g + $2.50), identical on screen and receipt.

Bar denominations are a business parameter (`BARS`), not a design decision.
Milli enforces a 5g minimum; we do not, because it would block small test
sessions — **WS3 should confirm both.**

### ماهیت دارایی — the team's six statements, verbatim

The colleague's note was right: «به شکل تعدادی استیبل‌کوین در بیت‌وانا» is not
transparency. The team chose the **single-asset model** for MVP (1 digital
dollar = 1 USDT at Bitvana), not a basket. Their six sentences map exactly onto
the explainer's shape — three rows, then three behind «بیشتر توضیح بده»:

1. not cash, not a bank deposit · 2. 1:1 USDT at Bitvana, your share recorded ·
3. Bitvana custodies and converts, Mohajer manages balance and access ·
4. USDT targets ~$1 but can drift, and is not a guaranteed deposit ·
5. out to rial, or to your own wallet over TRON; rate/fee/time shown first ·
6. everything logged; on-chain transfers have public ids, verifiable without us.

Statement 4 is the one that matters: it is the first place the product admits a
risk in its own instrument. **Bitvana is now named in every place that talks
about custody** (`exCuBasic1`, `exSafeM2`, `exCuBasicM1`, `dgPartner`) — layer
one names the institution, layer two names the token, which keeps USDT on an
on-request surface as decision 3 requires.

The basket copy (`exBasket*`) is untouched — that is the *investment* product,
a different thing from the dollar's backing, and nothing claims otherwise.

### Labels that name the thing, and gold last (2026-09-24, second pass)

Two corrections from the founder, both about a word being vaguer than the state
behind it:

- **«در حال پردازش» → «در حال تبدیل».** "Processing" could be read as a pending
  gold pickup; it is only ever money mid-conversion. A gold order deducts at
  pickup, so it is *not* in this bucket and must not look like it is.
- **«نزد شما» → «در کیف پول شخصی».** "With you" is a feeling; the wallet is a
  place. Applied to the distribution legend and `walletBox`.

**طلای فیزیکی moved to third** on «پول شما کجاست؟» (`CU_ORDER` is now
`['basic','self','gold']`), so the two digital custody states sit together and
the physical one closes the list. `CMP`'s rows are positional against
`CU_ORDER`, so every row was permuted with it — otherwise the comparison table
would have kept rendering the old columns under the new headers and quietly
lied. Re-verified all four rows after the move: بدون نیاز به ما (نه/بله/بله) ·
بازیابی رمز (بله/نه/—) · خرج مستقیم (بله/بله/نه) · نگهداری شخصی (نه/بله/بله).

### انتقال — the test finding that any number was "verified" (2026-09-24)

Testers stopped at the transfer screen and asked **«این شماره را از کجا بیاورم؟»**
The screen asked for a mobile number with no explanation, and `tLookup()`
declared *any* ten-digit number a verified «سارا رضایی». The prototype was
teaching something false about how transfers work.

Three changes:

- **The missing sentence**, at the top of the screen: «انتقال فقط به کسانی که
  خودشان هم در مهاجر حساب دارند.» That is the rule testers had to guess.
- **A contact book** (`CONTACTS`): دوست، همکار، **پدر، مادر، برادر** — two on
  Mohajer, three not, each with a green «مهاجر دارد» or amber «مهاجر ندارد»
  chip. Family names were the founder's ask and they carry the point better
  than two strangers: the people you actually send money to are mostly not on
  the app yet.
- **Invite instead of a dead end.** A contact without Mohajer — or any unknown
  number — opens `t-invite`: who it is, **the actual SMS that will be sent**
  rendered as a message bubble, an invite code (`MHJ-####`), the number, and
  «فرستادن دعوت رایگان است». Sending switches the screen to a confirmation.
  Nothing is charged and no money moves.

The recipient is now real state (`S.to`) instead of three hard-coded copies of
«سارا رضایی»: the amount screen, the confirm rows and the activity title all
follow the person actually chosen, and «ادامه» only unlocks for someone who has
Mohajer. Verified: $2,000 → $50 to a Mohajer contact → $1,949.50 with the fee,
activity reads «انتقال به مهدی کریمی».

**Second pass, after the founder saw it (same day).** The «دعوت» button was a
`.btn`, which in this design system is `width:100%` — it crushed the row and the
name wrapped one letter per line. Beyond the bug, picking a recipient did not
*look* like picking a recipient, and an irreversible transfer should say who it
is going to more than once. Now:

- **Two sections.** «کاربران مهاجر» are solid cards with a radio; «هنوز مهاجر
  ندارند» are hollow dashed cards with a «دعوت» pill and a line saying you
  cannot send to them yet. A non-user row is not a row you can select by
  accident — the only thing tappable on it is دعوت.
- **The recipient is stated three times before any amount is typed**: a green
  «گیرنده» card with name and number and a «تغییر» button, the chosen row
  badged «گیرنده», and the CTA itself reading **«ادامه · سارا رضایی»**. The
  confirm screen (۳/۳) then restates it with «برگشت‌ناپذیر است».
- `.mini` is the new in-row button (auto width, 38px); `.btn` stays full-width
  where it belongs.

Verified at 360px: no overflow, invite round-trip leaves the recipient card
intact (the reported bug), «تغییر» clears selection, field and CTA together.

**The `[hidden]` trap, again.** `#inv-done` is a `.center`, which sets
`display:flex` and beat the `hidden` attribute — the invite screen showed the
SMS preview and the "sent" confirmation at once. `[hidden]{display:none
!important}` is now in the reset, where it should have been from the start.
Same bug, same cause, third file (`t.html` had it too). Re-checked the pillow
flip and the pw signing screens, which also toggle `hidden` on styled elements.

### Gold is paid for when it is ordered (2026-09-24, third pass)

«زمان کسر: لحظهٔ تحویل» was wrong — the money is spent when the order is placed,
so `doPhysical()` now deducts it there and the row reads «همین حالا».

That forced two honest consequences:

- **Cancelling refunds in full** (`cancelPhysical`), including the $2.50 delivery
  fee, because nothing was delivered. The transaction goes to «برگشت», not
  «لغو شد». `codeExpires` and `exGoldWhyM3` now say the money comes back, and
  the two of them finally agree on 24 hours (one said 48).
- **The gold has to appear somewhere.** Deducting without showing it would just
  look like the balance shrank. `goldHeld()` joins `total()` and the
  distribution bar gains a third bronze band, «طلای فیزیکی», which appears only
  while an order exists — gold is an event, not a standing state like the other
  two. Verified: $2,000 → order $450.50 → available $1,549.50, gold $448,
  headline $1,997.50 (down by exactly the fee, which really is spent) → cancel →
  $2,000 and the band disappears.

The rate is now locked at order time, so `exGoldWhyM2` says that instead of
"the delivery-day rate applies".

### Two home corrections

- **A rounding lie.** Home showed سرمایه‌گذاری as **$100** where the basket
  screen showed **$99.50** — `usd0` rounds, and a 0.5% entry fee lands exactly on
  the half. One number, two answers, on two screens the user compares. `usdx`
  now rounds only when rounding changes nothing, so $200 stays short and $99.50
  stays true. Applied to all three home boxes and the distribution legend.
- **«در حال تبدیل» only when something is converting.** It is a network state,
  not a place money lives, and a permanent «$0» box taught nothing. It is hidden
  at zero and appears while a conversion is in flight — which is the only moment
  it means anything.

### بیت‌وانا, named properly

«بیت‌وانا» alone means nothing to someone who has not heard of it. First mention
in each surface is now **«صرافی رمزارز بیت‌وانا»**, and the dollar, custody and
basket explainers carry a footnote card — **«ⓘ بیت‌وانا چیست؟» — «یک صرافی رمزارز
ایرانیِ دارای مجوز که دارایی دلاری کاربران مهاجر را نگهداری می‌کند.»** It is a
card inside the same explainer, not a new screen: an explainer that opens another
explainer loses the reader. The basket explainer also now says the basket's
assets sit at the same custodian (`exBasketM3`), which someone will ask the
moment they read the dollar page.

### «این دلار چیست؟» moved one screen earlier

It lived on the confirm screen — after the user had already decided. It now also
sits on the amount screen, under the presets and above the keypad, as a compact
40px pill, so the question can be asked **while the toman is being typed**. It
stays on confirm as the last check before paying.

---

## 10k. Fee policy v1.0 and live rates (2026-09-25)

From `Mohajer_v4_5_Fee_Pricing_Implementation_Spec_v1_0.md`. The spec's core
finding was right and damning: the quote screen showed a **$4.58 fee on a
$1.50 flat fee** because the displayed "fee" silently folded in a 0.9% spread.
Numbers on one screen contradicted each other.

**One config, one formula per service.** `FEES` at the top of the file now holds
every number; no page computes its own.

| service | rule |
|---|---|
| خرید | ۰٫۷۵٪ of gross, floor $0.50, min purchase $50 |
| فروش | ۰٫۷۵٪ of sold USD, floor $0.50 |
| انتقال داخلی | **صفر** (was $0.50 — an internal ledger move cannot carry a network-shaped fee) |
| کیف پول شخصی | ۰٫۲٪ capped $5 + the real network cost, on separate lines |
| سرمایه‌گذاری | ۰٫۵٪ on entry; exit and periodic **zero in this version** |
| طلا | metal + partner fabrication + ۰٫۵٪ service, floor $2.50 — three visible lines |
| دستگاه | $49 labelled «قیمت نمونه» |

**One execution rate in both directions.** The old build bought at 146,305 and
sold at 143,405 — a hidden 2% round trip *on top of* the stated fee. There is
now a single «نرخ اجرا» and the whole cost sits in the fee row, which is what
makes «هزینه کل چطور حساب شد؟» (a new explainer) able to tell the truth.

**Rates are today's market** (۳ مهر ۱۴۰۵, tgju): **۲۳۴٬۶۱۵ تومان** per dollar and
**$102.80** per gram of 18k gold — the two are internally consistent (24.1m
toman/gram ÷ 234,615 = $102.8, and 18k at ~$4.3k/oz gives $103.7).

**The spec shipped its own test oracle** (§5) and all eight examples reproduce
exactly: 50M toman → gross 344.827586, fee 2.586207, net $342.24 · $100 buy →
$99.25 · $50 buy → floor, $49.50 · sell $100 → 14,391,250 toman · internal $100
→ costs $100 · invest $100 → $99.50 · 0.5g bar → $32 + $2.50 · 10g bar → $640 +
$3.20. End-to-end at live rates: 50M → $211.52, transfer $50 costs exactly $50,
0.5g gold costs $55.90 and leaves $51.40 of metal in the distribution.

**Two invented numbers to replace before anyone quotes them.** The partner
fabrication line is a **$2.00-per-bar placeholder**, and the network fee for a
personal-wallet transfer is **$0.80**. Both are shown as their own rows, as the
spec demands, but neither comes from a partner quote. The `۵ دلار · امتحان`
path is below the $50 minimum by design and is labelled «مسیر آموزشی؛ هزینهٔ
این یکی را مهاجر داده است»; typing any digit leaves that mode.

### Persian consistency pass on طلا and کیف پول شخصی

35 lines rewritten to one rule: **every row is a complete sentence with a verb,
addressed to «شما», ending in a period.** Fragments became sentences («همین
الان. کلید در فضای امن گوشی.» → «کلید همین حالا و در فضای امن همین گوشی ساخته
می‌شود.»), missing ezafe added («لحظه تحویل» → «لحظهٔ تحویل»), and colloquial
ellipsis regularised («هر مقدار خواستید» → «هر مقدار که بخواهید»).

The question-answer form in the deep rows («گوشی گم شد؟ …») was **kept**: it is
used identically in the key and personal-wallet explainers, so it is a pattern,
not an inconsistency. Changing one of them would have created the problem this
pass was meant to remove.

Two lines the founder flagged separately:
- The gold rate row said «نرخ هر گرم، هر روز از بازار طلای تهران» — a claim with
  no timing. It now says where the rate comes from **and when it locks**, which
  matches what the flow actually does since gold is paid for at order time.
- `exPwDeepM1` carried raw English chip names — «(Secure Enclave / StrongBox)».
  Gone. A Persian-speaking participant learns nothing from a brand name; the
  line now says the key is made inside the phone's hardware-secure area or the
  device's secure chip and never leaves it. `Secure Enclave`/`StrongBox` no
  longer appear anywhere in the build.

### Baskets rebuilt on the team's proposed mixes (2026-09-25)

The old mixes were BTC-heavy and the «جسور» basket held 75% crypto. Replaced
with the team's table, crypto capped at ۰٪ / ۵٪ / ۲۵٪:

| | دلار | طلا | نقره | بیت‌کوین | اتریوم |
|---|---|---|---|---|---|
| آرام | ۷۵ | ۲۲ | ۳ | — | — |
| متعادل | ۵۵ | ۳۵ | ۵ | ۴ | ۱ |
| پویا | ۳۰ | ۳۵ | ۱۰ | ۱۸ | ۷ |

**نقره is a new asset** in the product (its own colour, `#9AA5AD`), and «جسور»
became **«پویا»** to match the team's naming. All three sum to 100.

**The 12-month figure is now derived, not typed.** It used to be a hand-written
number per basket (۱۸٪ / ۳۴٪ / ۶۱٪) sitting next to a mix it had no connection
to — change the weights and the number silently lies. `nestYear()` is now the
weighted sum of a per-asset table (`CONFIG.asset12m`), so the two can never
disagree. The chart's drift and spread read from the same function.

**The assumption table is mine, and it inverts the ranking.** Per-asset trailing
twelve months in dollars, estimated from market reporting (Sept 2026): دلار ۰،
طلا +۲۵، نقره +۳۵، بیت‌کوین −۳۰، اتریوم −۴۵. That yields **+۷٪ / +۹٪ / +۴٪** —
the *riskiest* basket shows the *lowest* trailing return, because crypto fell
over the window. This is truthful for this market and it teaches the right
lesson (risk is not a promise of more), but it is the opposite of what the old
numbers implied, so **the team should confirm it before the round** and replace
`asset12m` with measured data.

### The hypothesis test, built (2026-09-26)

`Mohajer_Hypothesis_Validation_Test_and_Dashboard_Spec_v1.0.md` is implemented.

**The runner is now two tasks, not one.** خوش‌آمد → four segment questions →
**مأموریت اول** (funding journey) → app → **مأموریت دوم** → the same app with the
same balance → 18 closing questions. The second mission is assigned 50/50 from a
hash of the session id, so a refresh cannot change it: «کنترل و خروج» or
«استفادهٔ بعدی», both in the spec's own wording.

**The question engine was rebuilt** to carry the battery: single, multi with a
cap (`max` / `exact`), mutually-exclusive options that clear the rest, per-session
option shuffling with «نمی‌دانم» pinned last, conditional questions, a 1–5 scale,
free text, the contact form, and the voice ask. Order is P1 · P2 · C1 · C2 · C3 ·
F1 · F2 · T1 · T2A/T2B · I1 · I2 · I3 · I4 · U1 · U2 · voice · contact, with the
trust and intent questions after comprehension so they cannot prime it.

Conditionals verified live: trust 5 → T2A only; «با مبلغ جدی» → I3 and I4 appear;
«شرکت در پایلوت» → the contact screen appears, otherwise it never does.

**Scoring happens in the runner**, not the dashboard: `comprehension_score` and
its pass flag, positioning/distinct-value flags, the four critical misconception
flags, practical action, money intent and high commitment. The dashboard reads
them rather than re-deriving the rules, so the two can never disagree.

**Outcomes are measured, not asked**: primary completed / independent / direct,
duration, dead and rage taps, and for the second mission the first route taken
and whether it reached a completion screen.

**The `mhjSnapshot()` hook.** `const S` at a script's top level is *not* a
property of `window`, so reading the app's state from the runner silently
returned null and every task looked failed. The prototype now exposes one
function (declarations *are* on `window`) returning balances and the transaction
ledger. Task completion is judged from the ledger — reaching a screen is not
completing a task. Older builds without the hook fall back to reading the status
badge.

**The founder's voice ask** is the second-to-last screen: the four questions
listed, «ویس می‌فرستم» opens the channel from `contact`, «ویس نمی‌فرستم» skips.

**Spotlights.** F1 shows the home screen blurred and darkened with the four
quick actions sharp inside a gold ring. The rect was measured in a real 390×844
viewport (`x:18 y:461 w:354 h:76`) against a screenshot captured from *this*
build — the deck's old `v45-home.png` predates the distribution bar and its
coordinates no longer match. **Rule: never spotlight a question that has a
correct answer.** C3 asks which exit routes existed; showing them would hand over
the answer. F1/F2 have no right answer, so a reminder is fair.

### The hypothesis dashboard

A second tab on the results page («فرضیه‌ها»), with the gates copied from §32 of
the spec. One card per hypothesis — Core Journey, Value & Positioning, Feature
Validation, Comprehension & Trust, Behavioral Intent — each showing its KPIs as
value · gate · «رسیده / نزدیک / نرسیده», plus the distributions that explain the
number: which route they took, what they think Mohajer does, the critical
misconceptions, trust blockers and drivers, the commitment ladder, starting
amounts.

**A card's status is its worst KPI, never an average** — the spec is explicit
that a failed critical gate must not be hidden by a mean. Below 20 completed
sessions no card gives a verdict, and the quality banner states what the current
n licenses: nothing under 10, directional to 20, provisional to 30, decision
above.

### Results appear instantly now (the real complaint)

The founder reported results taking forever and usually never arriving. Measured
against their live endpoint: ping 1.8s, `sum` 2.5s, full read 2.4s — **the
endpoint is fine.** The failure was ours:

- the page *awaited* the network before rendering anything, so a slow call meant
  an empty screen even though local data was in hand;
- the first call after idle pays Apps Script's cold start (20s+) and blew the
  timeout, which failed the whole load;
- nothing was cached, so every open paid it again;
- and `test-kit.js` had no cache-busting, so browsers kept serving a stale kit
  after every upload — which is how I lost twenty minutes to code that was not
  running.

Now: the last good server response is cached, the page renders from cache plus
local data **immediately**, a warm-up ping is fired without waiting, the real
read follows and re-renders when it lands, and a failed read falls back to the
cache instead of blanking. A line says which it is — «به‌روز شد · همین حالا» or
«از نسخهٔ ذخیره‌شده · ۵ دقیقه پیش». Verified: 44 sessions on screen at 2s, live
refresh landed at 12s. The kit include is versioned (`?v=20260926b`) — **bump it
whenever test-kit.js changes.**

One collision worth remembering: the new ingest function was called `apply()`,
which silently overwrote the page's existing filter `apply()`. Renamed to
`ingest()`.

### Delivery is now held open until the server confirms (2026-09-26)

The founder's point: **the result is everything**, and leaving the tab early
used to mean the session was gone — a single best-effort beacon, then a retry
queue in a browser that might never open a test page again.

Four changes:

1. **A partial goes out after every answer** (throttled to 4s). Someone who
   abandons at question 12 still leaves twelve answers behind.
2. **The end screen does not claim success until the server does.** It shows a
   progress bar and «در حال ثبت نتیجه…» with a live seconds counter, POSTs, then
   asks the collector `?has=<id>`. Up to five attempts with backoff. Only a
   confirmed row flips it to the seal and «ثبت شد».
3. **Closing the tab before delivery raises the browser's leave warning**
   (`beforeunload`), from the moment the app opens until the row is confirmed.
   The welcome and segment screens are excluded — nobody should be held for a
   session that has produced nothing yet.
4. **The endpoint is warmed when the question battery starts**, one to three
   minutes before it is needed, so the confirm does not pay Apps Script's cold
   start. The first verify also waits 25s rather than 12s, because failing fast
   on a cold instance only produces duplicate rows.

Measured: with a realistic warm-up the whole confirm takes **under 7 seconds**
and lands on attempt 1. Cold, it took 25s and landed on attempt 2 — slow, but it
landed, and the participant saw why they were waiting. If all five attempts fail
the code/file/share panel appears with «زحمتی که کشیدید بی‌نتیجه نماند», and
copying, sharing or saving the file each count as delivered and release the
guard.

### «پشتیبانی انسانی» now says what it gives you

The founder asked why a tester should care about "support". As a bare noun it
tests nothing — everyone says yes to support in the abstract. All four places it
appears now name the moment it matters: «پشتیبانی انسانی؛ وقتی پولم گیر کرد، یک
آدم جواب بدهد» in the feature questions, «می‌دانستم کسی جواب می‌دهد» as a trust
driver.

### Protocol 1.1 — seven questions, one mission, plain words (2026-09-27)

Three pieces of feedback arrived together: the spec file v1.1, the colleague's
review of the test itself, and a recorded rant about the product's vocabulary.
They agree more than they look like they do — all three say the same thing,
which is that we were asking people to do our work for us.

**The second mission is gone.** The colleague's first note: a participant
presses «تمام شد», and the system answers with *another* mission. That is where
people quit. It also never paid for itself — the 50/50 `control_exit` /
`next_use` assignment halved every behavioural denominator, and the framing we
imposed ("now find a use") was not the behaviour we wanted to observe anyway.
Now there is one free session. Which services the person opened, which one they
carried to the point of a real decision, and whether they ever found a way to
get their money *out* are all read from the events of that single session —
`TK.routesOf(path)`, where `screens` means "entered" and `done` means "reached
the amount / confirm / result step". Opening a tutorial is not walking a path.

**Eighteen questions became seven**, exactly seven, with no conditionals: any
answer produces the same seven pages, `۱ از ۷` to `۷ از ۷`. What was cut is the
*asking*, not the *measuring*:

| cut | measured instead by |
|---|---|
| «راه‌های خروج کدام‌اند؟» (C3) | reaching withdraw / personal-wallet / gold in the app |
| «نبودِ کدام قابلیت؟» (F2) | Q5 plus the route actually walked |
| «ادامه می‌دادید؟» (I1) | Q7, which separates people; "yes/maybe" never did |
| «کجا گیر کردید؟» (U1) | friction evidence — and «علت گفته نشده» when nobody said |
| trust driver / blocker (T2A/B) | optional voice; never a gate |
| starting amount (I3) | out of scope this round |

A tap is not a reason. Three taps on a dead spot might be confusion, distrust,
or a slow page, and the click cannot tell us which — so the dashboard's causal
layer (ارزش/کاربردپذیری/اعتماد/انگیزه split off one self-report) is deleted.
What replaced it states only what was observed, and names the silence.

**Voice and phone number moved past the finish line.** They are not numbered
questions and they do not touch `done`, completion rate, or any gate. After
«ثبت شد» the page offers three optional cards: a voice note, a pilot call, a
next-version ping — the last two open the contact fields. Each one bumps
`revision` and re-posts the same session id, so the row updates instead of
multiplying. The four voice questions are **not shown in the test** — that was
the colleague's third note — they live in the console as a ready-made message
to send to whoever asked for it.

**Facilitator help is now an explicit event.** The old `primary_independent`
meant "completed and did not press a sad face", which is not independence. The
console publishes a second link ending `&f=1` that shows a «کمک کردم» button in
the runner's top bar; one press marks the session as assisted. Absence of
complaint proves nothing; absence of that event does.

**One scoring function, versioned.** `TK.scoreSession()` in `test-kit.js` is
the only place the rules live, and both the runner and the dashboard call it —
the dashboard recomputes rather than trusting what the runner stored, so a rule
change reaches old sessions too. Its hard rule: **a missing answer is never a
zero.** The key is simply not created, and that session is not in that KPI's
denominator. Every KPI on the dashboard now prints its own `n=`, and a zero
denominator renders `—`, never `۰٪`.

Every session carries `protocol_version` (1.1), `question_set`
(`seven_core_v1`), `scoring_version` (2), `revision` and `updated_at`. The
dashboard filters by protocol and defaults to the newest one present; mixing
1.0 and 1.1 is possible but prints a warning, because several KPIs changed
definition between them. Old sessions stay readable and are never rewritten.

### Words people actually use (2026-09-27)

The recorded feedback, paraphrased: ask ten people on the street what «حضانت»
means. «آشیانه» is poetry, not a product. And «زیر بالشت» was a bad example to
begin with — the money is simply *in your pocket*.

- «حضانت با خودتان» → «پول، دست خودتان»
- «داراییتان را در آشیانه‌ای امن دیجیتال کنید» → «پولتان را امن و دلاری نگه دارید»
- «پول شما زیر بالشت خودتان است» → «دارایی شما دست خودتان است»
- «نگهداری توسط مهاجر» → «پیش مهاجر»; «نزد مهاجر / در کیف پول شخصی» → «پیش مهاجر / دست خودتان»
- «نگهداری شخصی کلید دسترسی به دارایی دیجیتال» → «کلید دسترسی به پول، روی گوشیِ خودتان می‌ماند و از آن بیرون نمی‌رود.»
- «وابستگی به مهاجر در نگهداری» → «برای بیرون‌آوردن پول، به مهاجر وابسته‌اید»
- the pillow overlay keeps its mechanic but not its metaphor: «موجودی شما پنهان است.»

Both `COPY_DEF` inside the app and `copy-v4.5.json` were changed together —
change only one and the old wording comes straight back, because the JSON wins.

The value proposition itself did not move: home still leads with where the
money is kept and still shows توزیع دارایی. Only the vocabulary changed.

### Verification (2026-09-27)

Ran a full session at `t.html?v=4.5&r=p11&c=tg&p=1.1` in a 375×812 viewport:
four segment questions → mission → convert 50m تومان (ledger: `convert/done`,
$211.52) → walked into gold as far as `p-amt` → «تمام شد» landed directly on
`۱ از ۷`, no second mission. The seven pages appeared in the spec's order and
the last button read «پایان». Outcomes: completed, direct, independent,
`first_route: gold`, `routes_completed: ['gold']`, `control_route: true`.
Delivery confirmed, `delivery_confirmed: true`, `revision` 3 → 5 after the
pilot card and the phone number. The dashboard rendered it with per-KPI `n`,
source badges and no verdict ("شواهد کافی نیست · بیشترین n=۱"); the 37 legacy
1.0 sessions still render under the protocol filter, with honest denominators
(19 started the mission, 10 answered Q1, 15 answered trust).

### Open

- The Apps Script still needs its **new version** deployed. Until then the
  console's summary rows have no `protocol`, `answered` or `confirmed`, so it
  labels everything 1.0 and shows «تحویلِ تأییدشده ۰». The results page is
  unaffected — it reads the full JSON.
- `test-config.json` → `contact` is still empty. The voice card works without
  it ("send it where you got the link"), but setting a Telegram link makes it
  one tap.
- The F1 spotlight image has no question to live on any more: Q5 lists six
  features and the home screenshot only shows four of them, so lighting it
  would tilt the answer. `spotHtml()` and `./test-home.png` stay; re-attaching
  is one `spot:` key.

## 10m. v5.0 — «همهٔ پس‌اندازت را به یک روش نگهداری وابسته نکن» (2026-10-12)

`prototype/wallet-v5.0.html` · `copy-v5.0.json` · `manifest-v5.0.json`.
Built from a copy of v4.5 by `build_v5.py`; **v4.5, its copy file and every
test file are byte-identical** (checked by md5 after the build). v5 has its own
copy file and its own `localStorage` key (`mhj50-copy`), so editing copy in
one version never leaks into the other. It is **not** in `test-versions.json`
yet — the live test keeps running v4.5 untouched.

### Why a major version

The founder's re-read of the interviews and round one, in one line: the wedge
is right, the framing was wrong. Self-custody does not *remove* risk, it
*spreads* it — a cold wallet still holds Tether (freezable, seed-losable),
gold is a different asset that sells slowly in a crisis, and someone leaving
the country may only want physical dollars. Round one agreed: four people
opened the personal wallet, none finished. So the value is the spread itself —
«پس‌اندازت را در برابر ریسک‌های مختلف مقاوم‌تر کن و اختیار جابه‌جایی‌اش را
نگه دار». The cultural line behind it: keep it in four places, and if one goes
wrong the rest survive.

Retention after cold wallet and willingness to pay are explicitly parked by
the founder; v5 does not try to answer them.

### What changed

**Home is a map of all your savings, not your Mohajer balance.** The total is
everything the person has, wherever it is. Below it, a tree: one branch per
place (پیش مهاجر · دلار نقد · طلا · کیف پول شخصی · تتر در جای دیگر ·
تومان در بانک), each with amount, share and **where the number comes from**
— تأییدشده, سفارش از مهاجر, از روی شبکه, ردیابی نشانی, اعلام شما. A
declared number is never presented as a verified one.

**Risk, made concrete.** Seven plain «اگر…» lines — a company or exchange
fails, Tether is frozen, theft at home, a lost key, cash needed urgently,
leaving the country, the toman falling further — and for each, **what share of
this person's money survives it**. Home shows the three weakest; the risks
page shows all seven with a suggestion under each weak one, and a matrix of
place × risk. The matrix lives in one `RISKS` constant and is a **draft for the
team to review** — those judgments are the founder's to sign off, not mine.

**Round-one fixes are built in:** «پول من کجاست» is answered on the home card
itself; intro items are a list, not fake buttons; and the tap that dropped
fast zeros is fixed (below).

### The three features the user specified

1. **Bringing money in** — a new «افزودن» tab: from a bank card (the existing
   convert flow), **USDT from your own wallet** (enter the sending address and
   amount, approve in the wallet — simulated — and it lands), and **cash
   dollars at a licensed exchange** (pick exchange, amount, time; after handing
   over the notes the exchange gives a six-digit code; entering it credits the
   balance on the spot).
2. **The savings dashboard** — the tree above, plus «ثبت پول در جای دیگر»: cash
   at home, gold in grams, USDT on another exchange or wallet (optional watch
   address), a personal hardware wallet, toman in a bank. Per the colleague's
   note, **gold and the personal wallet can be updated** when some is spent,
   from the place's own page.
3. **Eject — «همه را یک‌جا کن»** — reads the map, asks why (optional), PIN +
   SMS code + an explicit consent tick, then the form (toman to a Sheba number,
   cash dollars or gold at an exchange, USDT to an address), then a **plan per
   place saying who acts**: Mohajer, you, or «همان‌جا می‌ماند». Approximate
   fee and amount, then hold-to-confirm. The Mohajer part starts; the rest
   stays on the map until the person does it. The colleague will work out the
   technical execution; this shows the mechanism.

**Cash dollars are now a fourth way to keep money** (custody page, services
tab, place page): taken from the Mohajer balance in $100 notes, paid at order
like gold, collected at an exchange with a code.

### Numbers invented here — replace before quoting

`FEES.cashInPct` 0.5%, `FEES.cashOutPct` 1%, `minCashIn` $100, `cashStep` $100,
`minUsdtIn` $10. The fee spec defines none of these.

### Feasibility questions for the team, not answered by the prototype

- Legality and supply of physical-dollar delivery through licensed exchanges.
- Reading a watch-only address (balance from TronGrid or similar) — cheap.
- Eject execution across custodians, and what «Mohajer does it» means for a
  partner-held balance.

### The dropped-zeros bug, found while building this

v4.5 line 3966: a document-level `touchend` handler cancels any tap within
320ms of the previous one, to block double-tap zoom. That is exactly fast
typing on the keypad — «با تند تند زدن صفرها جا می‌ماند». `touch-action:
manipulation` on `*` already prevents the zoom, so v5 lets buttons, keys and
inputs through and keeps the guard only for empty background. Verified with
synthetic touch events: three fast taps on a key, none cancelled; a double tap
on background, still cancelled. **v4.5 still has this bug** and was left alone
on purpose, because it is the version under test.

### Verified (2026-10-12)

No console errors; all 807 copy keys resolve, none duplicated. Every new flow
was run including its failure paths: bad Tron address, under-minimum cash,
wrong exchange code, non-$100 cash-out, over-balance, wrong SMS code, invalid
Sheba. Sample portfolio: $6,528.81 = $1,200 + $1,500 + 22g × $102.80 + $800 +
180M تومان ÷ 234,615. Theft coverage 42% = (6,528.81 − 3,761.60) ÷ 6,528.81.
Eject fee to toman, by hand: $14.18 + $25.00 + $15.42 + $9.05 = $63.64. Old
flows (convert, transfer, gold) unchanged. Testing aid: `?demo=1`, or the
«+ نمونهٔ پول در چند جا» chip in the facilitator panel.

Four class names collided with v4.5's global CSS (`.bar`, `.who`, `.dot`,
`.hint`) and were renamed (`.sbar`, `.whob`, `.cdot`, `.fhint`). The symptom
was empty share bars — found by measuring the element, not by eye.

## 10n. v5.1 «آشیانه» — safety score, quieter home, exchanges named, a real eject flow (2026-10-12)

`prototype/wallet-v5.1.html` · `copy-v5.1.json` · `manifest-v5.1.json`.
v5.0 was already live when this round started, so **v5.0 is untouched** —
the local file was restored from the live site and is byte-identical to it
(md5 `79bc0d21…`). v5.1 has its own copy key (`mhj51-copy`). v4.5 and every
test file are still byte-identical. Neither v5 is in `test-versions.json`.

### Safety score — «امنیت پس‌انداز شما»

One percentage: **if the worst of the eight risks happens, how much of your
money survives** (`safety()` = the minimum of `coverage()` over `RISKS`).
Not the average: most risks miss any single place, so someone with everything
in Mohajer scored 75% «well spread» on the average. On the worst case, one
place is 0% and spreading raises it — the founder's line, as a number.
Bands: ≥70% خوب, 40–69% متوسط, <40% ضعیف. Sample portfolio: 42% (theft).

It sits on the main flow, per the team: a row in the balance card on home,
a big ring at the top of the risks page, and a live preview in «ثبت پول»
(«امنیت پس‌انداز شما از ۴۲٪ به ۳۲٪ می‌رسد» — declaring 20g of gold at home
honestly lowers it, because more is exposed to theft).

### Variant: safety at the core — `?core=safety`

Same file. The home hero becomes the score (168px ring, band, one sentence),
the balance drops to a pill under it, and a card «بالا بردن امنیت» names the
worst risk, its fix and **one button that does the fix** (`BOOST` map: theft
→ deposit cash at an exchange, company/freeze → gold, sanction → bring USDT,
inflation → convert…). Pattern taken from score-first products: Credit Karma
and ClearScore (ring + band), Oura Readiness (score + what pulled it down),
1Password Watchtower and Google Security Checkup (one issue, one fix button).
The facilitator panel has a chip to switch versions live. For A/B: send
`wallet-v5.1.html` and `wallet-v5.1.html?core=safety`.

### Home, simplified — detail one tap deeper

Home is three blocks: balance card (total, safety row, واریز/برداشت),
«پولتان کجاست», one-line «برداشت یک‌جای همه». Removed from home: the
history list (clock button in the header; a dot appears while something is
pending), the bottom «واریز» button and the four-button quick row (واریز was
on screen three times, plus the tab), the «where is it held» line (now the
Mohajer leaf's subtitle «نزد صرافی بیت‌وانا», with «امن یعنی چه؟» on its
place page), the concentration warning and the risk list (both now the
score). Leaves show name, amount and share; where each number comes from is
on the place page.

### «تتر نزد صرافی دیگر» — Iranian or foreign

«تتر در جای دیگر» had no knowable risk. Now «ثبت پول» offers «تتر نزد صرافی
دیگر», asks «این صرافی ایرانی است یا خارجی؟», then lists that place's risks
right under the choice. On the map they are two places, `exir` and `exfx`,
because their risks differ: foreign exchanges add **«اگر صرافی خارجی حساب
ایرانی‌ها را ببندد»** (new risk `sanction`) and are slow to turn into toman
(`urgent`). Watch addresses are only offered for a personal wallet — an
exchange deposit address does not show the person's balance. The risk
matrix shows only the places the person has (short column names `mx_*`) and
is collapsed behind a button.

### Also

- Investment is separated: its own section in خدمات («سبدهای سرمایه‌گذاری» —
  «سود و زیان دارد»), and its own line on the Mohajer place page, no longer
  folded into «پولتان کجاست».
- Eject methods, in the user's words and order: «تومان به حساب بانکی شما»,
  «تحویل طلا», «تتر نزد آشیانه (بیت‌وانا)», «واریز به کیف پول شخصی».

### The app is now «آشیانه» (v5.1 only)

Every user-facing «مهاجر» became «آشیانه» («مهاجرتان» → «آشیانه‌تان»,
«مهاجرِ» → «آشیانهٔ»). Code comments were left alone, and so was «مهاجرت»
(emigration, an eject reason). Tab title, home-screen name and manifest say
آشیانه. **The PWA icons are still the Mohajer mark** — they need a new
icon from design. v5.0 and v4.5 keep the old name.

### برداشت یک‌جا is now a real flow — everything ends up in one form

The founder's point, in the user's words: «کل فلسفه‌ش همینه… اگه نشه کاری
نکردیم». Before, confirming only emptied the Mohajer balance and left the
rest of the map as it was. Now:

1. **Method** (the four above) → **destination** if needed (Sheba, or exchange + time).
2. **«کدام‌ها طلا شوند؟»** (wording per method) — every place asks بله / نه.
   «نه» means it stays where it is. Places already in that form say so and stay.
3. **Plan** — who does what, fee, amount received. The amount is only what
   moves, so skipped places and gold you already had are not counted.
4. **Hold to confirm** → **tracker** (`ej-track`): one step per place, each
   marked نوبت شما / در جریان / انجام شد / منتظر بقیه, with a progress bar.
   - Ashiyaneh's own balance moves by itself.
   - Your steps are the real-world action, simulated: an exchange code for
     cash or gold handed in, «فرستادم» after withdrawing from an exchange
     (address and network shown), signing with the key, paying by card.
   - The last step turns what arrived into the chosen form: Sheba transfer,
     **a pickup code for the gold**, or sending to the personal wallet.
5. **After every step the map updates.** The money that has arrived shows under
   پیش آشیانه as «جمع‌شده برای برداشت». At the end, everything you said بله
   to is in that one place. The home card reads «برداشت یک‌جا در جریان است ·
   ۲ از ۴ مرحله» and reopens the tracker. You can leave and come back.

Verified for all four methods on the sample portfolio. Gold, with cash
skipped, ends as cash $1,500 + gold (22g + 26.73g). The amount received
equals the plan screen to the cent. The gram amount on the plan screen used
to print 15 decimals (`faG` without rounding); that is fixed in v5.1. **v5.0
live still has that bug.** A `.pick` class collided with v4.5's gold-bar
picker (monospace font) and was renamed `.ejpk`.


- The واریز tab is only deposits; declaring outside money starts from the map.
- The risk matrix (`RISKS`) is still **a draft for the founder to sign off**,
  now with eight risks.

### Visual fixes after the user's phone test (v5.1)

- **The squashed toast was a class collision.** The toast's kind class was
  `info`, and v4.5 already has `.info{width:36px;height:36px;display:grid}` for
  the round header button. Every info toast became a 36px box with one word
  per line. Renamed to `t-ok` / `t-info`. The toast is also centred with
  `left/right + margin:auto + fit-content` instead of `left:50%` + translate.
- **The ring's number was not in Dana.** v4.5 gives buttons `color:inherit` but
  not `font-family`, and the big ring is a `<button>`. `button,input,select,
  textarea` now inherit the font everywhere.
- **0% drew a red dot.** A zero-length dash with a round cap is a dot; the arc
  is hidden below 0.5%.
- **The eject card no longer shows on an empty account.**
- **Tracker «نوبت شما» rows had a box around them.** v4.5's `.act` (home action
  buttons) matched the state class; states are now `k-act/k-pend/k-done/k-wait`.
- «هر جا، در برابر چه» was not grammatical Persian. Now «خطرها و راه‌حل‌ها»,
  «جدول خطرِ هر جا», «در برابر کدام خطرها امن است».
- Checking for these: list every class the new code uses and grep for a
  selector that is *only* that class. Three collisions so far (`.pick`,
  `.info`, `.act`), all short v4.5 names.

### The آشیانه mark

A roof over a nest with an egg in it: sheltered savings. Gold `#D5A45C` on the
dark tile, same family as the old mark. Inline SVG on the intro, and new icons
`icons/ash-180.png`, `ash-192.png`, `ash-512.png`, `ash-512-maskable.png`. They
were drawn by `scratchpad/logo.py` with the same 24-unit geometry as the SVG.
The old `icon-*.png` are untouched (v4.5 and v5.0 still use them). A designer
should redraw it properly; this is a placeholder that reads at 32px.

### Variant: real risk — `?risk=real`

Same file; also a facilitator chip. Two things change:

1. **Which exchange.** After «ایرانی یا خارجی؟» the person picks the actual
   exchange: نوبیتکس، والکس، بیت‌پین، رمزینکس، آبان تتر، دیگر / بایننس،
   اوکی‌ایکس، بای‌بیت، کوکوین، دیگر. Under the choice they see:
   - a risk level;
   - a bar per risk;
   - its **dated history with a source link**;
   - **where it ranks among the others** (Nobitex 87 → Wallex 73 → Bitpin and
     Ramzinex 63 → Aban Tether 53).

   The home tree colours each exchange name by its level, and the place page
   shows each exchange's card.
2. **Graded risk.** Each item has an exposure from 0 to 1 per risk:
   likelihood × impact, or «how much of this money you would actually
   lose». So home theft is 0.35, not 1, and toman inflation is 1. The
   safety score is still the worst case, so it is comparable with the simple
   mode. A ninth risk applies to Iranian exchanges and to آشیانه itself:
   «اگر بانک مرکزی معامله یا برداشت صرافی‌های ایرانی را محدود کند».

Facts used, all from public reporting up to Mehr 1405 (sources in the app
under «منابع این سنجش»):

- **Nobitex:** hacked 28 Khordad 1404 (~$90M burned; withdrawals shut until 9
  Tir). In Tir 1404 Tether froze 42 Iran-linked addresses, more than half tied
  to Nobitex or the IRGC.
- **Wallex:** one wallet frozen by Tether and Circle (~$2.5M).
- **OFAC:** designated Nobitex, Wallex, Bitpin and Ramzinex on 12 Khordad 1405.
- **Central bank:** closed exchange rial gateways in Dey 1403, and limited
  USDT/toman trading with a nightly halt in Shahrivar–Mehr 1405.
- **Binance:** blocked thousands of Iranian accounts in 1402, and a Senate
  inquiry into $1.7B of Iran-linked flows started in Esfand 1404.
- **Bybit:** $1.5B hack on 3 Esfand 1403, covered by the exchange.
- **OKX** and **KuCoin:** US guilty pleas.

**Caveats for the team:**

- The exposure numbers are mine, a draft for the founder to sign off.
- The «42 addresses, more than half Nobitex» line comes from a secondary report
  of TRM research. Verify it before external use.
- The Wallex freeze has no confirmed date.
- **Bitvana's own record is a placeholder.** I found nothing public, and the
  card says so.
- Naming real companies with risk levels is fine for an internal test. Legal
  should look before it goes public.

What the numbers show on the sample portfolio:

- **The total barely moves between Nobitex and Wallex**, because $800 is 12% of
  it. That is correct. The difference shows on the exchange card and once more
  money is there: adding $3,000 at Nobitex drops the score from 73% to 57%;
  at Wallex, to 61%.
- **Everything in one place:**

  | Where | Safety |
  |---|---|
  | Nobitex | 10% |
  | Wallex | 20% |
  | آشیانه | 40% |
  | Cash at home | 65% |
  | Toman in the bank | 0% |

## 10o. v5.2 — calm home, an «امن‌سازی» tab, a score instead of a percent (2026-10-22)

`prototype/wallet-v5.2.html` · `copy-v5.2.json` · `manifest-v5.2.json`. Built
from v5.1 by `scratchpad/build_v52.py` + `build_v52b.py`; v5.1, v5.0, v4.5 and
every test file are untouched.

### Benchmarks used, and what is verified

- **Blu (بلو):** minimal, bright, simple; short clear labels; few taps.
  - Security lives in one place: app PIN, fingerprint, active devices, an SMS
    after each login, temporary card block.
  - Sources: gadgetnews.net and digiorange.ir reviews.
  - Not found publicly: Blu's exact home layout or tab names. We did not copy
    any, and should not claim to.
- **Wallgold (وال‌گلد):** a gold app with one job per screen.
- **DBS digibank «Security Hub»:** every security tool in one place.
- **Google Security Checkup / Credit Karma:** status first, then positive
  «recommended actions», never a list of threats.

### What changed

- **Home is calm.** Logo + «آشیانه», an eye to hide the balance (Blu-like),
  history, the balance with واریز/برداشت, and «پولتان کجاست». No safety number,
  no risks, no eject card (it appears only while an eject is in progress).
  Tabs: خانه · انتقال · امن‌سازی · خدمات; واریز opens from the balance card.
- **«امن‌سازی» tab.**
  - **Intro, once:** a three-line card, dismissed with «فهمیدم»
    (localStorage `mhj52-sf`). The facilitator chip shows it again.
  - **«امتیاز امنیت».** A gauge from 400 to 1000 with پایه / خوب / عالی,
    instead of a percent («۰٪ سالم» felt bad). It is the same worst-case
    measure: score = 400 + 600 × coverage.
  - **Two groups:**
    - «نوع دارایی» — the asset itself: Tether can be frozen, toman inflates,
      urgent cash, leaving the country.
    - «روش نگه‌داری» — who holds it and where: company/exchange, foreign
      account closed, Iranian exchange limits, home theft, lost key.
  - **«بستهٔ پیشنهادی».** Positive actions with «+N امتیاز».
    - Each one opens **«قبل و بعد»**: a slider showing the two places' shares,
      the score before → after, and the tradeoff («وابستگی شما به … را کمتر
      می‌کند، اما …»). Nothing moves until the person acts.
    - The slider starts at the **best** amount. A fixed 30% move made
      suggestions useless, because with a worst-case score a big move just
      shifts the weakness.
    - Each suggestion names one source place. The text, the +points and the
      simulator all use it (`sugPlan`).
    - «اگر بخشی را پیش خودم نگه دارم؟» opens the simulator from آشیانه to the
      personal wallet.
  - **«امنیت حساب»:** PIN (active), fingerprint, login SMS, hide balance,
    active devices, and the 12-word backup when a personal wallet exists.
  - **«برای روز مبادا»:** برداشت یک‌جای همه.
  - **«بیشتر بدانید»:** the details page and the custody explainer.
- **Words:** «ریسک/خطر» became «امنیت/محافظت».
  - Risks are neutral nouns («سرقت از خانه», «کاهش ارزش تومان»), each with a
    protection level (خوب / متوسط / پایه), no percent, no red.
  - The real-exchange mode says «امنیت کم/متوسط/خوب».
- **Scary copy rewritten, facts kept.** The custody, personal-wallet and key
  lines no longer say «اگر گم شود، هیچ‌کس برنمی‌گرداند». Instead: «۱۲ کلمه را
  جای امنی یادداشت کنید؛ با آن همیشه به پولتان می‌رسید».
- **Transfer → «تحویل دلار نقد در صرافی».** Exchanges listed with one
  «پیشنهاد ویژه» (a slot for promotion, `X_PROMO`) and the rest by distance,
  with «نزدیک‌ترین» on the nearest. The flow:
  1. amount in $100 notes;
  2. time slot;
  3. review sheet;
  4. pickup code, address, hours, «تا ۳ روز»;
  5. a home banner until pickup.

  The map shows «آماده تحویل در …», then «تحویل‌گرفته از …». The fee is 1%,
  min $5 — **invented**.
- **First purchase:** the success screen explains ownership — «الان
  دارایی‌تان کجاست؟ نزد بیت‌وانا، شریک نگهداری آشیانه» — with «انتخاب روش
  نگهداری».
- **Logo:** the original mark, with the name آشیانه, at the user's request.
  Icons are the original `icon-*.png`. The arch drawing (`ash-*.png`) stays
  only in v5.1.

**Testing note:** in this desktop app the browser pane crops phone-size
screenshots to their left 80%. Scaling the body to 0.8 for the capture shows
the full width. The layout itself was measured as correct.

## 10p. v5.3 — «پولتان کجاست» moves to امن‌سازی; one primary per screen (2026-10-22)

`prototype/wallet-v5.3.html` · `copy-v5.3.json` · `manifest-v5.3.json`, from
v5.2 by `scratchpad/build_v53.py`. v5.2 is untouched.

- **Home is only the balance card:** total, «واریز» (the one primary button)
  and «برداشت». It also shows the cash-pickup banner or eject progress when
  either is active.
- **The map moved into «امن‌سازی», under the score.** Where the money is and how
  safe it is now sit together.
- **One primary per screen.** On an empty account the map's empty state had a
  second white button («ثبت پولی که جای دیگر دارم»). Both empty-state buttons
  are secondary now (soft + ghost).
- **Back navigation follows the move.** A place's page and «ثبت پول» go back to
  «امن‌سازی», not home.

## 10q. v5.4 — امن‌سازی as three guided steps; home shows the value (2026-10-22)

`prototype/wallet-v5.4.html` · `copy-v5.4.json` · `manifest-v5.4.json`, from
v5.3 by `scratchpad/build_v54.py`. v5.3 is untouched.

The user: the empty tab was too much information plus empty slots, and home
was empty but should show the value («امن‌سازی سرمایه») while staying minimal.

Benchmarks:
- Stripe, Notion and Revolut «get started» checklists: one active step, one
  button.
- Credit Karma: the score is the reward, not an empty box.
- iOS Settings and Revolut security: security collapsed into one row.
- Monzo and Revolut home: one «next step» card that changes with progress.

**«امن‌سازی» tab**
- **Until set up:** a single card, «امن‌سازی سرمایه در ۳ قدم», with a progress
  bar. Only the current step is open, and it carries the screen's one primary
  button:
  1. «اولین پولتان را به آشیانه بیاورید» → واریز
  2. «بگویید بقیهٔ پس‌اندازتان کجاست» → ثبت پول در جای دیگر, or «جای دیگری
     پول ندارم»
  3. «ورود با اثر انگشت را روشن کنید» → one tap

  Steps tick from real state (`setupSteps()`), and the card disappears when
  all three are done. The old first-visit intro card is gone; the steps do
  that job.
- **Score, map, suggestions and «روز مبادا»** appear only once there is money.
  The map's empty state was removed.
- **Account security** is one row («امنیت حساب · ۲ از ۴ روشن») that opens a
  sheet with the switches.

**Home** is still the balance card plus **one quiet card**:
- before setup: «امن‌سازی سرمایه» with the next step and three progress dots;
- after setup: «امتیاز امنیت ۷۰۰ · خوب» with a small ring and «همه‌چیز مرتب
  است» or «N پیشنهاد…».

It is a whole-card tap with no button, so «واریز» stays the only primary on
home.

**Facilitator:** the chip «قدم‌های امن‌سازی از نو» resets steps 2 and 3.
`.dots` collided with the intro slider and was renamed `.hsdots`.

### v5.4, second pass (same file, not yet delivered when changed)

- **Score: points from zero.** «۴۰۰ از ۱۰۰۰ · پایه» felt bad and meant nothing.
  «امتیاز امن‌سازی» now starts at ۰; every good thing is **+۱** and every weak
  spot **−۱** (`factorsOf()`, `points()`).
  - +۱ each: money in more than one place; no place over half; ≥20% not tied
    to any company (gold, cash, personal wallet); ≥10% always available
    (آشیانه); fingerprint on; login SMS on; 12-word backup (if a personal
    wallet exists).
  - −۱ each: over 70% in one place; over 20% toman in the bank.
  - New users start at ۰; login SMS now defaults to off.
  - «امتیازتان از کجا آمده؟» opens the breakdown: earned items as statements,
    missing ones as actions with their +۱.
  - **Suggestions are the missing points.** Each shows +۱ (or +۲).
    - Account items switch on with one tap.
    - Money items open «قبل و بعد», preset to the smallest move that earns
      a point; dragging further shows more points as more factors flip.
  - The slider, «ثبت پول» and the details page all show the same signed points.
  - The risk-based coverage model still drives the details page levels.
- **Words.**
  - «نوع دارایی / روش نگه‌داری» → «چه دارید / کجا نگه داشته‌اید».
  - Levels → «خیلی خوب / خوب / جای بهتر شدن دارد».
  - «پایه» and «از ۱۰۰۰» are gone.
- **Tutorial.** The first visit to «امن‌سازی» opens a three-card sheet (iOS
  «What's New» / Revolut tour pattern), skippable and shown once
  (localStorage `mhj54-sftut`):
  1. «امن‌سازی یعنی چه؟»
  2. «امتیازتان از صفر شروع می‌شود»
  3. «اول ببینید، بعد تصمیم بگیرید»

  The facilitator chip «امن‌سازی از نو» resets the steps and the tutorial.
- **«برداشت یک‌جای همه» left «امن‌سازی».** It is now in «خدمات», under a
  «برداشت» section with «برگرداندن به تومان», and as a small link on the
  withdraw screen («یا همه را یک‌جا برداشت کنید»).
- **The «پیشنهاد ویژه» exchange is a real featured card.** A dark/gold card,
  two concrete perks, distance and hours, one button; the others sit in a
  quiet «صرافی‌های نزدیک شما» list. The perk is real in the prototype: half
  the fee (0.5%, min $2.5 — **invented**).
- **Collisions renamed:** `.why` (the gate reason text) → `.whybtn`; `.dots`
  → `.hsdots`.

## 10r. v5.5 — real «بستهٔ پیشنهادی»; account security leaves امن‌سازی (2026-10-22)

`prototype/wallet-v5.5.html` · `copy-v5.5.json` · `manifest-v5.5.json`, from
v5.4 by `scratchpad/build_v55.py`. v5.4 is untouched.

- **Packages, not loose tips.** Three ready-made splits of savings (`PKGS`;
  the shares are a team draft):

  | Package | آشیانه | طلا | کیف پول شخصی | نقد |
  |---|---|---|---|---|
  | «متعادل» | 40 | 30 | 20 | 10 |
  | «همیشه در دسترس» | 70 | 20 | — | 10 |
  | «کمترین وابستگی» | 20 | 35 | 30 | 15 |

  - **The best is promoted:** highest points, then the highest worst-case
    coverage. Today that is «متعادل»: +۴ and 0.40, against «کمترین وابستگی»
    +۴ / 0.35 and «همیشه در دسترس» +۳ / 0.30.
  - **Layout:** one featured card («پیشنهاد آشیانه», points, colour bar,
    legend, «ببینید چه تغییر می‌کند»). The other two are thin rows under
    «بسته‌های دیگر», kept deliberately uncluttered.
  - **Opening a package:** «الان» vs «با این بسته» bars, the score before →
    after, the exact moves («از پیش آشیانه به طلا $600»…), and «قدم اول:
    …». Nothing moves until the person acts.
  - **Why this replaced the old suggestions:** the user's v5.3 screenshot had
    the آشیانه → personal-wallet slider stuck at 400. The old worst-case score
    did not react to that move. v5.4's points fixed it; v5.5 replaces the
    loose suggestions and the single-move slider on this tab with packages.
- **Account security** (PIN, fingerprint, login SMS, hide balance, devices)
  left «امن‌سازی». It is now in «خدمات › حساب کاربری» and **no longer counts
  in the score**; the score is only about where the money is (four +۱
  factors, two −۱).
- **Setup step 3** is now «یک بستهٔ پیشنهادی را ببینید»; opening any package
  completes it.
- **The home card** after setup: «بستهٔ متعادل امتیازتان را به +۴ می‌رساند»,
  or «همه‌چیز مرتب است».
- v4.5 already had a `mixBar()` function and a `.mixbar` style (the investment
  baskets). The package versions are `pkBar` / `.pkbar`.

## 10s. v5.6 — ownership after every purchase; «افزایش امنیت پس‌انداز»; exchange as a recipient (2026-10-22)

`prototype/wallet-v5.6.html` · `copy-v5.6.json` · `manifest-v5.6.json`, from
v5.5 by `scratchpad/build_v56.py`. v5.5 is untouched.

- **Ownership after every تبدیل.** The «الان دارایی‌تان کجاست؟ نزد بیت‌وانا…
  · انتخاب روش نگهداری» card shows after every successful purchase. It used to
  show only after the first; the user said that was important.
- **Wording.** «امن‌سازی سرمایه» implied the money is not safe now. The home
  card and the setup title say «افزایش امنیت پس‌انداز». The tab keeps the
  user's name, «امن‌سازی».
- **Balance card.** A third, full-width outlined button, «مدیریت محل نگهداری»,
  opens «امن‌سازی» scrolled to «پولتان کجاست» (`mgOpen`). «واریز» stays the
  only primary.
- **«امن‌سازی» is calmer.**
  - While setup is unfinished, it shows only the steps and «پولتان کجاست»;
    the score and packages appear after setup.
  - The score card's spacing was redone.
  - **Zero is written «صفر»:** a Persian «۰» renders as a dot and looked
    broken, on the tab and on the home badge.
  - The sentence follows the score, so there is no more «۱ کار خوب» beside a ۰.
- **Transfer.** The promoted exchange is the first recipient under «انتقال به
  صرافی»: a contact-style row with a gold outline, «پیشنهاد ویژه», «دلار نقد را
  همان روز تحویل بگیرید · ۱٫۶ کیلومتر». The other exchanges sit behind one
  «صرافی‌های دیگر» row, which opens a sheet. The flow is titled «انتقال به
  صرافی»: it is a transfer, unlike physical gold delivery.

## 10t. v5.7 — «مدیریت محل نگهداری» flow; round home actions; a choice after تبدیل (2026-10-22)

`prototype/wallet-v5.7.html` · `copy-v5.7.json` · `manifest-v5.7.json`, from
v5.6 by `scratchpad/build_v57.py`. v5.6 is untouched.

**Home actions.** Three round buttons with labels inside the balance card
(Revolut / Wise / Monzo pattern): «واریز» (white, the primary), «برداشت»,
«محل نگهداری». They replace the two pills and the outlined full-width button,
whose spacing the user rejected.

**«مدیریت محل نگهداری»** is its own screen (`mg`), reached from home and from
«مدیریت» on the «پولتان کجاست» card.
- **What you see:** the total, a colour bar of the split, and each place with
  its % and $ (tap to open the place). Then the status: the score, and either
  «با بستهٔ متعادل امتیازتان +۴ می‌شود · امتحان کنید» or «ترکیب پولتان خوب
  است».
- **«تغییر ترکیب»** opens the editor (`mg-edit`, Betterment / M1 Finance
  allocation pattern):
  - preset chips: الان, متعادل (marked «پیشنهادی»), همیشه در دسترس, کمترین
    وابستگی;
  - now / new bars, and one slider per place;
  - **the total stays at 100%:** moving one slider rebalances the others in
    proportion (`mgSet`);
  - external places (Iranian/foreign exchange, bank) can only go down, «این را
    خودتان جابه‌جا می‌کنید»;
  - the score before → after and the exact moves update live.
- **«ساختن برنامه»** turns the moves into «برنامهٔ جابه‌جایی شما» on the
  management screen. Each step has a tick and its own action, chosen by
  `stepAct`: gold delivery, personal wallet, transfer to an exchange, cash or
  USDT deposit, convert, or «فروش در صرافی».
- The «امن‌سازی» package cards now open this same editor, preset. The old
  `pkg` screen is unused.

**After تبدیل:** «انتخاب روش نگهداری» opens a short sheet, «این پول کجا
بماند؟»:
- همین‌جا در آشیانه
- بخشی را طلا کنید
- به کیف پول شخصی ببرید
- دلار نقد تحویل بگیرید
- ترکیب دلخواه (opens the editor)

The user rightly called the old destination, the custody page, a wall of
boxes. That page now shows one pro and one con per place instead of two each.

**Setup steps:** the active step's button and link now span the card and are
centred; they used to sit indented under the step text.

## 10u. v5.8 — investment baskets and recent transactions on home (2026-10-24)

`prototype/wallet-v5.8.html` · `copy-v5.8.json` · `manifest-v5.8.json`, from
v5.7 by `scratchpad/build_v58.py`. v5.7 is untouched.

Two home sections, shown **only when there is something in them**, so an empty
account still sees the calm minimal home (`renderHomeMore`):
- **«سبدهای سرمایه‌گذاری شما»**, once the person has picked a basket and put
  money in it. Each row shows the basket name, risk dots, mix bar, amount
  (hidden with the eye toggle) and «… سال گذشته». A tap opens the basket;
  «همه» opens the investment tab. Pattern: the investments widget on the
  Revolut and Robinhood home screens.
- **«تراکنش‌های اخیر»:** the last three, each opening its receipt, plus «همه».
  Pattern: Blu and Revolut home.

This reverses the v5.1 decision to keep history off home. That came from a
colleague's note; the user now wants it back. The clock button in the header
stays, and still shows the pending dot.

Verified with real flows: buy dollars → invest $300 in «سبد متعادل» → home
shows the basket ($298.50 after fee) and both transactions. Tapping opens the
receipt or the basket.

## 10v. v5.9 — landing, «نگهداری», documents, plans, internet shutdown, shake for support (2026-10-24)

`prototype/wallet-v5.9.html` · `copy-v5.9.json` · `manifest-v5.9.json`, from
v5.8 by `scratchpad/build_v59a.py` + `build_v59b.py`. v5.8 is untouched.

**Landing.** Built from the GPT brief the user shared.
- A 2-second splash: the original mark scales in, the bird slides in, a soft
  gold glow passes, then it fades. It is skipped with `?nosplash` or
  reduced-motion.
- Then one page:
  - «پس‌اندازتان را دلاری کنید؛ همه‌اش را به یک جا نسپارید.»
  - one line;
  - $100,000 in three containers that fill on load (نزد آشیانه 50 /
    کیف پول شخصی 30 / طلای فیزیکی 20);
  - three short benefits;
  - the trust cue (→ «مدارک و مجوزها»);
  - «شروع با مبلغ کم» (goes straight to تبدیل with the small trial amount) and
    «اول ببینید چطور کار می‌کند» (a three-step sheet).
- No self-custody wording, no seed phrase, no basket percentages, no «کاملاً
  امن».
- Kept the app's formal register («کنید») rather than the brief's informal
  «کن».

**Wording.** «امن‌سازی» → tab «نگهداری», page «چیدمان پس‌انداز», «امتیاز
چیدمان», «بهبود چیدمان». We agree with GPT: «امن‌سازی» sounded alarming and was
confused with account security. The convert screen's trial chip says «شروع با
مبلغ کم».

**Removed.** «برداشت یک‌جای همه» has no entry point any more. The code stays
for now; the in-progress home card cannot appear.

**Investments are their own story.** They are out of the total, the map and
«پیش آشیانه». Home's basket section shows its own total.

**Place page, redone.**
- Hero: icon, amount, share, and round actions (the same style as home).
- One description line.
- «این جا چطور است» as two chip groups: «محافظت‌شده در برابر» / «حواستان
  باشد».
- A clean item list.

**Plan card, redone.** Progress bar, numbered circles, bold amount, a colour-dot
route, one dark action button (`.pact`; `.act` collided with v4.5 again).

**Balance card.** The amount's box overlapped the label by 11px. It is now 8px
below the label and 10px above «به تومان».

**Pickup and delivery time is the user's choice.** Gold pickup starts with no
slot and the CTA waits for one. The hardware key order gained four delivery
slots.

**«مدارک و مجوزها».** For people who decide by documents: licence, custody
contract, reserves report, legal contact, compensation. Each opens a sheet. It
is linked next to the deposit options, from the landing and from خدمات. **All
placeholders; the team must replace them with real documents before any
test.**

**«پلن‌ها» (WTP test).** Three real offers instead of asking «چقدر می‌دهی؟»:
- شروع رایگان (up to $20);
- استاندارد (0.75%, marked «بیشتر انتخاب می‌شود»);
- ویژه/Private (callback).

The choice is recorded in `mhjSnapshot().wtp` / `wtpFrom` (the landing CTA
records `trial`). Amounts of $5,000 or more on تبدیل offer a callback from an
account manager. **The prices and perks are invented.**

**«اگر اینترنت قطع شد».** Research basis:
- Iran's blackouts:
  - June 2025: under 3% global access, while the domestic network kept bank
    apps partly up.
  - Jan–May 2026: the longest recorded. Phone lines were cut too, and at times
    the national network itself.
  - Exchanges paused crypto withdrawals (Wallex, Ramzinex, Aban Tether);
    Tabdeal batched them; Nobitex's on-chain transfers stopped for days.
- Ukraine's «Power Banking» branch network.
- A Fed study finding no truly offline payment system.
- The central bank's move to shut USSD payments, so USSD is **not** a
  dependable fallback here.

The page:
- status (connected, or last balance and time);
- call support / request a call;
- **از قبل آماده باشید**: save the support number; make an **in-person
  withdrawal code** to use with your national ID at partner exchanges; keep
  part as cash or gold; 12 words on paper;
- **وقتی قطع است**: the app on the domestic network (balance, toman to Sheba,
  user transfers) if that network is up; partner exchanges with backup power
  and connectivity; phone; and what waits for reconnection (USDT on-chain,
  foreign exchanges);
- a calm footer, with no «always works» promise.

**Variant:** `?net=off`, the facilitator chip, or the browser's own
`offline` event. An amber bar on every screen reads «اینترنت قطع است ·
موجودی ساعت …» and leads to the page; USDT deposit waits. **The in-person code
needs real operations with partner exchanges.**

**Support.** «پشتیبانی» in خدمات: call, callback, chat.

**Shake for a call.** Shaking anywhere asks «پشتیبانی با شما تماس بگیرد؟».
- Guards against accidents:
  - ≥4 hard peaks within 700ms, averaging ≤230ms apart, after stillness —
    running is ~3–4 steps a second and is rejected;
  - always a confirm, which auto-dismisses after 10s;
  - a 30s cooldown;
  - a switch in حساب کاربری (on by default);
  - iOS motion permission is asked on the first touch.
- Verified with synthetic motion: running at 3/s and 4/s → no prompt; a
  deliberate shake → one prompt; a second within 30s → none; switched off →
  none.

### The first round's report (2026-10-09)

`prototype/test-report.html` — a 15-slide deck on round «تست اول ارسال»,
linked from the console. It is a **snapshot**, computed once from the 21
sessions and written up by hand; the live numbers stay in test-insights.
No names, phones or session ids appear — the page is public on GitHub Pages.

The headline: **they can use it; they don't understand it or trust it.**
11 of 12 who reached home converted with nobody beside them, but only 2 of 9
knew where the money is held, and median trust was 2/5. Two people believe
the money sits in their own wallet — a dangerous misconception for a custody
product. Six of sixteen opened «امن یعنی چی؟» before even entering the app;
the separate explainer did not answer it.

Things the data corrected along the way, worth knowing before trusting the
console:

- **«1.0» in the console's round table did not mean protocol 1.0.** Every
  session in this round carries `protocol_version: '1.1'`. The summary falls
  back to «1.0» when the row was written by the *old* collector, which had no
  protocol column. Two sessions ran the seven-question set, the rest four.
- **21 sessions are about 18 people.** Three sessions came from one iPhone
  within eleven minutes — someone read the safety explainer for five minutes,
  answered the questions without using the app, then came back twice.
- **Most «rage taps» were typing.** Bursts of `0,0,0` on the toman keypad.
  But one participant also wrote that fast zeros get dropped, so there is a
  real iOS dropped-tap bug under the measurement bug. Both need fixing: the
  keypad (`touch-action: manipulation`, act on `pointerdown`) and the rage
  detector (ignore `.key`). Neither is done yet.
- **Three people finished the mission and never pressed «تمام شد».** Their
  answers do not exist. The runner needs an explicit "you're done — four
  short questions left" once the mission screen is reached.

Not in the report yet: the content of the two voices. No speech-to-text was
available; the voices slide says so and waits for transcripts.

### What the first real round broke (2026-10-09)

Round «تست اول ارسال»: 21 sessions, 10 on the old build (28 Sep – 4 Oct),
11 on the current four-question build (6–9 Oct). Reading it for the report
surfaced two faults that had been failing quietly.

**The full export stopped returning.** At 88 sessions, each carrying up to
45KB of events, `?full=1` outgrew what Apps Script will hand back through the
googleusercontent relay: curl gets 0 bytes, a browser gets a script-tag
network error. `?sum=1` still works, which is why the console looked healthy.
**The results page reads `full`**, so from that point it was silently showing
whatever its local cache last held. That is exactly the failure the
cache-first design was meant to make visible, and it did not.

Fix: `?full=1` now takes `r=<round>` and `offset`/`limit`, and answers with
`total` and `next`. `TK.readAll` pages through twelve at a time. A caller that
sends no `limit` gets the old single response, so nothing that already worked
changes behaviour. Verified against a paging mock: 33 sessions in three pages,
all unique.

**Every voice was saved twice.** Seven files, four recordings — each duplicate
has the same session id, duration and size, 10 seconds to 2 minutes after the
first. Uploading 300–500KB to a cold Apps Script outlasted the first «did it
arrive?» check (30s), so the page sent it again and the server wrote it again.
Fixed from both ends: the collector will not write a second voice with the same
session id and size (it returns the first one's URL with `dup:true`), and the
page asks before every retry, with a 60-second first wait. The console shows
each voice once and says how many duplicates it set aside. The existing
duplicate files were left in Drive — deleting is the owner's call.

### The recorder, rebuilt — one bug, two symptoms (2026-10-05)

«شمارنده خیلی تند می‌رفت و صدا تکرار می‌شد.» Both came from the same line.

Between tapping record and recording actually starting there is an `await`
for the microphone permission. There was no lock around it. So a second tap —
which anyone makes when nothing appears to happen — ran the whole function
again: a second `MediaRecorder` on a second stream, both pushing into the
same `chunks` array (**the audio repeated**) and both running a timer
(**the clock ran double**). One cause, two symptoms, and the thing was
unusable.

The lock is now set synchronously, before anything async, and a late stream
that arrives after state changed is stopped and dropped.

A second, quieter bug: the timer incremented a counter on each tick. Even
with one timer, a missed tick gives a wrong number. Time now comes from the
wall clock — `Date.now() - recStart` — so the display cannot drift no matter
what the browser does with the interval.

**Benchmarked against WhatsApp, Telegram and Voice Memos**, three things were
missing and are now there:

- **A live level meter.** 22 bars fed by an `AnalyserNode`, scrolling right to
  left. It is the only thing that tells a person the microphone is actually
  hearing them — without it, a silent recording looks identical to a working
  one. (`AudioContext` also gets an explicit `resume()`: created outside a
  user gesture it stays `suspended` and reads pure silence.)
- **Our own player.** The native `<audio controls>` widget is white, English
  and left-to-right in a dark RTL screen — and it showed **0:00 / 0:00**,
  because a `MediaRecorder` webm carries no duration field. That is a known
  Chrome behaviour, not something to work around with a seek hack here: we
  already know the true length from the wall clock. Play/pause, a seekable
  progress bar, and `۰:۰۰ / ۰:۰۷` in Persian digits.
- **A countdown near the cap** — the last 15 seconds say how many are left.

The player's progress is driven by the audio element's `timeupdate` event,
not `requestAnimationFrame`. rAF does not fire while a page is hidden, so a
participant who switches apps mid-playback would come back to a frozen bar.

**Also fixed:** a duplicated selector (`.vfile{display:inline-flex;.vfile{…`)
left by an earlier edit, which silently broke every CSS rule after it — the
success tick was rendering as a 154px black triangle. The CSS brace depth is
now checked as part of verification.

Verified with a synthetic `MediaStream` from an oscillator, so the whole
recorder runs for real without a microphone: three rapid taps produce exactly
**one** recorder; 7.0s of wall time reads 7.01s recorded; the player reports
`۰:۰۰ / ۰:۰۷`, seeking to 75% lands at 4.51s of 6.01s; `resume()` gives the
analyser a live RMS of 0.213; and the upload arrives at 28,793 bytes with
`secs: 7`.

### The Drive permission that was never asked for (2026-10-04)

The redeploy went through, both check URLs answered correctly, and Google
never showed a permission screen. That looked like good news. It was not.

Posting a real 16KB WAV to the live endpoint returned:

```
{"ok":false,"error":"...nicht die erforderliche Berechtigung,
DriveApp.getFoldersByName anzurufen. Erforderliche Berechtigungen: .../auth/drive"}
```

**Why no prompt:** Apps Script only asks for a scope when code that needs it
actually *runs*, and the editor's Run menu hides every function whose name
ends in `_`. `voiceFolder_()` is private, so nothing runnable touched Drive,
so nothing ever asked. Deploying a web app does not itself trigger consent.

Fix: a public `setup()` that calls `voiceFolder_()`, `voiceSheet_()` and
`sheet_()`. Running it once from the editor raises the consent dialog and
creates the folder and the sheet in the same move. It is now the first thing
the file's header tells you to do.

Worth keeping: the failure was *clean*. The try/catch returned `ok:false`,
nothing was written, no row was polluted, the sessions path never saw it. A
silent half-write would have been far worse than a loud refusal — which is
the argument for wrapping every Drive call, not just the obvious one.

### Listening in the console (2026-10-04)

`?voiceget=<session id>` returns the file as base64 and the console plays it
from a data URI. The file never has to be made link-public in Drive, and the
operator never has to leave the page. Each row shows the session id, so a
voice sits next to the answers it belongs to; a Drive link is there too.

`?voices` lists them, `?ping` stays deliberately light — it touches neither
the sheet nor Drive, because every participant's page pings it to warm the
server up.

Verified end to end against a mock collector: participant records → 32KB
upload → confirmed → listed in the console → plays inline, `duration: 2`,
`readyState: 4`.

### The voice records in the page and uploads itself (2026-10-04)

Asking someone to leave the app, open Telegram, find the group the link came
from and send a voice note there loses nine people out of ten. And on GitHub
Pages there is no server to receive a file.

Except there is one: the Apps Script that already collects the sessions.
Apps Script can write to Drive, so the whole pipeline needs no new service,
no account and no cost:

```
browser (MediaRecorder) → base64 → the same /exec → a Drive folder
```

The participant taps a round record button inside the end screen, a timer
runs to a 2-minute cap, they can listen back and re-record, and «فرستادن ویس»
uploads it. The file lands in **mohajer-voices** in the script owner's Drive,
named `v4.5__r3__<session id>.webm`, with a row in a new **voices** sheet
holding duration, size and the file URL — so a voice is joined to its session
by id, not by whoever remembers who sent what.

Three things this needed:

- **`keepalive: true` caps a fetch body at 64KB.** Fine for a session, fatal
  for audio. `TK.postBig()` is the same POST without it. A 2-minute Opus clip
  is ~300KB, ~400KB as base64 — well inside what Apps Script accepts.
- **A capability probe, because the old script is still deployed.** It does
  not know `kind:'voice'`, so it would have written the base64 blob into the
  `json` column as a junk session and lost the audio. On the end screen the
  page asks `?voice=__probe__` first: the new script answers `{found:false}`,
  the old one answers with the whole session list. Only on the new answer does
  the recorder appear; otherwise it falls back to the old "send it where you
  got the link" line. **Nothing breaks before the redeploy, and nothing is
  silently lost.**
- **A fallback for in-app browsers.** The link gets posted in Telegram groups,
  and Telegram's in-app browser on iOS does not grant microphone access. If
  `getUserMedia` is missing or refused, an `<input type="file" accept="audio/*"
  capture>` opens the phone's own recorder instead, and the same upload path
  takes the file.

«ویس شما رسید» is only shown after the server confirms it holds the file —
the same rule the session delivery follows.

**Analysis:** the Drive folder is a NotebookLM source. Add the folder's audio
files as sources and ask for themes across all of them. No n8n, no webhook
host, nothing to keep running — n8n would need somewhere to live and would
still need this same upload endpoint underneath. A Telegram bot was the other
option and was rejected: the bot token would have to sit in client-side code
on a public repo.

**Deploy note:** this version touches Drive, so the first publish asks for a
new Google permission. Accept it, or no voice ever arrives.

Verified against a mock collector: a 307,200-byte upload arrived byte-exact,
keyed to the session id, with duration recorded, and the page only confirmed
after `found:true` came back. Against the real (still old) endpoint the probe
correctly refused to record.

### Four questions, and the voice is for everyone (2026-10-04)

The team's call, the night before the links went out.

**The voice note is no longer one of three optional cards.** It is the main
thing on the end screen now: a bordered block with the four questions listed,
a gold «فرستادن ویس» button, and a line saying where to send it. The pilot
call and the next-version ping stay below it under «اگر وقت دارید». The
reasoning was theirs and it is right for this stage — at n=100 with a
prototype, what someone says in forty seconds beats another multiple-choice
distribution.

The four questions live in `TXT` (`vq1`…`vq4`), so they are editable from
`test-config.json` like every other sentence, without touching code.

**Seven questions became four.** The voice note named four candidates for
three deletions, so the kept set is **one editable line** at the top of the
question array:

```js
const ASK = ['positioning_main', 'custody_understanding', 'trust', 'commitment_step'];
```

All seven definitions stay in the file. Adding one back is adding its id to
that line; the order still comes from the array, so a restored question
returns to the position the spec gave it.

The four kept are one per link of the spec's own interpretation chain —
ارزش → فهم → اعتماد → اقدام. The three dropped were each either the *second*
question on a hypothesis that still has one (`distinct_value` is H2's second,
`asset_understanding` is H4's second) or had behavioural evidence standing
behind it (`feature_top2` — H3 also has the routes people actually walked).

**A dropped question is not missing data.** The dashboard already computes
every denominator per question, so the three dropped KPIs would have read
`n=۰ · —` forever while the card said «شواهد کافی نیست» — which reads as
"keep waiting". They now say **«پرسیده نشد»**, the card says «سؤال این کارت
در این راند پرسیده نمی‌شود — فقط شواهد رفتاری», and H3's gate moves to its
behavioural KPI. The decision summary swaps «فهم ماهیت و نگهداری» for «فهم
جای نگهداری», since only one of the two comprehension questions is asked.

`question_set` is now `core4_v1` and each session records `question_count`,
so the console's «پاسخ‌ها، میانگین X از ۴» and the session table's `۴/۴` come
from the data rather than a hardcoded seven. Protocol stays 1.1 — no KPI
changed definition, so these sessions pool correctly with any 1.1 data.

The two optional cards toggle off as well as on — they used to latch on with
no way back, and the contact form now follows the selection instead of
staying open once opened.

Verified end to end: `۱ از ۴` … `۴ از ۴` with «پایان» on the last,
`question_set: core4_v1`, `answered: 4`, delivery confirmed, voice block
visible to everyone, the button recording `post_actions: ['voice']` and
bumping `revision`. On the dashboard the three dropped KPIs read «پرسیده نشد»
and H3 falls back to behaviour.

### The writing standard, written down (2026-09-27)

«هر وقت بخواهید، برداشت» — the user pointed at that line and asked what it
is even supposed to mean. It is not a sentence. It is a headline fragment
standing where a sentence belongs, and the app was full of them: «نگهداری با
کلید شخصی», «عدم وابستگی به مهاجر در نگهداری», «مسئولیت نگهداری شخصی».

So the rule is no longer taste. It is the standard GOV.UK content design,
plainlanguage.gov and NN/g microcopy all converge on, and it is now written
here so the next pass does not re-litigate it:

1. **Every list item is a complete sentence with a verb.** If the reader has
   to supply the verb themselves, it is not copy, it is a label.
2. **Second person, active voice.** «برداشت می‌کنید», not «قابل برداشت است».
3. **Verbs, not nominalizations.** «نگه می‌دارید», not «نگهداری».
4. **State the consequence, not the category.** «اگر طلا در خانه گم یا دزدیده
   شود، کسی جبران نمی‌کند» beats «مسئولیت نگهداری شخصی» — same fact, and the
   reader can actually picture it.
5. **Parallel construction inside a list.** All items open the same way.
6. **One idea per line.** No «و» chains.
7. **Concrete numbers and times**, never «مقدار کافی» or «به‌زودی».
8. **No rhetorical questions inside a list.** «رمز را فراموش کردید؟ بازیابی
   می‌شود» became «اگر رمزتان را فراموش کنید، مهاجر حسابتان را برمی‌گرداند».

Exempt: titles, labels, table headers, badges. Those may be fragments.
Punctuation: a paragraph gets a full stop, a list item does not.

Two vocabulary decisions that are now fixed, because the app was using three
names for one thing: the custodian is always **«پیش مهاجر»** (never «نزد ما»,
never «توسط مهاجر»), and an explanatory sentence says **«پول»** while
**«دارایی»** is kept for labels like «توزیع دارایی».

The pass covered 100+ keys. Both `COPY_DEF` inside the app and
`copy-v4.5.json` were written together, and the eight keys the user had
hand-edited in the JSON were folded back into the defaults — the two files
are now byte-identical in content, verified, so neither can silently revert
the other.

### Row labels are nouns — benchmarked, not invented (2026-09-27)

«آماده» sat as a row label next to «همین الان» and «۵ تا ۷ روز». The row is
about *time*; the label was an adjective. That one table had six rows in six
different grammars: a question («کلید کجا ساخته می‌شود»), a noun («۱۲ کلمه»),
a noun phrase («تأیید هر انتقال»), a conditional clause («گوشی هک شود»), an
adjective («آماده») and a noun («هزینه»).

The benchmark is what every Persian finance app people actually open —
**والکس, نوبیتکس, بلوبانک** — does in a key/value table: **the label is always
a short noun phrase.** «کارمزد», «زمان تسویه», «حداقل برداشت», «مقصد»,
«وضعیت». Never a verb, never an adjective, never a conditional. And the two
values in one row share one grammar.

Every table in the app was rewritten to that rule:

| was | is |
|---|---|
| آماده · همین الان · ۵ تا ۷ روز | **زمان آماده‌شدن** · همین حالا · ۵ تا ۷ روز کاری |
| گوشی هک شود · در خطر · امن | **امنیت در برابر هک گوشی** · کلید در خطر است · کلید امن می‌ماند |
| کلید کجا ساخته می‌شود | **محل ساخت کلید** |
| کلید کجاست / دستگاه گم شد | **محل نگهداری کلید** / **گم‌شدن دستگاه** |
| می‌پردازید / دریافتی نهایی / نرخ اجرا | **مبلغ پرداختی** / **مبلغ دریافتی** / **نرخ تبدیل** |
| از موجودی کم می‌شود / اکنون کسر می‌شود | **مجموع کسر از موجودی** |
| در فعال‌سازی منتقل می‌شود | **انتقال هنگام فعال‌سازی** |
| نوع / نشانی / پشتیبان | **نوع کیف پول** / **نشانی کیف پول** / **نسخهٔ پشتیبان** |
| خدمت مهاجر / ساخت و تحویل شریک | **کارمزد مهاجر** / **اجرت ساخت و تحویل** |
| از چه ساخته شده / بالا و پایین / حداقل | **ترکیب سبد** / **نوسان** / **حداقل مبلغ** |
| وارد سبد می‌شود / تحویل می‌گیرید | **مبلغ واردشده به سبد** / **تحویلی شما** |

«پشتیبان» as a label was its own bug — on a screen that also has «پشتیبان
انسانی», it reads as the support agent, not the backup phrase.

Two things stay verb phrases on purpose, because they are not row labels: the
caption above a big number («دریافت می‌کنید», «به کیف پول شما می‌رسد» — Blu
writes these the same way) and the pros/cons list items, which must be full
sentences.

### Two real bugs the user found

**«۵ دلار · امتحان» did nothing.** When the fee spec landed, the rates moved
to `CONFIG` but `cTrial()` still read `FEES.trialUsd`. `undefined × rate` is
`NaN`, so the amount field filled with NaN and the button stayed dead. One
word. The trial is deliberately below the $50 minimum and deliberately
fee-free, and that logic was always right — it just never ran.

**The button vanished instead of explaining.** On every amount screen the CTA
was hidden until the amount was valid. Someone types 2,000,000 تومان, nothing
happens, and no part of the screen says why. That is the first usability
heuristic (visible system status) and the ninth (say what is wrong in plain
words) failing at the same moment, on the single most important screen.

Now one helper, `gate()`, drives all five keypad screens: the button is
always there, disabled, with the reason directly above it —

- empty: «حداقل مبلغ تبدیل ۵۰ دلار است — حدود ۱۱٬۸۰۰٬۰۰۰ تومان.» The minimum
  is taught *before* the failure, and in تومان, because تومان is what they
  are typing.
- below it: the same line plus «برای امتحان، «۵ دلار» را بزنید.»
- over balance: «موجودی کافی نیست. موجودی شما: $250.00» — and only this state
  is red. A person mid-typing has not made an error yet.

### Three more from the screen-by-screen sweep

- **The quote expiring bounced the user back silently.** 90 seconds pass, the
  screen changes by itself, nothing is said. Added a toast: «نرخ منقضی شد.
  برای دیدن نرخ تازه، دوباره «دریافت نرخ» را بزنید.»
- **The network fee is flat, so on small transfers it is enormous.** $2 to a
  personal wallet costs $0.80 — 40%. The number was on screen; nobody does
  that division. Now, above 20%, the app says the percentage out loud. No new
  minimum was invented: that is the fee spec's call, not ours.
- **The withdrawal screen was titled «تبدیل».** They arrive by tapping
  «برداشت» on home. It now says «برداشت».

### Verification (2026-09-27)

In a 375×812 viewport, no console errors: trial preset → ۱٬۱۷۴٬۰۰۰ تومان →
«دریافتی $5.00» → fee «رایگان · آزمایشی» → balance $5.00. Convert gate across
empty / below-min / valid, transfer gate across empty / valid / over-balance,
personal-wallet gate across below-fee / 40%-fee / normal — every state gives
the right message and the right enabled/disabled button. Quote expiry fires
the toast and returns to the amount screen. Gold: 1g bar = $102.80 metal +
$2.00 fabrication + $2.50 floor = $107.30 charged at order, $102.80 in
توزیع دارایی. All 567 copy keys resolve — no `data-c` and no `C()` call points
at a missing key.

## 10w. v5.10 — «جنس» and «محل» as the two parameters; a mosaic editor; a flipping balance card (2026-10-24)

`prototype/wallet-v5.10.html` · `copy-v5.10.json` · `manifest-v5.10.json`, from
v5.9 by `scratchpad/build_v510.py`. v5.9 is untouched.

**Two parameters, everywhere.** Every place has one type and one location:

| place | جنس (`TYPE_OF`) | محل (`LOC_OF`) |
|---|---|---|
| mohajer | دلار | آشیانه |
| self | دلار | کیف پول شخصی |
| cash | دلار | خانه و گاوصندوق |
| gold | طلا | خانه و گاوصندوق |
| exir, exfx | دلار | صرافی‌ها |
| bank | تومان | بانک |

- The «نگهداری» tab and the «مدیریت محل نگهداری» page both show:
  - **«جنس نگهداری»:** a donut plus a legend with % and $ (`typeHTML`);
  - **«محل نگهداری»:** rows with icon, names of what's inside, a share bar, $
    and % (`locHTML`).
- Tapping a location opens the place directly, or a sheet when it holds more
  than one (`locOpen`; خانه و گاوصندوق = دلار نقد + طلا).
- The old tree (`#h-tree`) stays in the DOM but is hidden.

**«تغییر ترکیب» editor.** It is rebuilt around two decisions: what type, and
where the dollars sit.
- Preset chips (الان / the three packages) are kept.
- A **mosaic**: column width = type share, stacked tiles = location share
  inside dollars. Gold and toman are one tile each. Each tile measures itself
  and shows two lines, one line, the amount only, or nothing, so text is never
  cut (`fitMos`). Tested on 204 states with 0 overflows.
- The score line «امتیاز چیدمان x ← y» now sits **inside the visual card**, so
  it is visible while dragging.
- Two **drag split bars** (`splitDown`, pointer events, RTL, 1% steps, always
  summing to 100%):
  - type: دلار | طلا | تومان;
  - dollar location: آشیانه | کیف پول شخصی | خانه و گاوصندوق (+ صرافی‌ها when
    the person has some).
- When a share is 0%, two handles sit on top of each other. The first movement
  picks the one that can move in that direction.
- `edToMix` / `mixToEd` translate to and from the 7-place mix. Exchange money
  is split by the person's current exir/exfx ratio. `S.mgMix` feeds the
  unchanged `mgMake` → plan.
- Patterns: Betterment's two-way allocation slider; M1's slices that always
  sum to 100%. The mosaic is our own answer to «isometric / visual» that stays
  readable at phone width.

**Balance card flips.**
- The v4.5 «tap for toman» is gone.
- A tap flips the card in 3D (0.75s). The card height animates to the face
  being shown (`fitFlip`).
- **Back:**
  - کل دارایی (savings + investment);
  - نزد آشیانه · تأییدشده;
  - نزد خودتان یا جای دیگر · ثبت‌شده توسط خودتان;
  - تحت سرمایه‌گذاری with «۲۴ ساعت گذشته ±x٪».
- The eye toggle hides every number on the back.

**Live investment value — decision: calm, not ticking.**
- The value updates **once a minute** (`INV.drift`, a bounded random walk; a
  real build reads prices) in the back, the home basket row and the section
  total.
- The anchor is «۲۴ ساعت گذشته» with a «هر دقیقه به‌روز می‌شود» note.
- Down moves use the warm amber `--warn`, never red; nothing flashes.
- Rationale:
  - Curvo deliberately updates once a day to stop short-term reactions.
  - Myopic loss aversion: the more often people look, the more losses they
    see.
  - Trading apps tick in real time because trading is their job; ours is
    savings.

Verified:
- `node --check` passes; CSS braces balance; no missing or duplicate copy
  keys; the JSON matches the definitions.
- The class-collision check against v5.9 caught `.split` and `.bar`, renamed
  to `.edsp` and `.lbar`.
- Browser checks:
  - flip front 111px → back 166px, with a 20px gap to the buttons;
  - stacked-handle drags in both directions;
  - presets;
  - make plan → «برنامه ساخته شد» toast and plan steps;
  - location sheet;
  - live value up and down;
  - hidden-amounts mode;
  - light theme.

## 10x. v5.11 — simpler home; quiet transactions; «سبد من» holding page (2026-10-25)

`prototype/wallet-v5.11.html` · `copy-v5.11.json` · `manifest-v5.11.json`, from
v5.10 by `scratchpad/build_v511.py`. v5.10 is untouched.

- **Home: «بهبود چیدمان پس‌انداز» card removed.**
  - The `#h-sf` element is gone.
  - The same steps and score live in the «نگهداری» tab.
  - `renderHomeSafe` already returns early when the element is missing.
- **Home: «تراکنش‌های اخیر» made quiet.**
  - No card; regular weight; ink-2/ink-3 colours.
  - Outlined icons; 72% opacity.
  - The «انجام شد» badge is hidden on home. Pending and failed badges still
    show.
  - Amounts are no longer green.
- **Tapping a basket opens «سبد من» (`n-hold`), not the product page.**
  - Pattern: the holding page in Robinhood, Wealthsimple and Betterment.
  - **ارزش فعلی:** the live value from v5.10's `INV`, plus «از ابتدا» in $ and %,
    plus «۲۴ ساعت گذشته».
  - **Chart:** your value over ۳/۶/۱۲ months. `holdSeries` has about one point
    every 3 days. The axis always spans at least 20% of the value, so small
    moves look small. A note says the money entered today and that the past
    is no guarantee.
  - **«دارایی‌های شما در این سبد»:** mix bar plus $ per asset.
  - **Details:** amount in, entry fee (now stored on the holding), swing, «قفل
    زمانی: ندارد».
  - The basket's own transactions.
  - «دربارهٔ این سبد ›» opens the old product page.
  - **Buttons:** primary «افزودن به سبد» goes to the amount screen, which
    returns here. Ghost «برداشت از سبد» opens a sheet.
- **Withdraw sheet:**
  - amount field with chips for ۲۵٪ / ۵۰٪ / همه;
  - fee 0.5% (`nestFee`) and the net «به موجودی دلاری شما»;
  - a warning above the basket value;
  - on confirm: a `nestOut` transaction, a toast, and a return home if the
    basket is emptied.
- The «سبدهای شما» list in the investment tab opens the same page.

Verified:
- `node --check` passes; CSS braces balance; no missing or duplicate copy
  keys; the JSON matches the definitions; no new class collides with v5.10.
- Browser flows:
  - invest $100 → home shows the basket and two quiet transactions;
  - tap the basket → holding page (value $100.69 at +1.2% drift; per-asset $);
  - withdraw 50% → +$50.09 to the balance and a second transaction;
  - over-value amounts are blocked;
  - withdraw «همه» → basket removed and back on home.

## 10y. v5.12 — «ثبت پول در جای دیگر» in two focused steps; a stepper in «نگهداری» (2026-10-25)

`prototype/wallet-v5.12.html` · `copy-v5.12.json` · `manifest-v5.12.json`, from
v5.11 by `scratchpad/build_v512.py`. v5.11 is untouched.

**«ثبت پول در جای دیگر» (ext-add)** was a long list. Choosing «تتر نزد صرافی»
added a kind picker and a risk list above the amount, so people had to scroll
to type. It is now two steps on one screen:

1. **Where:** a 2-column grid of five tiles (`#ea-types`, `.eat`), each with
   an icon, a name and a 3–4-word line (`eaS_*`). Bank is a full-width tile.
2. **How much:**
   - a chip shows the choice, with «تغییر»;
   - exchanges only: an «ایرانی | خارجی» segmented control (`.seg2`), plus
     provider chips in the `risk=real` variant;
   - a **big centred amount field**, focused automatically, with its unit;
   - the score preview;
   - name (optional);
   - address (personal wallet only);
   - **one calm line** «محافظت کمتری دارد در برابر: …» at the bottom;
   - «ثبت» is visible without scrolling.
- Back goes from step 2 to step 1. When the screen was opened for a specific
  place (`eaOpen('gold')` etc.), back returns where the person came from.
- Pattern: Kubera and Monarch «add asset» (type first, then a focused form)
  and Revolut's big-amount screens.
- The score preview no longer prints «۰», which renders like a dot; it uses
  «صفر». When nothing changes it says «… می‌ماند».

**«نگهداری» tab while the 3 steps are unfinished:**
- A compact **stepper** at the top: three dots joined by a line, labelled
  واریز / بقیهٔ پول / بستهٔ پیشنهادی. Done dots are green with a check; the
  current one is solid.
- Under it, **one card** for the current step: title, one line, one primary
  button, and the alternative link.
- Below that, **one simple visual** (`#sf-snap`): total, a stacked bar by
  location, a legend, and one line saying details come after the steps.
- Shares under 1% read «کمتر از ۱٪», and the biggest share is capped at 99%
  when there are others.
- The «جنس نگهداری» and «محل نگهداری» cards and the «راهنما» links are hidden
  until the steps are done, then everything returns as in v5.10/5.11.

Verified:
- Integrity checks all pass; no class collides with v5.11.
- Browser flows:
  - $5 at آشیانه shows the stepper on step 2 and the snapshot;
  - «ثبت پول در جای دیگر» → tile grid → «تتر نزد صرافی دیگر» → ایرانی →
    300 → everything on one screen;
  - back returns to the tiles;
  - دلار نقد $1,500 → «ثبت شد.» → stepper on step 3, snapshot «آشیانه کمتر از
    ۱٪ · خانه و گاوصندوق ۹۹٪»;
  - finishing the package step restores the full tab;
  - a direct open with `eaOpen('gold')` shows the form in grams, and back
    leaves the screen.

## 10z. v5.13 — landing as two calm slides; «ورود به آشیانه» primary (2026-10-25)

`prototype/wallet-v5.13.html` · `copy-v5.13.json` · `manifest-v5.13.json`, from
v5.12 by `scratchpad/build_v513.py`. v5.12 is untouched.

The user disliked the push of «شروع با مبلغ کم» and found the landing plus the
«چطور کار می‌کند» sheet too crowded.

- **Two swipeable slides** (`#lnd-car`, scroll-snap, RTL), with dots that
  stretch on the active slide:
  1. the proposition (`lnT`), one line, and the three-container visual;
  2. «چطور کار می‌کند»: three steps with gold icons on a thin connecting line
     (دلاری کنید / پخش کنید / در دسترس بماند, keys `ln2S*`), plus the
     documents row.
- The checklist (`lnB1–3`) and the header «چطور کار می‌کند؟» link are gone.
  The keys stay in the copy file, unused.
- **Buttons:**
  - primary «ورود به آشیانه» (`lnHome` → home);
  - ghost «شروع با مبلغ کم» (`lnStart`, the trial flow, unchanged).
  - The `howOpen` sheet uses the same order.
- Slide 1 advances to slide 2 **once**, after 6.5s, and only if the person
  hasn't touched the carousel. Pattern: Revolut and Monzo onboarding.
- `lnGo` falls back to an instant snap if smooth scrolling doesn't arrive in
  700ms.
- **Layout fix:** the global `.screen>*:not(.scroll):not(.center){flex:none}`
  had pinned the column. A more specific rule lets it grow, so the buttons sit
  at the bottom of the screen.
- **Bug fixed from v5.9:** `go('intro')`, used by the facilitator chip
  «صفحهٔ معرفی», threw because `#why-vis` no longer exists. It is now guarded,
  and returning to the intro resets to slide 1.

Verified:
- Integrity checks all pass; no class collides with v5.12.
- Buttons end at 798/812px.
- Slide 2 is reachable by dots, swipe and auto-advance; there is no advance
  after a touch.
- Primary → home; secondary → convert with the trial flag.
- Going back to the intro works with no console errors.

## 10aa. v5.14 — real back navigation; landing «ادامه»; interactive landing variant; alignment fixes (2026-10-25)

`prototype/wallet-v5.14.html` · `copy-v5.14.json` · `manifest-v5.14.json`, from
v5.13 by `scratchpad/build_v514.py`. v5.13 is untouched.

**Back goes where you were.**
- All 56 hard-wired back buttons (`go('home')`, `go('use')`, `go(S.xBack||…)`)
  now call `goBack()`.
- `go()` keeps a stack (`S.nav`):
  - each forward move pushes the previous screen;
  - tab roots (`.tabbed`: home, t-who, use, safe) and `intro` clear it;
  - moving forward to a screen already in the stack (for example `mgMake` →
    `mg`, or a quote expiry → amount) rewinds to it instead of looping.
- Back plays the slide animation in reverse (`.nav-back`).
- The phone or browser back button triggers the same `goBack` through
  `popstate`; it closes an open sheet first.
- `eaBack` still steps from the amount form back to the tiles first.
- Verified paths:
  - home → مدیریت → تغییر ترکیب → back → back = home;
  - safe → place → back = safe;
  - home → basket → add → back = basket → about → back = basket (it used to
    go to the investment tab);
  - use → docs → back = use;
  - ext-add steps.

**Landing.**
- Slide 1's only button is «ادامه», which goes to slide 2. Slide 2 shows
  «ورود به آشیانه» (primary) and «شروع با مبلغ کم» (ghost), so both pages are
  read.
- Auto-advance is removed.
- `lnGo` updates the buttons immediately, not only on scroll.

**Variant «ورود تعاملی»** (`?lnd=play`, or the facilitator chip «صفحهٔ ورود:
دو صفحه / تعاملی»). Slide 1 becomes one interaction:
- All $100,000 sits in the آشیانه container; the other two are empty and
  dashed.
- The person drags a knob right-to-left along a track («بکشید تا پخش شود»),
  or taps the scene. Amounts and container heights follow the finger:
  50 / 30 / 20 at the end.
- The status line goes from «همه در یک جا: ۱۰۰٪» (amber) to «حالا به یک جا
  وابسته نیست» (green check).
- The headline's second line lights up, the knob becomes a check, and only
  then does «ادامه» appear.
- Releasing past 55% snaps to done; otherwise it springs back. A short haptic
  plays when done.
- The knob nudges gently until touched (off with reduced-motion).
- Slide 2 is the same as the default.

**Alignment and affordance fixes:**
- `.tdots` (the «نگهداری» tutorial) was `row-reverse`, so the first page lit
  the left dot. It is now right-to-left.
- `.sugbtn` («بهبود چیدمان», «مشاهده»…) was nearly invisible in dark mode and
  pinned to the top of its row. It is now a filled pill with a border and a
  forward chevron, 36px tall, vertically centred (same centre as the badge
  and text, measured).
- Section links («همه», «مدیریت») are now link-coloured with a chevron and a
  32px tap height.
- **Plan steps** were rebuilt as one tappable row: circle | action title +
  one-line route | amount | chevron. The circle, text, amount and chevron
  share one centre line (measured on all 5 rows). Done steps strike through
  the amount.
- **«صرافی‌های دیگر»** was a floating text link. It is now an option row on
  the same columns as the featured exchange (icon 303–341, text 60–291,
  chevron 34–48, measured), with «۳ صرافی دیگر، به ترتیب نزدیکی».

## 10ab. v5.15 — interactive landing by default; slide-to-spread at the bottom; live score gauge; instant page change (2026-10-25)

`prototype/wallet-v5.15.html` · `copy-v5.15.json` · `manifest-v5.15.json`, from
v5.14 by `scratchpad/build_v515.py` (+ `patch515.py`). v5.14 is untouched.

- **The interactive landing is the default.** `?lnd=pages` (or the facilitator
  chip) brings back the two-page version.
- **Slide-to-spread lives at the bottom,** in the button's slot, like the
  iPhone «slide to answer». It is the same size as the button (54px, full
  width, measured), as a pill.
  - When done, the fill reaches the end and the knob shows a check.
  - After 320ms the pill morphs: radius 99 → 16, colour → the button colour
    (measured identical, rgb 242,243,244), knob and hint fade.
  - Then «ادامه» fades in on top. Nothing jumps.
  - The hidden button is `visibility:hidden`, so its corners never peek out
    behind the pill.
- **A score gauge fills the empty space** between the containers and the
  dots: a 160px semicircle in four segments, one per point.
  - It fills **right to left** in green; the big number sits in the middle;
    «امتیاز چیدمان» below; the ends are labelled «صفر» and «+۴».
  - It uses the **real points model** (`pointsOfItems` on the
    50/30/20 × $100k sample). While dragging it climbs صفر → +۱ (5%) → +۲
    (40%) → +۳ (60%) → +۴ (100%), with a small bump each time it gains a point.
  - Under it: «بیشترین سهم در یک جا: x٪» (amber), then «حالا به یک جا وابسته
    نیست» (green).
- **Page change without lag.** The carousel is a transform rail (`#lnd-trk`,
  `--i`, 0.44s ease), not scroll + smooth scroll + a 700ms fallback.
  - «ادامه» switches pages in the same frame.
  - A finger swipe drags the rail; past 18% of the width it changes page,
    otherwise it springs back.
  - The knob and the stage don't start a page swipe.
- `navigator.vibrate` runs only after a real user gesture, which keeps the
  console clean.

Verified:
- The pill and the button are both at top 700, 54×339.
- The gauge sequence was sampled at 14 points during a drag.
- Morph end state: radius 16px, colour equal to the button's.
- Instant page change; swipe back to slide 1.
- Returning to the intro resets everything.
- `?lnd=pages` still works.

---

## 11. Blu Bank — the reference

The team keeps pointing at Blu (بلوبانک, by Saman Bank) and it is now the primary
UX benchmark. What actually matters from it:

**The pattern the team explicitly asked for.** Blu's box-type chooser shows, for
each option: an illustrated icon, a plain name, and **a one-line "فضایی برای…"
description that states what it is for and its key constraint or benefit inline.**

> باکس پس‌انداز — فضایی برای پس‌انداز هدفمند یا جمع کردن پول خرد (حداکثر ده باکس)
> بیگ‌باکس — فضایی برای سپرده‌گذاری مدت‌دار و کسب سود از ۱۲ تا ۲۰٫۵ درصد
> طلا — فضایی برای خرید و فروش میلی‌گرمی طلای ۱۸ عیار

**The critique this answers:** our صندوق section does not tell the user whether
the options differ or are only different names, whether they earn profit, and if
not, what they are for. Every option must answer *what is this for* and *what do
I get* before the user has to tap it.

**Blu's product facts worth knowing:**
- Boxes are a container inside the main account, not a separate account
- Max 10 boxes; free; no time lock
- Balance in a box still earns the account's interest
- If the main balance empties, box balances stay untouched
- Money can only move box ↔ main account, never box → outside directly
- Round-up saving: round each transaction to 5,000 or 10,000 Toman into a chosen box
- BigBox is the long-term deposit variant, 12–20.5% — a *different product*, shown as a sibling option
- Goal amount + progress + notification on reaching it

**What we should take:** the explanatory pattern, the sibling-options chooser,
progress toward a named goal, and the reassurance that money is never locked.
**What we must not take:** any profit/interest claim. Mohajer does not offer one
and inventing it would violate decision §4.7.

### What was actually built from this (2026-08-30)

**The branch chooser** (`g-type` screen). Three types that differ by *function*,
not by name — that was the exact critique. Each states its purpose and its limit
before the user taps anything:

| Type | فضایی برای… | Stated limit |
|---|---|---|
| شاخهٔ هدف | a specific goal, with an amount and a date; progress shown, notified on arrival | حداکثر ۱۰ شاخه · بدون کارمزد |
| شاخهٔ خرج | separating money that is going to be spent, so savings stay untouched | بدون سقف زمانی · هر لحظه قابل بازگشت |
| شاخهٔ خانواده | someone else's costs — tuition, rent, monthly support | قابل انتقال مستقیم به همان فرد |

The types are not cosmetic: the date field is hidden for شاخهٔ خرج, the name
placeholder changes, and the type is stored on the branch and shown in the list,
on the detail screen, and in the receipt.

**The profit question is answered head-on**, because users anchored on Blu's
12–20.5% BigBox will ask it:

> هیچ‌کدام سود نمی‌دهند — این‌ها سپرده نیستند و مهاجر بابتشان سودی پرداخت نمی‌کند.
> ارزش از **دلار بودنِ پول** می‌آید، نه از سود. کاری که شاخه می‌کند
> **جدا نگه داشتن پول است، نه بیشتر کردنش**.

This is honest, it is the real answer, and it converts the weakest-looking part
of the section into a statement of what the product actually is. It repeats on
each branch's detail screen alongside the no-lock promise.

**Lexicon invariant re-verified after the redesign.** Of the 16 new strings,
the 13 that carry fact — the profit answer, today's rate, the conversion fee,
custody, «قفل زمانی» — are byte-identical in both vocabularies. Only the three
that name the container itself differ (صندوق ↔ شاخه), which the narrative/
transaction boundary permits. A behaviour difference in testing is therefore
attributable to the vocabulary, not to one version explaining more than the other.

**The dashboard** (`نمای کلی` tab, replacing `استفاده`). Built because the home
screen was deliberately reduced to one bold action, which left the rest of the
product invisible. It carries: total value; a single allocation bar splitting
available / branches / in-transit with a live legend; every branch with its type
and progress; **all five capabilities each stating its purpose and its key fact
inline** (the same pattern as the chooser); a standing-facts panel (today's rate,
conversion fee, custody, «قفل زمانی: ندارد»); support; recent activity.

Sources: [zoomit](https://www.zoomit.ir/tech-iran/402633-bluebox-of-bluebank/) ·
[digiato](https://digiato.com/web-internet/what-is-blubank-blubox-how-to-use-it)

---

## 12. Working agreements with this user

- They are a **prototypist**, not the business owner. Do not push business or
  feasibility questions at them; flag and move on.
- They want **decisions made**, not menus of options. Recommend, then build.
- Verify by **measurement, not by eye** — they have caught rendering bugs twice
  that a screenshot would have hidden.
- **Never overwrite** a delivered artefact. New version = new file.
- Finish every turn with **exactly which files to upload**.
- Reply in **English**; product copy stays Persian.
