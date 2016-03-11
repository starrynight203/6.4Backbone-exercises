var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var BlogPostView = require('./views/views');
var models = require('./models/models');

$(document).ready(function(){
  var post = new models.Post
  var blogPostView = new BlogPostView.BlogPostView({model: post});
  $('.container').html(blogPostView.render().el);
  console.log(blogPostView);
})
