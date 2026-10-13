// Tells IndexNow (Bing, Yandex, Seznam, Naver and others) which URLs exist after a deploy.
// Reads the live sitemap and submits every URL in one request.
// Usage: node scripts/indexnow.mjs [https://deviewai.com]
const SITE = (process.argv[2] || "https://deviewai.com").replace(/\/$/, "");
const KEY = "185c3506febcc59300f384f1d023f184"; // public/185c3506febcc59300f384f1d023f184.txt holds the same value
const host = new URL(SITE).host;

const res = await fetch(`${SITE}/sitemap.xml`, { headers: { "User-Agent": "deview-indexnow" } });
if (!res.ok) throw new Error(`sitemap: HTTP ${res.status}`);
const xml = await res.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
if (urlList.length === 0) throw new Error("sitemap has no URLs");

const submit = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URLs, HTTP ${submit.status}`);
// 200 and 202 mean accepted; 202 also covers "key not verified yet" on the first call.
if (![200, 202].includes(submit.status)) {
  console.error(await submit.text());
  process.exit(1);
}
