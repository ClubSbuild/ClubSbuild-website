# SBUILD website

Static one-page site for SBUILD (Seawolves Builders United In Learning & Development). No build step,
no dependencies — plain HTML/CSS/JS.

```
index.html          the whole page
assets/styles.css   styles
assets/script.js    mobile nav + scroll reveal
```

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push to GitHub.
2. Repo **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**, Branch: `main`, Folder: `/ (root)`. Save.
4. Live at `https://<user>.github.io/<repo>/` in a minute or two.

A custom domain goes in **Settings → Pages → Custom domain**, which writes a `CNAME` file.

## Things to fill in before launch

- The interest form link (currently a placeholder line in the Join section).
- Weekly meeting time and location, once set.

## Naming and branding note

Per the club proposal, the Stony Brook name and logo are not used in promotional material until
recognition is granted. The footer carries a disclaimer stating SBUILD is a proposed organization and
is not affiliated with or endorsed by Stony Brook University or AWS. Keep that disclaimer until
recognition comes through, and check with Student Engagement and Activities before adding any
university marks.
