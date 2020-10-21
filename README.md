# Bracket

Keep track of MLB playoff picks and score.

## Usage

1. Clone the repo
1. Run `npm i`
1. Execute `get-score`:

```
❯❯❯ node src/cli.js get-score
1. @aaronjorbin 8
2. @desrosj 6
3. @whyisjake 6
4. @jeffpaul 5
5. @Drewbewilde 5
```

## Updating

1. Add a new series to `config/{year}/matchups.json`. Each series needs to have a unique name. So far,
I'm just labelling them `{conference}{seriesNumber}` (e.g., `WS1`, `ALCS2`, `NLDS3`, `ALWC4`).
1. When the series is over, fill out the `results` property of the matchup
1. Add new competitors to `config/{year}/competitors.json`
1. Add new choices to `config/{year}/choices.json`

## Deploying to (TBD)

1. Push to master
1. Now automatically deploys to (TBD).

This repo is based off the ["Blame Hockey" repo by Zack Tollman.](https://github.com/tollmanz/bracket).
