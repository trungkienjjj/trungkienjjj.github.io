# Portfolio v2 Design Notes

## Factual boundary

`MASTER_PROFILE_CONTEXT.md` was not present in the supplied workspace. This
build therefore treats the Portfolio v2 brief, the existing portfolio, the
local CV sources, and the local project reports as the factual boundary. No
publication, deployment, benchmark, credential ID, or project-ownership claim
has been added beyond those sources.

One numeric wording conflict was resolved explicitly: 8,687 lines are 289.6%
of a 3,000-line target, so the site uses the CV's accurate wording, "exceeding
the target by 189.6%," instead of the brief table's "189.6% of target."

The Kaggle profile and training notebook were verified live. The previous
evaluation-notebook URL returned a real 404, so it was removed rather than
presented as a working public artifact. The local CV matches the latest
AI/ML Research CV in the workspace.

## Visual system

The final system keeps the proposed "Ledger" palette because its two accents
encode real meaning:

- Amber marks time, change, baselines, and before/after movement.
- Teal marks graph relationships, retrieval, links, and active focus.

The dark muted text was raised from `#8C93A6` to `#A8AFC0` so secondary copy
clears WCAG AA against both the page and panel backgrounds. The light theme
uses a warmer paper background and `#59616D` muted text for the same reason.
IBM Plex Mono leads headings, navigation, labels, and measurements; IBM Plex
Sans carries longer prose. The pairing feels like one instrument family rather
than a marketing display face beside unrelated body text.

The page uses visible coordinates, figure captions, graph-paper guides, thin
rules, and direct labels. Cards are intentionally restrained. The visual
hierarchy comes from measured diagrams, charts, and typography instead of glow,
glass, or oversized decorative gradients.

## Why this is not a generic default

This is not the usual near-black portfolio with one neon accent: amber and teal
have separate semantic jobs, and the main visual is a map computed from Kien's
actual project tags. It is not a warm cream/serif/terracotta editorial template:
the light theme remains technical, mono-led, and diagram-first. It is not a
broadsheet layout: rules and captions behave as instrumentation, not newspaper
decoration, and the project data actively controls the visuals.

## The Graph

The Graph is a compact model of the portfolio itself. It launched from the nine
brief-defined projects and now contains fourteen verified projects after a
GitHub repository audit added the Netflix recommender and four substantial
class-team projects. The team projects link to their original repositories so
authorship, commit history, and collaborator credit remain intact. Edges are
computed when projects share at least one tag. Within-cluster edges are teal.
Cross-cluster edges are amber, making evaluation, multimodal work, data
visualization, optimization, and data engineering visible as threads between
otherwise separate areas.

The layout starts from three curated research clusters and uses a small
collision simulation only to settle spacing. It is not a decorative force blob.
The time control dims projects outside the selected verified period. The same
data powers the keyboard-friendly list view, project cards, and case studies.

## Deliberate risk

The deliberate risk is the large monospace headline beside a dense,
information-bearing graph. Monospace display type can feel severe, and a graph
can overwhelm a hero. The counterbalance is quiet body typography, generous
spacing, direct labels, and a mobile-first list fallback. The result should feel
like a working research ledger, not an AI product landing page.
