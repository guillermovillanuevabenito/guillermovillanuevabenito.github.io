# Personal website

Built with Jekyll and the [AcademicPages](https://github.com/academicpages/academicpages.github.io) template (a fork of Minimal Mistakes), hosted on GitHub Pages.

- About (home page): `_pages/about.md`. CV: `_pages/cv.md`.
- Publications: one Markdown file per entry in `_publications/`. Teaching: one file per entry in `_teaching/`.
- Sidebar (photo, bio, links): `author` in `_config.yml`; photo is `images/profile.png`.
- Top menu: `_data/navigation.yml`. PDFs: `files/`.

## How to run?

```
bundle install
bundle exec jekyll serve --host 0.0.0.0 --livereload
http://localhost:4000/
```
