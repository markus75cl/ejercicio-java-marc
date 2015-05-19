$(document).ready(function () {

	
	var amenu = $("#menu-container nav > ul > li > a");

	amenu.click(
				function()
				{
					var liprevious = $(".current-menu-item");
					liprevious.removeClass("current-menu-item");
					
					var aclicked = $(this); 
					var liparent = aclicked.parent();
					liparent.addClass("current-menu-item");
				}
	);
	
	var limenu = $("#menu-container nav > ul > li");
	
	limenu.hover(
				function()
				{
					var lihovered = $(this);
					var ulsubmenu = lihovered.children(".sub-menu");
					ulsubmenu.fadeToggle();
				}
	);
	
	var menucontainer = $("#menu-container");
	var hamburger = $("#mobile-button");
	hamburger.click(
					function()
					{
			
						menucontainer.show();

						hamburger.hide();
						
						mobileclose.show();
					}
	);
	
	var mobileclose = $("#mobile-close");
	mobileclose.click(
					function()
					{
						menucontainer.hide();
						
						mobileclose.hide();
						
						hamburger.show();
					}
	);
});