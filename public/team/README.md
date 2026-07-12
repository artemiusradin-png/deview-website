# Team photos — how to add a member

The team grid on the About page and the homepage Leadership card read from the
dictionaries, so adding a member is two steps:

## 1. Add the photo

- Drop the original photo in this folder as `firstname-lastname.jpg`
  (portrait orientation, at least 1200 px on the long side).
- Convert it to the WebP the site actually serves:

  ```bash
  cwebp -q 80 -resize 800 0 public/team/firstname-lastname.jpg -o public/team/firstname-lastname-800.webp
  ```

- Keep the `.jpg` original in the folder (it is not served anywhere heavy) or
  move it to `media-masters/`.

## 2. Add the dictionary entry

In each of the three dictionaries (`lib/i18n/dict-en.ts`, `dict-de.ts`,
`dict-zh-hk.ts`), find `aboutPage.team.members` and either fill in one of the
placeholder rows (the ones with an empty `name`) or append a new row:

```ts
{
  name: "Firstname Lastname",
  role: "Engineering Lead",          // translate per locale
  photo: "/team/firstname-lastname-800.webp",
  initials: "FL",
  bio: "One sentence on what they own.", // translate per locale
},
```

Rows with an empty `name` render as monogram placeholder tiles ("Profile
coming soon"). Rows with a `photo` render the photo. TypeScript enforces that
all three dictionaries stay in sync — `npm run build` will fail if one locale
is missed.
