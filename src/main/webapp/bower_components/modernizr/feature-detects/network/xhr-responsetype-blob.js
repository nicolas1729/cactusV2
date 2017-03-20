/*!
{
  "name": "XHR responseType='blob'",
  "property": "xhrresponsetypeblob",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
<<<<<<< HEAD
    "href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
=======
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Tests for XMLHttpRequest xhr.responseType='blob'.
*/
define(['Modernizr', 'testXhrType'], function(Modernizr, testXhrType) {
  Modernizr.addTest('xhrresponsetypeblob', testXhrType('blob'));
});
