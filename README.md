# A Day of One-Line Pitches

[![make.fun](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/c/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/zavonlame/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/rank.svg)](https://make.fun/c/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/zavonlame/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/reward.svg)](https://make.fun/c/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

One-sentence pitch for [A Day of One-Line Pitches](https://make.fun/c/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3) on make.fun: a single line that would convince a friend who has never coded to let an AI agent build their first app idea on make.fun.

## Entry

> Your app idea has been living rent-free in your head for months, so hand it to an AI agent on make.fun and it'll build you a working version tonight: no coding, no cost to start, and the worst case is you finally stop saying 'one day'.

## How it works

`main.ts` is a self-contained copy program (Node 22 stdlib only, no network, no headless Chrome). It writes the pitch from `entry.txt` to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`), after checking the entry is within the 1–240 character gate.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3-out node main.ts
```
