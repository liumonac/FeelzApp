
document.write("\
	<nav class=\"navbar navbar-default navbar-fixed-top\">\
		<div class=\"container\">\
			<div class=\"navbar-header\">\
				<!-- collapse formatting for mobile -->\
		  		<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#menuIcon\" aria-expanded=\"false\" aria-controls=\"navbar\">\
		   		 	<span class=\"sr-only\">Menu</span>\
					<span class=\"icon-bar\"></span>\
		        	<span class=\"icon-bar\"></span>\
		    	    <span class=\"icon-bar\"></span>\
				</button>\
				<!-- navibar title -->\
				<a class=\"navbar-brand\" href=\"#\"><b>Feelz</b></a>\
			</div>\
			<!-- everything in this div will collapse into a menu button on mobile -->\
			<div id=\"menuIcon\" class=\"collapse navbar-collapse menuIcon\" >\
				<!-- this list will be collapsed into one on mobile instead of side by side -->\
				<ul class=\"nav navbar-nav navbar-right\"> \
					<li>\
						<!--- make newpost button on the navibar.  \
										It will change to \"back\" on form load. -->\
						<!-- navbar-btn: formatted button for navbar -->\
						<a id=\"postButtonToggle\">New Post</a>\
					</li>\
					<!-- devides new post and account settings in mobile -->\
				    <li class=\"divider\"></li>\
					<li >\
						<!-- dropdown-toggle: dropdown of menu options for account -->\
					  	<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\
					    	Account <span class=\"caret\"></span>\
					  	</a>\
					  	<ul class=\"dropdown-menu\" role=\"menu\">\
					  		<li class=\"divider\"></li>\
					    	<li><a href=\"accountSettings.html\">Settings</a></li>\
					    	<li><a href=\"login_page.html\">Logout</a></li>\
					    	<li class=\"divider\"></li>\
					  	</ul>\
					</li>\
					<li>\
		                 <a href=\"about_page.html\">About FeelzApp</a>\
					</li>\
					<li>\
						<a href=\"help_page.html\">Help</a>\
					</li>\
				</ul>\
			</div>\
		</div>\
	</nav>\
");