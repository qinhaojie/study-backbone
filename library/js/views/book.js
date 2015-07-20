var app = app || {};

app.BookView = Backbone.View.extend({

    tagName:'div',

    className:'book-container',

    template: _.template($('#book-template').html()),

    render: function () {
        this.$el.html(this.template(
            this.model.toJSON()
        ));
        return this;
    }
});