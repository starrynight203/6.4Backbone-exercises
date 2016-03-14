var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var views = require('./views/views');
var models = require('./models/models');

$(document).ready(function(){
  var blog = new models.BlogReading();
  var blogview = new BlogItemView.BlogItemView({model: blog});
  $('.container').html(blogView.render().el);
  console.log(blogView);
})
