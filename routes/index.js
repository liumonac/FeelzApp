// Get all of our post data
var data = require('../postData.json');
var models = require('../models');

exports.viewHome = function(req, res){

  models.LoggedIn
        .find()
        .exec(checkLogin);

  function checkLogin(err, login) {
      console.log(login.length);
      if ( login.length != 0) {
        console.log("rendering home");
          models.Post
                .find()
                .sort('-date')
                .exec(renderPosts);

          function renderPosts(err, posts) {
            console.log(posts)
            for (i = 0; i < posts.length; i++) {
              var date = new Date(posts[i]["localDate"]);
              
              posts["localDate"] = date.toLocaleString();
             
            }
            var loginPosts = {"login": login,
                              "posts": posts
                             };

            res.render('index', loginPosts);
          }

      } else res.render('login');
  }

};

exports.viewCategory = function(req, res){
  var cat = req.params.id;
  var newCategory = "";

  if (cat == 1) {
    newCategory = "panel-default";
  } else if (cat == 2) {
    newCategory = "panel-primary";
  } else if (cat == 3) {
    newCategory = "panel-success";
  } else if (cat == 4) {
    newCategory = "panel-custom";
  } else if (cat == 5) {
    newCategory = "panel-warning";
  } else if (cat == 6) {
    newCategory = "panel-danger";
  }

  models.Post
        .find({"postCategory": newCategory})
        .sort('bumpCount')
        .exec(renderCategory);

  function renderCategory(err, posts) {
    res.render('index', {'posts': posts});
  }

};

exports.pushPost = function(req, res){
  var form_data = req.body;
  var cat = form_data.postCategory;
  var newCategory = "";

  if (cat == 1) {
    newCategory = "panel-default";
  } else if (cat == 2) {
    newCategory = "panel-primary";
  } else if (cat == 3) {
    newCategory = "panel-success";
  } else if (cat == 4) {
    newCategory = "panel-custom";
  } else if (cat == 5) {
    newCategory = "panel-warning";
  } else if (cat == 6) {
    newCategory = "panel-danger";
  }

  var d = new Date();
  var newPost = new models.Post( {
    "postCategory": newCategory,
    "postTitle": form_data.postTitle,
    "postInfo": form_data.postInfo,
    "fullPost": form_data.fullPost,
    "bumpCount": form_data.bumpCount,
    "date": d,
    "localDate": d.toLocaleString()
  });

  newPost.save(afterPush);
  function afterPush(err) {
    if (err) {
      console.log(err);
      res.send(500);
    }
    res.send("newpost ok");
  }

};

exports.bumpPost = function(req, res) {
  var data = req.body;


  models.Post
        .update( {"_id": data.id}, { $inc: {"bumpCount": 1 } } )
        .exec(afterBump);
/*
  models.Post
        .find()
        .update( {"bumpCount" : data.bumpCount})
        .exec(afterBump);
*/

  function afterBump(err, post) {
    if (err) {
      console.log(err);
      res.send(500);
    }
      res.send("ok");
  }

};