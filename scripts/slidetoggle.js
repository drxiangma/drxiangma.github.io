var pathArray = window.location.pathname.split( '/' );
var folder1 = (pathArray[1]);
var folder2 = (pathArray[2]);
var folder3 = (pathArray[3]);
if (folder2=='people') {
$(document).ready(function(){
	//Hide (Collapse) the toggle containers on load
	$("ul.toggle").hide();
	$(".peoplenav li.trigger").addClass("active");
	$(".peoplenav li.trigger").children("ul.toggle").slideToggle("fast");

	//Switch the "Open" and "Close" state per click
	$("li.trigger").toggle(function(e){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});

	//Slide up and down on click
	$("li.trigger").click(function(e){
		$(this).children("ul.toggle").slideToggle("fast");
	});
	
	$("ul.toggle a").click(function(e){
		e.stopPropagation();
	});
});}
else if (folder2=='research') {
$(document).ready(function(){
	//Hide (Collapse) the toggle containers on load
	$("ul.toggle").hide();
	$(".researchnav li.trigger").addClass("active");
	$(".researchnav li.trigger").children("ul.toggle").slideToggle("fast");

	//Switch the "Open" and "Close" state per click
	$("li.trigger").toggle(function(e){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});

	//Slide up and down on click
	$("li.trigger").click(function(e){
		$(this).children("ul.toggle").slideToggle("fast");
	});
	
	$("ul.toggle a").click(function(e){
		e.stopPropagation();
	});
});}
else if (folder2=='grad') {
$(document).ready(function(){
	//Hide (Collapse) the toggle containers on load
	$("ul.toggle").hide();
	$(".gradnav li.trigger").addClass("active");
	$(".gradnav li.trigger").children("ul.toggle").slideToggle("fast");

	//Switch the "Open" and "Close" state per click
	$("li.trigger").toggle(function(e){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});

	//Slide up and down on click
	$("li.trigger").click(function(e){
		$(this).children("ul.toggle").slideToggle("fast");
	});
	
	$("ul.toggle a").click(function(e){
		e.stopPropagation();
	});
});}
else if (folder2=='undergrad') {
$(document).ready(function(){
	//Hide (Collapse) the toggle containers on load
	$("ul.toggle").hide();
	$(".undergradnav li.trigger").addClass("active");
	$(".undergradnav li.trigger").children("ul.toggle").slideToggle("fast");

	//Switch the "Open" and "Close" state per click
	$("li.trigger").toggle(function(e){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});

	//Slide up and down on click
	$("li.trigger").click(function(e){
		$(this).children("ul.toggle").slideToggle("fast");
	});
	
	$("ul.toggle a").click(function(e){
		e.stopPropagation();
	});
});}
else if (folder2=='mrcf') {
$(document).ready(function(){
	//Hide (Collapse) the toggle containers on load
	$("ul.toggle").hide();
	$(".mrcfnav li.trigger").addClass("active");
	$(".mrcfnav li.trigger").children("ul.toggle").slideToggle("fast");

	//Switch the "Open" and "Close" state per click
	$("li.trigger").toggle(function(e){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});

	//Slide up and down on click
	$("li.trigger").click(function(e){
		$(this).children("ul.toggle").slideToggle("fast");
	});
	
	$("ul.toggle a").click(function(e){
		e.stopPropagation();
	});
});}
else if (folder2=='news') {
$(document).ready(function(){
	//Hide (Collapse) the toggle containers on load
	$("ul.toggle").hide();
	$(".newsnav li.trigger").addClass("active");
	$(".newsnav li.trigger").children("ul.toggle").slideToggle("fast");

	//Switch the "Open" and "Close" state per click
	$("li.trigger").toggle(function(e){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});

	//Slide up and down on click
	$("li.trigger").click(function(e){
		$(this).children("ul.toggle").slideToggle("fast");
	});
	
	$("ul.toggle a").click(function(e){
		e.stopPropagation();
	});
});}
else if (folder2=='donate') {
$(document).ready(function(){
	//Hide (Collapse) the toggle containers on load
	$("ul.toggle").hide();
	$(".donatenav li.trigger").addClass("active");
	$(".donatenav li.trigger").children("ul.toggle").slideToggle("fast");

	//Switch the "Open" and "Close" state per click
	$("li.trigger").toggle(function(e){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});

	//Slide up and down on click
	$("li.trigger").click(function(e){
		$(this).children("ul.toggle").slideToggle("fast");
	});
	
	$("ul.toggle a").click(function(e){
		e.stopPropagation();
	});
});}
else if (folder2=='resources') {
$(document).ready(function(){
	//Hide (Collapse) the toggle containers on load
	$("ul.toggle").hide();
	$(".resourcesnav li.trigger").addClass("active");
	$(".resourcesnav li.trigger").children("ul.toggle").slideToggle("fast");

	//Switch the "Open" and "Close" state per click
	$("li.trigger").toggle(function(e){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});

	//Slide up and down on click
	$("li.trigger").click(function(e){
		$(this).children("ul.toggle").slideToggle("fast");
	});
	
	$("ul.toggle a").click(function(e){
		e.stopPropagation();
	});
});}
else {
$(document).ready(function(){
	//Hide (Collapse) the toggle containers on load
	$("ul.toggle").hide(); 

	//Switch the "Open" and "Close" state per click
	$("li.trigger").toggle(function(e){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});

	//Slide up and down on click
	$("li.trigger").click(function(e){
		$(this).children("ul.toggle").slideToggle("fast");
	});
	
	$("ul.toggle a").click(function(e){
		e.stopPropagation();
	});
});};
