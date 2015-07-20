var app = app || {};

app.LibraryView = Backbone.View.extend({

    el:'#books',

    initialize:function(initialBooks){

        this.collection = new app.Library(initialBooks);
        this.render();
    },

    render: function () {

        this.collection.each(function(item){
            console.log(item)
            this.renderBook(item)
        },this);
        return this;
    },

    renderBook: function (book) {
        var bookView = new app.BookView({
            model:book
        });

        this.$el.append(bookView.render().el);
    }

});