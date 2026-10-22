# Minimal engineering portfolio — version 2

Three simple pages: **Home**, **Projects**, and **About / Contact**. Project photos and descriptions appear directly on the Projects page. All text and image paths are edited in `content.js`.

The initial text and illustrations are placeholders. Replace them with your own work before sharing the website. This folder is ready to publish to GitHub Pages; it has not been published for you.

## Open it in VS Code

1. Extract the ZIP.
2. In VS Code, use **File → Open Folder** to open `engineering-portfolio-minimal`.
3. Open `index.html` in your browser. You can double-click it in your computer’s file explorer.
4. Edit `content.js`, save with **Ctrl+S** (Windows) or **Cmd+S** (Mac), and refresh the browser to see your changes. The template does not refresh the preview automatically.

| File | What it controls |
| --- | --- |
| `content.js` | Your name, bio, projects, photo paths, contact links |
| `index.html` | Home page |
| `projects.html` | Projects page |
| `about.html` | Combined About / Contact page |
| `style.css` | Colors, fonts, spacing, mobile layout |
| `script.js` | Loads your content into each page |
| `images/` | Your pictures |
| `assets/` | Your résumé and optional project documents |

## Reuse edits from version 1

If you already customized the first portfolio, copy its **content.js**, your photo files in **images/**, and any documents in **assets/** into this version. The new renderer accepts the original content structure. Its extra fields for filters and featured projects are simply unused. Every project appears on Projects; your bio and contact links appear together on About / Contact.

Keep the three included placeholder illustrations if an existing entry still points to one of them. Do not copy the old `script.js`, `style.css`, or `index.html` over this version.

## Change your text

Open `content.js` and edit the `profile` fields for your name, title, introduction, biography, education, and contact links. Keep quotation marks, brackets, and commas intact.

- `bio` is a list of paragraphs.
- `skills` is a list of short skill names; leave it as `[]` to hide it.
- Set `heroImage` to `""` to remove the Home page image.
- Leave a contact link or résumé path as `""` to hide it.
- For a résumé, copy the PDF to `assets/resume.pdf` and set `resume: "assets/resume.pdf"`.

The Projects page has a short introduction in `projects.html` that you can also edit directly if desired.

## Add pictures

Copy or drag photos into the **images** folder in VS Code. Use JPG, PNG, WebP, or SVG; convert HEIC photos to JPG first.

In `content.js`, update the relevant project’s `images` list:

```js
images: [
  {
    src: "images/my-part.jpg",
    alt: "Front view of the finished component",
    caption: "Finished component after machining."
  },
  {
    src: "images/my-cad.png",
    alt: "CAD model of the component",
    caption: "CAD model used to plan the build."
  }
],
```

Every photo and caption appears directly on the Projects page, in the order listed. Add as many entries as needed. Set `caption` to `""` to omit one. Set `images` to `[]` for a text-only project.

For the Home image, edit `heroImage`, `heroImageAlt`, and `heroCaption` in `profile`.

Match filenames and capitalization exactly. Use paths like `images/my-part.jpg`, not a Windows file path and not `/images/my-part.jpg`. Lowercase filenames without spaces are easiest. Smaller photos load faster; roughly 1600–2000 pixels along the longest edge is usually sufficient.

## Add or remove projects

Copy a complete project object in `projects: [ ... ]`, paste it after another project, and separate the objects with a comma. Change its title, summary, date, role, tools, sections, and pictures. Give it a unique `id` to keep it compatible with version 1 too.

Each `sections` entry is one heading and paragraph. You can rename headings, add paragraphs, or remove unnecessary sections. Optional `links` appear as ordinary text links; leave `links: []` for none.

Remove a sample project by deleting its complete object. The display order follows the order in `content.js`.

## Publish to GitHub Pages

1. In VS Code, initialize a Git repository, stage and commit the extracted files, and use **Publish to GitHub** to create a public repository. Git must be installed for VS Code’s Git integration.
2. For the address `https://YOURUSERNAME.github.io/`, name the repository `YOURUSERNAME.github.io`. A repository named `engineering-portfolio` instead uses `https://YOURUSERNAME.github.io/engineering-portfolio/`.
3. On GitHub, go to the repository’s **Settings → Pages**.
4. Set **Source → Deploy from a branch**, select **main** (or the branch containing your files), select **/(root)**, and **Save**.
5. After deployment, GitHub shows the live URL in Pages settings.

Place `index.html`, `projects.html`, `about.html`, and the other files directly in the repository root. Do not upload only the ZIP or nest the entire extracted folder one level below the root.

To replace an already published version 1 site, copy this version’s files into your local site repository, preserving any customized content and photo files you want to keep. Stage, commit, and push. The live link and Pages settings can remain the same.

For later edits, save and preview locally, then **commit and push**. GitHub Pages republishes after the push. Saving a local file alone does not change the live site.

## If something does not appear

- A placeholder instead of your photo usually means the image path is wrong or the photo has not been pushed.
- If the page stops displaying content, check `content.js` for a missing comma or quotation mark. The browser’s developer console can show the error.
- If GitHub shows a README or a 404, confirm Pages uses the correct branch and `/(root)`, with `index.html` in that root.
- If your changes look old, check the deployment in GitHub’s Actions tab and refresh the browser.

Official guides: [GitHub Pages settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [VS Code source control](https://code.visualstudio.com/docs/sourcecontrol/quickstart).

This version uses plain HTML, CSS, and JavaScript with no external dependencies or build step.
