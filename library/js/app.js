var app = app || {};

$(function(){

    var books = [
        {title:'第一本书',author:'湿哒哒',releaseDate:'2007','keywords':'sdffd'},
        {title:'第一本书',author:'湿哒哒',releaseDate:'2007','keywords':'sdffd'},
        {title:'第一本书',author:'湿哒哒',releaseDate:'2007','keywords':'sdffd'},
        {title:'第一本书',author:'湿哒哒',releaseDate:'2007','keywords':'sdffd'}
    ];

    new app.LibraryView(books)
});