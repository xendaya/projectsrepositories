/*brackets: ['left', 'right'], */
/* 
const e = document.querySelector('.pa-one');
	const annotation = RoughNotation.annotate(e, { type: 'underline', color: 'red', padding: 5});

e.addEventListener('mouseover', () => {
	annotation.show()
})

e.addEventListener('mouseleave', () => {
	annotation.hide()
})
*/

const e = document.querySelector('#bracket-span');
const annotation = RoughNotation.annotate(e, { type: 'highlight', color: 'yellow', padding: 7, strokeWidth: 3, multiline: true, animationDuration: 1500});
annotation.show();


const e1 = document.querySelector('#annotate-one');
const annotate = RoughNotation.annotate(e1, { type: 'box', color: 'brown', padding: 7, strokeWidth: 3, multiline: true});
annotate.show();

const e2 = document.querySelector('#posts-one');
const annotatez = RoughNotation.annotate(e2, { type: 'box', color: 'brown', strokeWidth: 3, multiline: false, animationDuration: 1500, rtl: false});
annotatez.show();
/* 
const e3 = document.querySelector('#js-paragraph');
const annotatee = RoughNotation.annotate(e3, { type: 'highlight', color: 'yellow', margin: 1, strokeWidth: 3, multiline: false, brackets: ['right'], multiline: true});
annotatee.show();
*/
const e4 = document.querySelector('#leaderboard');
const annotationz = RoughNotation.annotate(e4, { type: 'highlight', color: 'yellow', padding: 7, strokeWidth: 3, multiline: true, animationDuration: 1000});
annotationz.show();

const e5 = document.querySelector('#javascript');
const annotationzx = RoughNotation.annotate(e5, { type: 'underline', color: 'brown	', padding: 2, strokeWidth: 3, multiline: true, animationDuration: 1000});
annotationzx.show();


const e6 = document.querySelector('#paragraph-bracket');
const annotationv = RoughNotation.annotate(e6, { type: 'bracket', color: 'yellow', padding: 7, strokeWidth: 3, multiline: false, animationDuration: 1000});
annotationv.show();

















