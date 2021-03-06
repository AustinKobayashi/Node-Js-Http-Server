var Author = require('../models/author');


// Display list of all Authors.
exports.author_list = function(req, res, next) {

    Author.find()
        .sort([['family_name', 'ascending']])
        .exec(function (err, list_authors) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('author_list', { title: 'Author List', author_list: list_authors });
        });

};


// Display detail page for a specific author
exports.author_detail = function(req, res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};


// Display author create form on get
exports.author_create_get = function(req, res){
    res.send('NOT IMPLEMENTED: Author create get');
};


// Handle author create post
exports.author_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: Author create POST');
};


// Handle author delete on get
exports.author_delete_get = function(req, res){
    res.send('NOT IMPLEMENTED: Author delete get');
};


// Handle author delete on post
exports.author_delete_post = function(req, res){
    res.send('NOT IMPLEMENTED: Author delete post');
};var Author = require('../models/author');


// Display detail page for a specific Author.
exports.author_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display Author create form on GET.
exports.author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST.
exports.author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET.
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};


// Display author update form on get
exports.author_update_get = function(req, res){
    res.send('NOT IMPLEMENTED: Author update get');
};


// Display author update form on post
exports.author_update_post = function(req, res){
    res.send('NOT IMPLEMENTED: Author update post');
};



