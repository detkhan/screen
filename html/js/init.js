// Init app
var $$ = Dom7;
var myApp = new Framework7({
    router: true,
//    dynamicPageUrl: 'content-{{index}}',
    // ... other parameters
});

// Init main view
// Initialize View
var mainView = myApp.addView('.view-main')

// Load about page:
mainView.router.load({pageName: 'index'});
var hosturl="127.0.0.1";
//var hosturl="192.168.0.103";
var user_id='';
var track_id='';
