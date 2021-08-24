// Rough.js Animation
/**
 * rough notation animation used for highlighting text on hover
 * please search for other styles on the official website in (https://www.roughnotation.com)
 */
const e = document.querySelector('#annotate-one');
const annotation = RoughNotation.annotate(e, { type: 'box', color: 'black', padding: 7, strokeWidth: 6});
annotation.show();

