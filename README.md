# Best Financial Services

Static landing page for `best-financial-services.com`, ready for Cloudflare Pages.

## Local preview

Open `index.html` directly in a browser, or run a tiny static server:

```bash
python3 -m http.server 8788
```

Then visit `http://localhost:8788`.

## Deploy to Cloudflare Pages with GitHub

1. Create a GitHub repository, for example `best-financial-services`.
2. Push this folder to GitHub:

```bash
git init
git add .
git commit -m "Create initial landing page"
git branch -M main
git remote add origin git@github.com:YOUR_USER/best-financial-services.git
git push -u origin main
```

3. In Cloudflare dashboard, open **Workers & Pages**.
4. Select **Create application**.
5. Select **Pages** and **Connect to Git**.
6. Authorize GitHub and choose the repository.
7. Use these build settings:

```text
Framework preset: None
Build command: leave empty
Build output directory: /
Root directory: /
```

8. Deploy.

## Connect the domain

If `best-financial-services.com` is already in Cloudflare Registrar, add it to the same Cloudflare account first.

1. Open the Pages project.
2. Go to **Custom domains**.
3. Add `www.best-financial-services.com`.
4. Add `best-financial-services.com`.
5. Let Cloudflare create the required DNS records automatically.

This project redirects the apex domain to `www.best-financial-services.com` through `_redirects`.

## Later content ideas

Replace the placeholder topics in `index.html` when article topics are ready. For a larger article section, this can later move to Astro, Eleventy, or another static site generator, but the current version needs no build step.
