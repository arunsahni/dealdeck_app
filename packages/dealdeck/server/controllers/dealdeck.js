'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Dealdeck = mongoose.model('DealdeckModel'),
    _ = require('lodash');


exports.saveDeal = function(req, res) {


    var cards = new Dealdeck({
        card : req.body.myArray,
        points : req.body.points,
        percentage : req.body.percentage

    });

    //console.log('CONTROLLER??????????????????@#@# :'+cards);

    cards.save(function(err) {
        if (err) {
            console.log("Error While Saveing Cards"+err.errors);
        } else {
            res.jsonp(cards);
        }
    });
};

exports.listDeal = function(req, res) {

    Dealdeck.find().sort('-created').populate('user', 'name username').exec(function(err, dealdeck) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(dealdeck);
        }
    });
};


exports.getOneDeal = function(req, res) {
    //console.log("Request"+req+"-"+req.body+req.params.id+req.body.cardid);
    Dealdeck.findOne({ _id: req.body.cardid }).sort('-created').populate('user', 'name username').exec(function(err, dealdeck) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(dealdeck);
        }
    });
};