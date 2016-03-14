var $ = require('jquery');
var handlebars = require('handlebars');
var Backbone = require('backbone');

// List View
var BlogListView = Backbone.View.extend({
  tagName: "ul",
  className: "blog-items",
  id: "blog-items",
  initialize : function () {
    this.listenTo(this.collection, "add", this.renderBlogItem)
  },
  render: function(){
    return this;
  },
  renderBlogItem: function(blog){
    var view = new BlogItemView({ model: blog});
                this.$el.append(view.render().el);
  }
});

//Individual Blog Item View
var BlogItemView = Backbone.View.extend({
  template: handlebars.compile($('#blog-items').html()),
  events: {
    'click .clickMe': 'complete',
    'dblclick .clickMe': 'doubleTime',
      // this.collection.fetch().done(function(){
      //     this.collection.each(function(item){
      //       if(curID === item.get('Title')){
      //         $('#blog-items').append("<h1 id = " + item.get('Title') +">" + item.get('Title') + "</h1>")
      //             $('#blog-items').append("<p id = " + item.get('Body') +">" + item.get('Body') + "</p>")
      //       }
      //     });
      //   }.bind(this))
  },
  this.collection.fetch().done(function(){
      this.collection.each(function(item){
        if(curID === item.get('Title')){
          $('#blog-items').append("<h1 id = " + item.get('Title') +">" + item.get('Title') + "</h1>")
              $('#blog-items').append("<p id = " + item.get('Body') +">" + item.get('Body') + "</p>")
        }
      });
    }.bind(this)),

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = {
  'BlogListView': BlogListView,
  'BlogItemView': BlogItemView
};
