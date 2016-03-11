var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var Post = Backbone.Model.extend({
  idAttribute: '_id',
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/Hannahsblog',
  defaults: {
    title: 'Blog Post',
    body: ''
  }
});

module.exports = {
  'Post': Post
};
