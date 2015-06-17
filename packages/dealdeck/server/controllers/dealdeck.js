'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Dealdeck = mongoose.model('DealdeckModel'),
    _ = require('lodash');


exports.saveDeal = function(req, res) {

    var allarray = req.body.myArray;
    allarray = shuffle(allarray);
    var points = calculatePoint(allarray);
    var percentage = calculatePercentage(points);

    var cards = new Dealdeck({
        card : allarray,
        points : points,
        percentage : percentage

    });

    cards.save(function(err) {
        if (err) {
            console.log("Error While Saveing Cards " + err.errors);
        } else {
            var arrangedCard = getCardArrangment(cards.card);
            var result =  {
                cardArrange : cards,
                spades : arrangedCard.spades,
                clubs : arrangedCard.clubs,
                hearts : arrangedCard.hearts,
                diamonds : arrangedCard.diamonds
            };
            res.jsonp(result);
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

            var arrangedCard = getCardArrangment(dealdeck.card);
            var result =  {
                cardArrange : dealdeck,
                spades : arrangedCard.spades,
                clubs : arrangedCard.clubs,
                hearts : arrangedCard.hearts,
                diamonds : arrangedCard.diamonds
            };
            res.jsonp(result);
        }
    });
};


var getCardArrangment = function(myArray){

    var spades = [];
    var clubs = [];
    var hearts = [];
    var diamonds = [];

    for(var i=0;i < myArray.length;i++) {
        if (i < 13) {
            spades.push(myArray[i]);
        }
        else if (i < 26) {
            clubs.push(myArray[i]);
        }
        else if (i < 39) {
            hearts.push(myArray[i]);
        }
        else if (i < 52) {
            diamonds.push(myArray[i]);
        }
    }

    var myResult =  {
        spades : spades,
        clubs : clubs,
        hearts : hearts,
        diamonds : diamonds
    };

    return myResult;

};

var shuffle  = function(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

var calculatePoint = function(allarray)
{
    var points = 0;
    console.log('before return Points'+points);
    console.log('array Length:'+ allarray.length);

    for(var index=0; index < allarray.length;index++)
    {
        if(allarray[index].val == index+1)
        {
            //Got two points
            points = points + 1;
            allarray[index].color = 'green';

        }

        if((allarray[index].val == index+1 || allarray[index].val == index+14 || allarray[index].val == index+27 || allarray[index].val == index+40))
        {
            points = points + 1;
            if(!(allarray[index].val == index+1))
            {
                allarray[index].color = 'orange';
            }
        }
    }

    return points;
};

var calculatePercentage = function(points)
{

    return parseInt((points / 104 ) * 100) + '%';

};