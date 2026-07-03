# Nataraj Portfolio

Dark futuristic orange-glow portfolio built with React, Vite, Framer Motion and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Customize

- Update links and content in `src/App.jsx`.
- Update theme tokens at the top of `src/styles.css`.
- Add your real GitHub profile URL in the footer.
- To add a downloadable resume, place your PDF in `public/resume.pdf` and add a button linking to `/resume.pdf`.


## V3 hero photo

The hero currently uses a sample portrait URL. In `src/App.jsx`, find `hero-photo-v3` and replace the `<img src="...">` value with your own image. For the closest result to the reference, use a waist-up transparent PNG with a dark shirt.

## Mouse effects included

- Custom orange cursor dot
- Delayed cursor ring
- Cursor-follow background spotlight
- Portrait parallax
- Multi-speed title parallax
- Outline-title hover fill
- Magnetic social icons
- Animated grid and portrait aura


## V4 additions

- Day/night mode with saved preference
- Smaller, better-balanced front-page portrait
- Advanced comet cursor aura and rotating cursor ring
- Real sample artwork for every project
- GitHub button on every project card
- Resume download buttons in navigation and hero

### Important: set your real GitHub project URLs
In `src/App.jsx`, update each project's `github` field. They currently point to the GitHub homepage as safe placeholders because the resume did not include repository URLs.
