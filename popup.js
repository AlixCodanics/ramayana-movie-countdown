// Release date: Diwali 2026, widely reported as 6 November 2026 (IST).
// Update this one line if the official date changes.
const RELEASE = new Date("2026-11-06T00:00:00+05:30");

// Change these to deep pages when they exist on the site.
const LINKS = {
  news: "https://ramayanafilm.online/",
  cast: "https://ramayanafilm.online/",
  trailers: "https://ramayanafilm.online/"
};
const UTM = "?utm_source=edge_extension&utm_medium=extension";

const $ = (id) => document.getElementById(id);
const pad = (n) => String(n).padStart(2, "0");

$("dateLine").textContent = "Release: " + RELEASE.toLocaleDateString(undefined,
  { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" }) + " (reported)";

function tick() {
  const diff = RELEASE - Date.now();
  if (diff <= 0) {
    document.querySelector(".count").innerHTML =
      '<div class="days"><span>Now</span><small>showing in theatres</small></div>';
    return false;
  }
  const s = Math.floor(diff / 1000);
  $("d").textContent = Math.floor(s / 86400);
  $("h").textContent = pad(Math.floor(s / 3600) % 24);
  $("m").textContent = pad(Math.floor(s / 60) % 60);
  $("s").textContent = pad(s % 60);
  return true;
}
if (tick()) setInterval(tick, 1000);

document.querySelectorAll("a[data-link]").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const url = LINKS[a.dataset.link] + UTM;
    chrome.tabs.create({ url });
  });
});
