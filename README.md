# Ramayana Movie Countdown (Fan Made)

A small browser extension for everyone waiting for Nitesh Tiwari's **Ramayana**. Click the toolbar icon and you get a live countdown to the Part 1 release, a quick cast list, and links to the latest news.

![Extension popup](screenshots/countdown.png)

> Unofficial fan project. Not affiliated with the makers, producers or distributors of the film.

## What it does

- Live countdown to the Part 1 theatrical release (Diwali 2026), updated every second
- Quick cast guide: Ranbir Kapoor as Ram, Sai Pallavi as Sita, Yash as Ravana, Sunny Deol as Hanuman, Ravi Dubey as Lakshman
- One-click links to [Ramayana movie news, trailers and cast updates](https://ramayanafilm.online/)

No permissions, no tracking, no remote code. Everything runs inside the browser.

## About the film

Ramayana is a two-part adaptation of Valmiki's epic. Part 1 is set for Diwali 2026 and Part 2 for Diwali 2027. The music is by Hans Zimmer and A.R. Rahman. For a role-by-role breakdown of the cast, see this [Ramayana cast and characters guide](https://ramayanafilm.blogspot.com/2026/09/ramayana-movie-cast-characters.html), and for quick facts on dates and the team, the [Ramayana 2026 guide](https://sites.google.com/view/ramayana-2026-guide).

## Install locally

1. Download or clone this repository
2. Open `edge://extensions` or `chrome://extensions`
3. Turn on **Developer mode**
4. Click **Load unpacked** and pick this folder

## Project structure

```
manifest.json   Manifest V3 config
popup.html      Popup markup
popup.css       Styles
popup.js        Countdown and link logic
icons/          Extension icons
```

To change the release date, edit the `RELEASE` constant at the top of `popup.js`.

## Links

- Website: [ramayanafilm.online](https://ramayanafilm.online/)
- Blog: [Ramayana Film World](https://ramayanafilm.blogspot.com/)

## License

MIT
