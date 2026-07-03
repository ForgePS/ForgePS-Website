# Edit your website (no AI required)

## Option A — Visual editor (recommended)

Use **TinaCMS** at **`/cms`**. You edit in a form on the left and the live page
updates instantly on the right.

**Locally:**

1. Run `npm run dev:cms`
2. Open **http://localhost:5173/cms/index.html#/~** (the terminal prints the exact
   port; the `#/~` opens the side-by-side visual editor)
3. Edit a field on the left and watch the live page update on the right, then **Save**
   — changes write straight to the `content/*.json` files

**On the live site (after TinaCloud is connected):**

1. Open **`/cms`** on your live site
2. Log in with GitHub
3. Edit, then **Save** — the change is committed and the site redeploys

**First-time production setup:** see **`TINACMS-SETUP.md`**

---

## Option B — Edit JSON files directly

All website copy lives in **`content/*.json`**:

| File | What it controls |
|------|------------------|
| `global.json` | Site name, emails, nav menu |
| `home.json` | Homepage |
| `products-page.json` | Products page copy + base package list |
| `product-modules.json` | Core product cards |
| `addon-modules.json` | Add-on module cards |
| `solutions.json` | Solutions page |
| `company.json` | About page |
| `contact.json` | Contact page |
| `resources.json` | Resources page |
| `footer.json` | Footer links |

### Preview locally

Double-click **`preview.bat`** or run `npm run dev` → http://localhost:5173

### Publish manually

Double-click **`publish.bat`** or run `npm run build` then `firebase deploy --only hosting:marketing`

---

## Swap images

Replace files in **`public/assets/`** (keep the same filename):

- `forge-logo.png` — header/footer logo
- `hero-firefighter.png` — homepage hero background

Uploaded images from the CMS go to **`public/assets/uploads/`**.

---

## No pricing page

Old `/pricing` links redirect to Contact automatically.

---

## Folder map

| Path | What it is |
|------|------------|
| `content/*.json` | Editable copy |
| `tina/config.ts` | CMS schema (fields shown in the editor) |
| `public/cms/` | Built TinaCMS editor (generated) |
| `public/assets/` | Logo and images |
| `preview.bat` | Local preview |
| `publish.bat` | Manual deploy |
| `TINACMS-SETUP.md` | One-time production CMS setup guide |
