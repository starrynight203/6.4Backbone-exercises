var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var template = require('../../templates/index.hbs');

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};


var BlogPostView = Backbone.View.extend({
  tagName: 'form',
  template: template,
  events: {
    'submit': 'savePost'
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },

  savePost: function(event){
    event.preventDefault();
    console.log('clicked button');

    var postDetails = $(event.currentTarget).serializeObject();
    console.log(postDetails);

    this.model.set(postDetails);
    this.model.save();


    return this;
  }
});

module.exports = {
  'BlogPostView': BlogPostView
};
