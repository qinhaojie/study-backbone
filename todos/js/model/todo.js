app =(function(app){


    /**
     * Todo模型
     */
    app.Todo = Backbone.Model.extend({
        defaults:{
            title:'',
            completed:false
        },

        toggle:function(){
            this.save({
                completed:!this.get('completed')
            })
        }
    });

    return app;


})(app || {});