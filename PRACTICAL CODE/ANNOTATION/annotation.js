
const e = document.querySelector('#annotate-one');    // edit the "id" code (#annotate-one) in my case.
const annotationOne = RoughNotation.annotate(e, { type: 'highlight', color: 'yellow' });  // choose the (padding, type, color and margin(not yet available))
annotationOne.show(); // .show() to visually see the affect of the library.
