var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var BlogReading = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/Hannahsblogreading'
});

var BlogReadingCollection = Backbone.Collection.extend({
  model: BlogReading,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/Hannahsblogreading'
});

module.exports = {
  'BlogReading': BlogReading,
  'BlogReadingCollection': BlogReadingCollection
};
