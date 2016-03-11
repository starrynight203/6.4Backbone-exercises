var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var ContactPostView = require('./views/views');
var models = require('./models/models');

$(document).ready(function(){
  var contact = new models.Contact();
  var contactPostView = new ContactPostView.ContactPostView({model: contact});
  $('.container').html(contactPostView.render().el);
  console.log(contactPostView);
});
