
//Usage for  only one text

const e = document.querySelector('#bracket-span');
const annotation = RoughNotation.annotate(e, { type: 'box', color: 'red', padding: 7, strokeWidth: 3});
annotation.show();

// Usage for more than one text

const e = document.querySelector('#bracket-span');
const annotate = RoughNotation.annotate(e1, {type: 'highlight', color: 'black', padding: 7, strokeWidth: 3});
annotate.show();

// Same goes to everything and you choose where to implement it

//Make a copy of the code and just change the element name
/*
for example:
  change const e1 to = const e2 && 
*/
const e1 = document.querySelector('#bracket-span');
const annotate = RoughNotation.annotatee(e1, {type: 'highlight', color: 'black', padding: 7, strokeWidth: 3});
annotatee.show();

const e2 = document.querySelector('#bracket-header');
const annotatetwo = RoughNotation.annotatetwo(e2, {type: 'crossthrough', color: 'black', padding: 7});
annotatetwo.show();

/**
 * You can edit these codes or add more by changing the identifier to something else(name or number)
 */







