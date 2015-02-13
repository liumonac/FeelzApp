// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#postButtonToggle").click(postButtonToggle);
	$(".postSnippet").click(popupPost);
  $("#expandPost").click(popupPost);


  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    hidePopupPost();
    if (document.getElementById('popup_container_form').style.display != "block") {
      $("#wrapper").toggleClass("toggled");
    }
  });

  $("#popup_container_panel").click(function(e) {
      if ( $("#popup_container_panel").has(e.target).length === 0 ) {
        $("#popup_container_panel").hide();
      }
  });

  $("#popup_container_form").click(function(e) {
      if ( $("#popup_container_form").has(e.target).length === 0 ) {
        postButtonToggle(null);
        $("#popup_container_form").hide();
      }
  });
}

//new post function
//make newpost page into a popup form
function postButtonToggle(e) {
  $('#postButtonToggle').text(function(i, text) {
  	  if (text === "Back") {
          document.getElementById('popup_container_form').style.display = "none";
      } else {
          $("#wrapper").removeClass("toggled")
          hidePopupPost();
          document.getElementById('popup_container_form').style.display = "block";
      }
      return text === "Back" ? "New Post" : "Back";
  });
}

// pop up selected post's full post
function popupPost(e) {
  e.preventDefault();
  var cat = $(this).data("cat");
  var title = $(this).data("title");
  var info = $(this).data("full");

  document.getElementById('fullPostCategory').className = cat;
  document.getElementById('fullPostTitle').innerHTML = title;
  document.getElementById('fullPostInfo').innerHTML = info;

  document.getElementById('wrapper').className = "";

  document.getElementById('popup_container_panel').style.display = "block";
	
}
function hidePopupPost() {
  document.getElementById('popup_container_panel').style.display = "none";
}

function checkNewPostForm(form) {

  if (form.newPostTitle.value == "") {
    alert("Error: Post Title cannot be blank!");
    form.newPostTitle.focus();
    return false;
  }

  if (form.newPostContent.value == "") {
    alert("Error: Post Content cannot be blank!");
    form.newPostContent.focus();
    return false;
  }

  if (form.newPostCategory.value == "Category") {
    alert("Error: Please select a post category!");
    form.newPostCategory.focus();
    return false;
  }

  return true;
}



// add the following:

// bump a post script


