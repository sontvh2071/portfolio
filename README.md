# Hoang Son — Personal Portfolio

A lightweight personal portfolio built with HTML, CSS, and vanilla JavaScript. It presents general software-engineering experience, technical skills, education, and certifications. Company names and internal project details are intentionally excluded.

## Features

- Responsive layout with dark and light themes
- Home and Work pages
- An empty Writing page, ready for future posts
- GitHub, LinkedIn, Upwork, and email links
- Static hosting configuration for Vercel
- No application dependencies, database, or API keys

## Run locally

Requires Node.js 18 or newer. No dependency installation is needed.

```bash
npm run dev
```

Open **http://127.0.0.1:4178**. If another preview is already running on that port:

```bash
PORT=4179 npm run dev
```

Check JavaScript syntax with:

```bash
npm run check
```

## Project structure

```text
portfolio/
├── public/
│   ├── index.html         # Introduction and areas of experience
│   ├── work.html          # Experience, skills, education, certifications
│   ├── writing.html       # Empty writing page
│   ├── 404.html
│   ├── styles.css
│   ├── app.js             # Theme switching
│   └── assets/            # Portrait and favicon
├── server.mjs             # Local preview only
├── package.json
└── vercel.json
```

Three legacy HTML URLs redirect to Work for compatibility; their former case-study content is not included.

## Push to GitHub

Create an **empty repository** in your personal GitHub account. Do not initialize it with another README, license, or .gitignore.

From this project directory, after the initial commit exists:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` and the repository name with the repository you created. Authentication uses your own GitHub login or credential manager; do not store credentials in this repository.

## Deploy with Vercel

1. In Vercel, choose **Add New → Project** and import the GitHub repository.
2. Select the intended account and plan.
3. Configure the project:

| Setting | Value |
| --- | --- |
| Framework Preset | Other |
| Root Directory | `./` |
| Build Command | Leave empty |
| Output Directory | `public` |
| Install Command | Not required; there are no dependencies |
| Environment Variables | None |

4. Deploy. With Git integration, later pushes to the configured production branch deploy updates automatically.

`server.mjs` serves the local preview only. Vercel serves the files in `public/` directly.

Vercel Hobby is intended for non-commercial personal use. Check [Vercel's fair-use guidelines](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage) if using the portfolio to advertise paid services.

## Editing content

Edit the HTML files directly. Keep work descriptions at the level of personal skills and general experience; do not add employer names, internal architecture, client data, or confidential project descriptions. External profile links are maintained separately from this website.

After the final domain is assigned, absolute canonical and Open Graph image URLs can be added to the page metadata.

The portrait and personal content belong to the portfolio owner; no open-source license is granted by this repository.
