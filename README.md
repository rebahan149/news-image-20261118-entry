[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/rebahan149/news-image-20261118-entry/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/rebahan149/news-image-20261118-entry/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

# The Daily Compass — Wednesday 18 November 2026

Entry for the make.fun bounty [news-image-20261118](https://make.fun/bounty/news-image-20261118): sum up 18 November 2026's world news in one image.

An original square front page that sums up one full day of world news — Wednesday 18 November 2026 — on a single 1024×1024 sheet.

## What the page shows

- **36 stories** in total: 11 illustrated panels plus an "Also on 18 November" list of 25 one-liners (stories 12–36), spanning six continents.
- **3 large top panels** with flat-vector poster illustrations (original artwork in `assets/`): Washington and Tehran trading blows over Bahrain, Ukraine dropping a span of the Crimea bridge, and the first Quad summit in two years as Trump lands in Manila.
- **8 mid-grid panels** (stories 4–11): Nvidia's revenue more than doubling to $115.8bn, Cyclone Akvan closing on India's east coast, the Knesset picking Kahana, the EU's €45bn loan for Ukraine, Britain sanctioning settlement builders, China trimming tariffs for Canada, Dhoni calling time on his IPL career, and Guinea jailing 224 in a gold-mining purge.
- **A flat world map** with red pins matching the panel stories.

## How it was built

- `index.html` is the source of the page: inline CSS plus the illustration files in `assets/` (WebP), no external requests.
- The page was rendered at 1024×1024 with a headless Chromium screenshot and exported as JPEG stored in `entry.png` (the gate accepts JPEG bytes under a `.png` name).
- `main.ts` copies `entry.png` into `$MAKEFUN_OUTPUT_DIR` (default `/output`) and logs its byte size; that is the whole runtime.

## Files

- `index.html` — the front page source
- `entry.png` — the rendered page (JPEG bytes, 1024×1024)
- `preview.jpg` — byte-identical copy of `entry.png`
- `assets/` — the original flat-vector illustrations
- `main.ts` — the entry program
- `LICENSE` — MIT
