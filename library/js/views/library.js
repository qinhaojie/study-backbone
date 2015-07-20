var app = app || {};

app.LibraryView = Backbone.View.extend({

    el: '#books',

    events: {
        'click #add': 'addBook'
    },

    initialize: function (initialBooks) {

        this.collection = new app.Library(initialBooks);
        this.listenTo(this.collection, 'add', this.renderBook)
        this.render();
    },

    render: function () {

        this.collection.each(function (item) {
            this.renderBook(item)
        }, this);
        return this;
    },

    renderBook: function (book) {
        var bookView = new app.BookView({
            model: book
        });

        this.$el.append(bookView.render().el);
    },

    addBook: function (e) {
        var data = {};

        this.$el.find('input').each(function () {
            var $this = $(this);
            data[this.name] = $this.val().trim();
        });
        delete data.coverImage;
        this.collection.add(new app.BookModel(data));
        e.preventDefault();
        return false;
    }

});