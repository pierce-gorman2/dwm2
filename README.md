# Die Well Media — Website

A simple, no-build website. Plain HTML and CSS — no frameworks, no install step,
no compiling. Open a file, edit the text, save, refresh your browser.

## Pages

- `index.html` — Home: a full-screen hero (name, tagline, light rays, rising
  points of light, and a scrolling motto strip).
- `podcast.html` — The Die Well Podcast: cover art, description, platform
  links, and every episode with a playable audio player, pulled from your
  RSS feed.
- `about.html` — Revelation 14:13 and the mission statement, plus a Founders
  section with a photo and bio for each of Kaydon, Luis, and Pierce.
- `css/style.css` — **One shared stylesheet.** Dark, monochrome (black/white/
  gray, no color accent), Playfair Display for headings. Change it once here
  and every page updates.
- `js/site.js` — A small script for the motion (scroll fade-ins, the cursor
  glow, rising lights, the scroll progress line). It's decoration only: if it
  ever failed to load, the site would still work. It also respects visitors'
  "reduce motion" setting.

## How to preview the site

Double-click `index.html` and it opens in your browser. (The fonts and
podcast audio load from the internet, so you need to be online.)

## Common edits

**Edit the homepage tagline or the motto strip**
Open `index.html`. The name and tagline are in `.hero-center`. The scrolling
phrases are in `.marquee`: edit the words, and keep the groups identical so the
loop stays seamless.

**Edit the verse, mission, or founder bios**
Open `about.html`. The verse is in `.verse` and the mission is in `.mission`.
The founder cards are in the `.founders` grid. For each founder, swap the
`.founder-photo` div for a real headshot once you have one, e.g.:
`<img src="images/luis.png" alt="Luis Huazano">`, and replace "Bio coming
soon." with their real bio. (Headshots show in black and white and turn to
color when hovered.)

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
- `--bg-top` / `--bg-bottom` — the background gradient (top to bottom)
- `--panel` — episode card background
- `--ink` — main text color
- `--accent` — highlight color for buttons and links (currently white)

**Update links**
- Apple Podcasts / Spotify / RSS — in the `.platforms` block near the top of `podcast.html`

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
