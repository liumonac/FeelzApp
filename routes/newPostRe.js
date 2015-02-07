// Get all of our post data
var data = require('../postData.json');

exports.pushPost = function(req, res){

  var cat = req.query.newPostCategory;
  var postTitle = req.query.newPostTitle;
  var postContent = req.query.newPostContent;
  var snippet = postContent;
  
  if (postContent.length > 70) {
    var ellipsis = "...";
    snippet = postContent.substring(0,71).concat(ellipsis);
  }

  var newCategory = "";
  if (cat == 1) {
    newCategory = "panel-default";
  } else if (cat == 2) {
    newCategory = "panel-primary";
  } else if (cat == 3) {
    newCategory = "panel-success";
  } else if (cat == 4) {
    newCategory = "panel-info";
  } else if (cat == 5) {
    newCategory = "panel-warning";
  } else if (cat == 6) {
    newCategory = "panel-danger";
  }

  var newPost = { "postCategory": newCategory,
                  "postTitle": postTitle,
                  "postInfo": snippet,
                  "fullPost": postContent
                };

  //add error handling here

  data["posts"].unshift(newPost);

    console.log(data);

    res.render('index', data);

};

/*
// update when new post is added
function submitPost(e) {



  //reset form
  document.newPostForm.reset();
  postButtonToggle();

}*/