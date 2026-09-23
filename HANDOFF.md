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
