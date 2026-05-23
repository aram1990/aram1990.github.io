# Red Dark Echoes — RDE Website

A professional dark horror website built in separate editable files.

## Pages
- `index.html` — Home
- `monster-index.html` — Searchable monster library with 100 monsters
- `horror-stories.html` — Horror story placeholders
- `news.html` — Horror news and site updates
- `contact.html` — Contact page with contact@rde.com

## Main edit points
- Change colors/design: `css/style.css`
- Change mobile layout: `css/responsive.css`
- Add/edit monsters: `js/monsters.js`
- Change search/filter behavior: `js/main.js`
- Replace image placeholders: add images in `assets/images/` and update image paths in `js/monsters.js`

## Advertisement placeholders
Ad areas are marked with the class `ad-slot`. Replace the text inside those blocks with your ad code later.

## SEO
Each page includes title, description, keywords, Open Graph tags, semantic HTML, and readable headings.


## Monster image placeholders
Each monster now supports 3 image placeholders through the `images` array in `js/monsters.js`.

Example:
```js
images: [
  { src: "assets/images/monsters/vampire-1.jpg", alt: "Vampire horror image placeholder 1" },
  { src: "assets/images/monsters/vampire-2.jpg", alt: "Vampire horror image placeholder 2" },
  { src: "assets/images/monsters/vampire-3.jpg", alt: "Vampire horror image placeholder 3" }
]
```

The design shows 3 clean image slots inside each monster card without breaking the layout.


## Individual monster profile pages
This version includes two example profile pages:

- `monster-profiles/vampire.html`
- `monster-profiles/werewolf.html`

In `js/monsters.js`, the monsters Vampire and Werewolf have a `profileUrl` field.
That makes their monster cards show a clickable button: `View Full Monster Profile`.

To add a new monster page:
1. Copy `monster-profiles/vampire.html`
2. Rename it, for example `ghost.html`
3. Change the text inside the file
4. In `js/monsters.js`, find the Ghost object and add:
   `"profileUrl": "monster-profiles/ghost.html"`


## Equal card layout fix
Monster cards now use a bottom section so profile buttons and Danger Level labels stay aligned across the grid.
