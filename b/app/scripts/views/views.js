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

var ContactPostView = Backbone.View.extend({
  tagName: 'form',
  template: template,
  events: {
    'submit': 'saveContact'
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },

  saveContact: function(event){
    event.preventDefault();
    console.log('clicked button');
    var contactDetails = $(event.currentTarget).serializeObject();
    this.model.set(contactDetails);
    this.model.save();
    return this;
  },
});

module.exports = {
  'ContactPostView': ContactPostView,
};
