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
var hosturl="192.168.1.201";
var user_id='';
var track_id='';
