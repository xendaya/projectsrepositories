
const e = document.querySelector('#bracket-span');
const annotation = RoughNotation.annotate(e, { type: 'box', color: 'red', padding: 7, strokeWidth: 3});
annotation.show();


const e1 = document.querySelector('#bracket-span');
const annotate = RoughNotation.annotate(e1, {type: 'highlight', color: 'black', padding: 7, strokeWidth: 3});
annotate.show();

const e2 = document.querySelector('#bracket-span');
const annotate = RoughNotation.annotatee(e2, {type: 'highlight', color: 'black', padding: 7, strokeWidth: 3});
annotatee.show();

const e3 = document.querySelector('#bracket-header');
const annotatetwo = RoughNotation.annotatetwo(e3, {type: 'crossthrough', color: 'black', padding: 7});
annotatetwo.show();









