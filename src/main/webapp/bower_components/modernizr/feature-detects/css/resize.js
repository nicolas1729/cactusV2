/*!
{
  "name": "CSS UI Resize",
  "property": "cssresize",
  "caniuse": "css-resize",
  "tags": ["css"],
  "builderAliases": ["css_resize"],
  "notes": [{
    "name": "W3C Specification",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/css3-ui/#resize"
=======
    "href": "https://www.w3.org/TR/css3-ui/#resize"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  },{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/resize"
  }]
}
!*/
/* DOC
Test for CSS 3 UI "resize" property
*/
define(['Modernizr', 'testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('cssresize', testAllProps('resize', 'both', true));
});
