### DOCUMENTATION

This is a place where I keep my random thought tidbits.
I don't intend using the current template, but you want it, feel free fork it. I can't stop you, I'm not your momma 

### TECHNOLOGIES USED:
1. Rough-notation (https://www.roughnotation.com)

2. Chakra ui (https://chakra-ui.com/)

3. Google Fonts: Roboto Mono (https://fonts.google.com/specimen/Roboto+Mono?category=Monospace)

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
