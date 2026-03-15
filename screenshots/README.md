# Screenshot automation

Screenshots are auto-generated from the demo.egyutter.hu instance using Playwright.

## Run locally

```bash
DEMO_URL=https://demo.egyutter.hu \
DEMO_ADMIN_EMAIL=demo-admin@egyutter.hu \
DEMO_ADMIN_PASSWORD=<secret> \
npm run screenshots
```

## GitHub Actions

The `screenshots.yml` workflow runs nightly at 03:00 UTC and commits any changed PNGs.

## Required secrets (in GitHub repo settings)

- `DEMO_URL`
- `DEMO_ADMIN_EMAIL`
- `DEMO_ADMIN_PASSWORD`
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
