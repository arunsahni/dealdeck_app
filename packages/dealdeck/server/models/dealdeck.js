'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var DealSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    card: {
        type: Object,
        default: '',
        trim: true
    },
    points: {
        type: String,
        default: '',
        trim: true
    },
    percentage: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Validations
 */
DealSchema.path('card').validate(function(card) {
    return card.length;
}, 'Card cannot be blank');

/**
 * Statics
 */
DealSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('DealdeckModel', DealSchema);
