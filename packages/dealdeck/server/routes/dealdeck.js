'use strict';

var dealdeck = require('../controllers/dealdeck');

// The Package is past automatically as first parameter
module.exports = function(Dealdeck, app, auth, database) {

    app.post('/dealdeck/example/savedeal', function(req, res, next) {
        //console.log("route Server /dealdeck/example/anyone"+req+'---'+req.body+'---'+req.body.myArray);
        dealdeck.saveDeal(req, res);
    });

    app.get('/dealdeck/example/listDeal', function(req, res, next) {
        console.log("route Server /dealdeck/example/listDeal");
        dealdeck.listDeal(req, res);
    });


    app.post('/dealdeck/example/detailsDeal', function(req, res, next) {
        console.log("route Server /dealdeck/example/detailsDeal"+req);
        dealdeck.getOneDeal(req, res);
    });



    app.get('/dealdeck/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/dealdeck/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/dealdeck/example/render', function(req, res, next) {
        Dealdeck.render('index', {
            package: 'dealdeck'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
