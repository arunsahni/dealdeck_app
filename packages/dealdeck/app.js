'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Dealdeck = new Module('dealdeck');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Dealdeck.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Dealdeck.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Dealdeck.menus.add({
        title: 'Deal decks',
        link: 'dealdeck example page',
        roles: ['authenticated'],
        menu: 'main'
    });

    Dealdeck.menus.add({
        title: 'Card History',
        link: 'card history page',
        roles: ['authenticated'],
        menu: 'main'
    });

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Dealdeck.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Dealdeck.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Dealdeck.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return Dealdeck;
});
