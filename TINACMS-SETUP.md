# TinaCMS setup

The site uses **TinaCMS** for visual, on-page content editing. Content lives in
`content/*.json` (in git); the editor schema is defined in `tina/config.ts`.

## Local editing (no account needed)

```powershell
npm run dev:cms
```

Open the printed URL + `/cms/index.html` (e.g. **http://localhost:5173/cms/index.html**),
click **Enter Edit Mode**, edit, and **Save**. Changes write directly to the
`content/*.json` files on disk.

## Enable editing on the live site (one-time)

Local editing works offline. To let editors log in and save on the deployed site,
connect a free **TinaCloud** project:

1. Go to **https://app.tina.io** and sign in with GitHub.
2. **Create a project** and connect the repo **`ForgePS/ForgePS-Website`**.
3. TinaCloud gives you a **Client ID** and a **read-only Token**.
4. Provide these as build-time environment variables:
   - `TINA_CLIENT_ID` — the Client ID
   - `TINA_TOKEN` — the read-only Token
   - `TINA_BRANCH` — `main`
5. In the TinaCloud project settings, add your production domain(s) to the list of
   allowed sites (e.g. `forgepublicsafety.com`, `forgepublicsafety-com.web.app`).

## Build & deploy

Production builds must use `build:cms` so the Tina admin and the content client are
generated against TinaCloud:

```powershell
npm run build:cms
firebase deploy --only hosting:marketing
```

Editors then visit **`/cms`** on the live site, log in with GitHub, edit, and Save —
each save is committed to the repo and the site redeploys.

## How it works (safe by design)

- Public visitors render from the content bundled at build time — **no runtime CMS
  calls**, so the site stays fast and works even if TinaCloud is down.
- Tina only fetches/binds live data when someone is actually in the editor.
- `public/cms/` (built admin) and `tina/__generated__/.cache` are generated and
  git-ignored; the generated client/types under `tina/__generated__/` are committed.

## Notes

- Uploaded images go to `public/assets/uploads/`.
- To change which fields appear in the editor, edit `tina/config.ts`.
