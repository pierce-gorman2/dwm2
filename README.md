# Die Well Media — Website

A simple, no-build website. Plain HTML and CSS — no frameworks, no install step,
no compiling. Open a file, edit the text, save, refresh your browser.

## Pages

- `index.html` — Home: just the name, the tagline, and a video placeholder.
- `podcast.html` — The Die Well Podcast: cover art, description, platform
  links, and every episode with a playable audio player, pulled from your
  RSS feed.
- `videos.html` — Your YouTube channel: a subscribe button and a live embed
  of your latest uploads (updates itself automatically — no editing needed
  when you post a new video).
- `about.html` — The mission/About text, plus a Founders section with a photo
  placeholder and bio for each of Kaydon, Luis, and Pierce.
- `css/style.css` — **One shared stylesheet.** Dark, monochrome (black/white/
  gray, no color accent), Playfair Display for headings. Change it once here
  and every page updates.

## How to preview the site

You don't need a server. Just double-click `index.html` and it opens in your
browser.

## Common edits

**Edit the homepage tagline**
Open `index.html`, look for `.home-hero`.

**Edit the About text or founder bios**
Open `about.html`. The mission text is in `.about-section`; the founder cards
are in the `.founders` grid. For each founder, swap the `.founder-photo` div
for a real headshot once you have one, e.g.:
`<img src="images/kaydon.jpg" alt="Kaydon">`, and replace "Bio coming soon."
with their real bio.

**Add the homepage video**
Open `index.html`, find the `.video-placeholder` block, and replace it with a
real embed — for a YouTube video that looks like:
```html
<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
</div>
```
(swap `.video-placeholder` for `.video-embed` — see `videos.html` for a working example)

**Add a new podcast episode**
Open `podcast.html`, find the `<!-- EPISODES -->` comment, copy one
`<div class="episode">...</div>` block, paste it at the top of the list, and
update:
- The title (`<h3>`)
- The date and length (`<span class="episode-meta">`)
- The description (`<p>`)
- The `src="..."` on the `<audio>` tag — grab this from the `<enclosure url="...">`
  in your RSS feed (https://api.riverside.com/hosting/b6ihANCc.rss) for that episode.

**Videos**
Nothing to do — `videos.html` embeds your channel's uploads playlist directly,
so new YouTube videos show up automatically.

**Change colors or fonts**
Open `css/style.css`, edit the values at the top under `:root { ... }`:
- `--bg-top` / `--bg-bottom` — the background gradient (top to bottom)
- `--panel` — episode card background
- `--ink` — main text color
- `--accent` — highlight color for buttons and links (currently white)

**Update links**
- Apple Podcasts / Spotify / RSS — in the `.platforms` block near the top of `podcast.html`
- YouTube subscribe — near the top of `videos.html`
- The "Click here" link in the About section's second paragraph on `about.html`
  is a placeholder (`href="#"`) — point it at your YouTube video once it's made.

## Notes

A couple of earlier drafts are still in this folder but not linked from the
live site — safe to ignore or delete:
- `die-well-podcast-website-classic.html` — the very first single-page draft
- `resources.html`, `store.html` — pages sketched out for a larger
  multi-section site before this was scoped down. Worth revisiting later if
  you add a store or resource library.
