/*!
{
  "name": "Notification",
  "property": "notification",
  "caniuse": "notifications",
  "authors": ["Theodoor van Donge", "Hendrik Beskow"],
  "notes": [{
    "name": "HTML5 Rocks tutorial",
    "href": "http://www.html5rocks.com/en/tutorials/notifications/quick/"
  },{
    "name": "W3C spec",
<<<<<<< HEAD
    "href": "www.w3.org/TR/notifications/"
  }],
=======
    "href": "https://www.w3.org/TR/notifications/"
  }, {
    "name": "Changes in Chrome to Notifications API due to Service Worker Push Notifications",
    "href": "https://developers.google.com/web/updates/2015/05/Notifying-you-of-notificiation-changes"
  }],
  "knownBugs": [
    "Possibility of false-positive on Chrome for Android if permissions we're granted for a website prior to Chrome 44."
  ],
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  "polyfills": ["desktop-notify", "html5-notifications"]
}
!*/
/* DOC
Detects support for the Notifications API
*/
define(['Modernizr'], function(Modernizr) {
<<<<<<< HEAD
  Modernizr.addTest('notification', 'Notification' in window && 'permission' in window.Notification && 'requestPermission' in window.Notification);
=======
  Modernizr.addTest('notification', function() {
    if (!window.Notification || !window.Notification.requestPermission) {
      return false;
    }
    // if permission is already granted, assume support
    if (window.Notification.permission === 'granted') {
      return true;
    }

    try {
      new window.Notification('');
    } catch (e) {
      if (e.name === 'TypeError') {
        return false;
      }
    }

    return true;
  });
>>>>>>> 533092147c410637b99bf57166ee237aec486555
});
