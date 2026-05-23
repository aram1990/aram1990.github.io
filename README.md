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
