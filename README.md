# Die Well Media — Website

A simple, no-build website. Plain HTML and CSS — no frameworks, no install step,
no compiling. Open a file, edit the text, save, refresh your browser.

## Pages

- `index.html` — Home: a framed "title page" with the name, the tagline, and
  Revelation 14:13.
- `podcast.html` — The Die Well Podcast: cover art, description, platform
  links, and every episode with a playable audio player, pulled from your
  RSS feed.
- `about.html` — The mission text, plus a Founders section with a photo and
  bio for each of Kaydon, Luis, and Pierce.
- `css/style.css` — **One shared stylesheet.** An engraved, old-world look:
  Cinzel (Roman inscription capitals) for headings, EB Garamond for text,
  double-line frames, black and bone-white with one deep-crimson accent.
  Change it once here and every page updates. There is no JavaScript.

## How to preview the site

You don't need a server. Just double-click `index.html` and it opens in your
browser.

## Common edits

**Edit the homepage tagline or verse**
Open `index.html`. The name and tagline are in `.plate`; the verse is in
`.verse` right below the tagline.

**Edit the mission text or founder bios**
Open `about.html`. The mission text is in `.about-section`; the founder cards
are in the `.founders` grid. For each founder, swap the `.founder-photo` div
for a real headshot once you have one, e.g.:
`<img src="images/kaydon.jpg" alt="Kaydon">`, and replace "Bio coming soon."
with their real bio.

**Add a new podcast episode**
Open `podcast.html`, find the `<!-- EPISODES -->` comment, copy one
`<div class="episode">...</div>` block, paste it at the top of the list, and
update:
- The title (`<h3>`)
- The date and length (`<span class="episode-meta">`)
- The description (`<p>`)
- The `src="..."` on the `<audio>` tag — grab this from the `<enclosure url="...">`
  in your RSS feed (https://api.riverside.com/hosting/b6ihANCc.rss) for that episode.

**Change colors or fonts**
Open `css/style.css`, edit the values at the top under `:root { ... }`:
- `--bg` — page background
- `--ink` — main text color (bone-white)
- `--muted` — softer gray text
- `--crimson` / `--crimson-text` — the accent: the cross, corner brackets,
  the illuminated first letter. Set both to white or gray for a strictly
  black-and-white look.
- `--display` / `--body` — the two fonts (headings and text)

**Update links**
- Apple Podcasts / Spotify / RSS — in the `.platforms` block near the top of `podcast.html`
- The "Click here" link in the About section's second paragraph on `about.html`
  is a placeholder (`href="#"`) — point it at your YouTube video once it's made.

## Notes

A few earlier pages are still in this folder but not linked from the live
site — safe to ignore or delete:
- `die-well-podcast-website-classic.html` — the very first single-page draft
- `resources.html`, `store.html` — pages sketched out for a larger
  multi-section site before this was scoped down.
- `videos.html` — the Videos page (YouTube embed + subscribe button), taken
  off the live site. Still fully working if you want to bring it back later.
- `writings.html` — the Writings page (Blog/Books/Devotionals), taken off
  the live site. Still fully working if you want to bring it back later.
