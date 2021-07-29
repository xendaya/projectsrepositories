# 📚Blog

> This is a place where I keep my random thought tidbits.
I don't intend on making this a reusable template at the moment but if you feel like using it for your own blog I can't stop you from forking it. I'm not your mom.

Technologies used:
> rough-notation (https://www.roughnotation.com)

> chakra ui (https://chakra-ui.com/)

> Google Fonts: Roboto Mono (https://fonts.google.com/specimen/Roboto+Mono?category=Monospace)

> Google Fonts: Barrio (Just search and download it)

```ts
 function nonAltImages() {
  const images = document.querySelectorAll('img');
  for (let i = 0; i < images.length; i++) {
    if (!images[i].hasAttribute('alt')) {
      images[i].style.border = '1px solid red';
    }
  }
}
```

```ts
interface CommentMarker {
  start: string;
  end: string;
}

const markers: { [language:string]: CommentMarker } = {
  javascript: { start: '//', end: ''},
  python:     { start: '#', end: ''},
  css:        { start: '/*', end: '*/'},
  html:       { start: '<!--', end: '-->'},
  bash:       { start: '#', end: ''},
  postscript: { start: '%', end: ''},
  cobol:      { start: '*', end: ''}
  asm:        { start: ';', end: ''},
  haskell:    { start: '--', end: ''}
```
