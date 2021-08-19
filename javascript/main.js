// Rough.js Animation
const e = document.querySelector('#annotate-one');
const annotation = RoughNotation.annotate(e, { type: 'box', color: 'black', padding: 7, strokeWidth: 6});
annotation.show();

