# Netlify-Ready Vite + React App (Converted from Bolt Export)

Your project has been converted to a **Vite + React (TypeScript)** app that deploys cleanly on **Netlify**.

## What changed
- Added **`netlify.toml`** with SPA redirect and build settings.
- Added an example **Netlify Function** in `netlify/functions/hello.ts`.
- Kept your existing Vite + React + Tailwind structure intact.

## Local Dev
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Netlify Function (example)
Deploy, then call:
```
GET /.netlify/functions/hello
```
to see a JSON response.

## Build & Deploy
### Option A: Netlify Web UI
1. Push this folder to GitHub.
2. In Netlify: **Add new site → Import from Git**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. (Optional) Add environment variables in **Site settings → Environment variables**.

### Option B: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init          # link to a new or existing site
npm run build
netlify deploy --prod --dir=dist
```
> If you use functions locally:
```bash
netlify dev
```
This will run Vite and functions together.

## Where to put API logic
- Create new serverless functions under `netlify/functions/*.ts` (or `.js`).
- Access them from the client at `/.netlify/functions/<name>`.

## Notes
- Your original pages/components are under `src/`.
- If your Bolt code included data fetches, point them to your functions or public APIs.
- If you need SSR/ISR or file-based API routes with React components, consider migrating to Next.js later. For now, this is a clean Netlify deploy.

## API & Database
- Functions under `netlify/functions/*` are wired to Supabase.
- Fill `.env` on Netlify with `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE`.
- Initialize tables with `schema.sql` (paste into Supabase SQL editor).
- Frontend calls go to `/.netlify/functions/<name>` via `src/lib/cms.ts`.
