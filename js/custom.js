$(document).ready(function () {



$(".secondarySchool .ortaokul").hover(function(){
    $(".secondarySchool .lessonPart").show();
    $(".secondarySchool .lessonBookPart").show();

    $(".highSchool .lessonPart").hide();
    $(".highSchool .lessonBookPart").hide();

    $(".lys .lessonPart").hide();
    $(".lys .lessonBookPart").hide();

    });

$(".highSchool .lise").hover(function(){

    $(".secondarySchool .lessonPart").hide();
    $(".secondarySchool .lessonBookPart").hide();

    $(".highSchool .lessonPart").show();
    $(".highSchool .lessonBookPart").show();

    $(".lys .lessonPart").hide();
    $(".lys .lessonBookPart").hide();

});

$(".lys .lysColor").hover(function(){
    $(".secondarySchool .lessonPart").hide();
    $(".secondarySchool .lessonBookPart").hide();

    $(".highSchool .lessonPart").hide();
    $(".highSchool .lessonBookPart").hide();

    $(".lys .lessonPart").show();
    $(".lys .lessonBookPart").show();

});



$('.mainSlider').bxSlider({
  /*infiniteLoop: false,
  hideControlOnEnd: true*/
  mode: 'fade',
  auto: true,
  autoControls: true,
  pause: 30000
});


$('.mostPopularSlider').bxSlider({
  
 minSlides: 1,
  maxSlides: 3,
  slideWidth: 370,
  slideMargin: 30
});

$('.newNoticeSlider').bxSlider({
  
 minSlides: 1,
  maxSlides: 25,
  slideWidth: 280,
  slideMargin: 50
});

$('.studentCommentsSlider').bxSlider({
  
 minSlides: 1,
  maxSlides: 3,
  slideWidth: 380,
  slideMargin: 20
});


$('.solutionsList').bxSlider({
  
 minSlides: 1,
  maxSlides: 4,
  slideWidth: 275,
  slideMargin: 0
});

$('.lessonsProgramSlider').bxSlider({
  moveSlides :1,
 minSlides: 2,
  maxSlides: 6,
  slideWidth: 80,
  slideMargin: 10
});

$('.tongucTestNumberSlider').bxSlider({
  moveSlides :1,
 minSlides: 3,
  maxSlides: 6,
  slideWidth: 80,
  slideMargin: 8
});



$(".menuIcon").click(function(){


 $(".menuMobilAll").toggleClass('active  animated fadeInLeft');
 $(".menuIcon").toggleClass('active','slow');
 $("header,section,footer").toggleClass("active");
$("body").toggleClass("active");
 $(".tongucTalk").toggleClass("active");

if( $(".tongucTalk").hasClass("active") ) {
   $("header").css({"box-shadow":"none"});
   $(".tongucTalkScreenCenter").css({"box-shadow":"rgba(0, 0, 0, 0.55) 0px 0px 45px 5px"});
}

});



$("#loginWindow").click(function(){
$("#newRememberWindow").css({"color":"#545b89"});
$("#loginWindow").css({"color":"#f35600"});
 $(".loginWindow").show(500);
 $(".newRememberWindow").hide(500);


});

$("#newRememberWindow").click(function(){

$("#loginWindow").css({"color":"#545b89"});
$("#newRememberWindow").css({"color":"#f35600"});
 $(".loginWindow").hide(500);
 $(".newRememberWindow").show(500);

});

var width = $("body").width();
if (width < 1023){
$(".membershipMenu ul").css({"display":"none"},500);
}

$(".memberCloseBack").click(function(){
$(".memberLoginAll").removeClass("active");
});

$(".membershipMenuOpenMenu").click(function(){
$(".membershipMenu ul").slideToggle();
});

$(".middleSchoolLeftMenuMobilOpen").click(function(){
$(".middleSchoolLeftMenu ul").slideToggle();
});


$(".searchIco").click(function(){
$(".searchMobilAll").addClass("active");
});

$(".searchCloseMobile").click(function(){
$(".searchMobilAll").removeClass("active");
});



$("#openLoginMember").click(function(){
$(".memberLoginAll").addClass("active");
});



$(".memberLoginName").click(function(){
$(".memberUp,.memberUp ul").slideToggle();
});


$(".menuMobilUl li .menuMobilDownArrow").click(function(){
     $(this).next("ul").slideToggle();
});


$(".fifthClass").click(function(){
$(".fifthClassOn").addClass("active");
$(".sixthClassOn").removeClass("active");
$(".seventhClassOn").removeClass("active");
$(".eighthClassOn").removeClass("active");
$(".ninthClassOn").removeClass("active");
$(".lysClassOn").removeClass("active");
});

$(".sixthClass").click(function(){
$(".fifthClassOn").css('cssText', 'display:none!important');
$(".sixthClassOn").addClass("active");
$(".seventhClassOn").removeClass("active");
$(".eighthClassOn").removeClass("active");
$(".ninthClassOn").removeClass("active");
$(".lysClassOn").removeClass("active");
});

$(".seventhClass").click(function(){
$(".fifthClassOn").css('cssText', 'display:none!important');
$(".sixthClassOn").removeClass("active");
$(".seventhClassOn").addClass("active");
$(".eighthClassOn").removeClass("active");
$(".ninthClassOn").removeClass("active");
$(".lysClassOn").removeClass("active");
});

$(".eighthClass").click(function(){
$(".fifthClassOn").css('cssText', 'display:none!important');
$(".sixthClassOn").removeClass("active");
$(".seventhClassOn").removeClass("active");
$(".eighthClassOn").addClass("active");
$(".ninthClassOn").removeClass("active");
$(".lysClassOn").removeClass("active");
});

$(".ninthClass").click(function(){
$(".fifthClassOn").css('cssText', 'display:none!important');
$(".sixthClassOn").removeClass("active");
$(".seventhClassOn").removeClass("active");
$(".eighthClassOn").removeClass("active");
$(".ninthClassOn").addClass("active");
$(".lysClassOn").removeClass("active");
});

$(".lysClass").click(function(){
$(".fifthClassOn").css('cssText', 'display:none!important');
$(".sixthClassOn").removeClass("active");
$(".seventhClassOn").removeClass("active");
$(".eighthClassOn").removeClass("active");
$(".ninthClassOn").removeClass("active");
$(".lysClassOn").addClass("active");
});

/*video-detay and orta-okul page start*/


$('.tongucTalkSolveTestClose').click(function(){

$(".tongucTalk").fadeOut(500);
});

$('.showMore').click(function(){
    
$(this).parent().find('.videoFieldArea').css({"height": "auto" }).slideDown();
$(this).parent().find('.commentsAreaUl').css({"height": "auto" }).slideDown();
$('.commentsAreaDown ul li:nth-of-type(3) .commentsAreaTextAndVote').css({"background":"url(img/background/footerOneLine.png)no-repeat" , "background-position":" center bottom"});
$('.commentsAreaDown ul li:last-child .commentsAreaTextAndVote').css({"background":"transparent" });


$(this).css({"display": "none" });

});

$('.subjectTest').click(function(){

$(".middleSchoolLeftMenu ul li").removeClass("active");
$(this).addClass("active");
$(".subjectExpressionPart").fadeOut(500);
$(".subjectCommentsPart").fadeOut(500);


$(".profilLessonsDetail").fadeOut(500);
$(".middleSchollTitle").fadeOut(500);
$(".books").fadeOut(500);


$(".subjectTestPart").fadeIn(500);

});

$('.subjectExpression').click(function(){

$(".middleSchoolLeftMenu ul li").removeClass("active");
$(this).addClass("active");

$(".subjectCommentsPart").fadeOut(500);
$(".subjectTestPart").fadeOut(500);
$(".books").fadeOut(500);


$(".subjectExpressionPart").fadeIn(500);
$(".middleSchollTitle").fadeIn(500);
$(".middleSchollTitle.subjectTestPart").fadeOut();


});

$('.subjectComments').click(function(){

$(".middleSchoolLeftMenu ul li").removeClass("active");
$(this).addClass("active");
$(".subjectExpressionPart").fadeOut(500);
$(".subjectCommentsPart").fadeIn(500);
$(".subjectTestPart").fadeOut(500);

});

$('.subjectBooks').click(function(){

$(".middleSchoolLeftMenu ul li").removeClass("active");
$(this).addClass("active");
$(".subjectExpressionPart").fadeOut(500);

$(".subjectTestPart").fadeOut(500);
$(".profilLessonsDetail").fadeOut(500);
$(".subjectCommentsPart").fadeOut(500);
$(".middleSchollTitle").fadeOut(500);

$(".books").fadeIn(500);
});

$('.commentsAreaVote').click(function(){

$(this).parentsUntil(".commentsAreaUl").addClass("active");

});

/*video-detay page End*/

/*test*/
$('.startTest').click(function(){


  $('.tongucTalkStart').fadeOut(500);

});

$('.resultCloseJs i').click(function(){

  $('.tongucTalkResult.hide').fadeOut(500);

});

$('.tongucTestEnd').click(function(){
  $('.tongucTalkTestEnd').fadeIn(500);

});


$('.testEvaluate').click(function(){

  $('.tongucTalkResult').fadeIn(500);
  $('.tongucTalkTestEnd').fadeOut(500);

});


$(".firstTab").click(function(){
  $(".firstTab").addClass("active");
  $(".projectMenu ul li:not(:first-child)").removeClass("active");
  $(".firstTabOn").css({"display": "table"});
  $(".secondTabOn").css({"display": "none"});
  $(".thirdTabOn").css({"display": "none"});
  $(".fourthTabOn").css({"display": "none"});
  $(".fifthTabOn").css({"display": "none"});
  $(".sixthTabOn").css({"display": "none"});
});

$(".secondTab").click(function(){
  $(".secondTab").addClass("active");
  $(".projectMenu ul li:not(:nth-child(2))").removeClass("active");
  $(".firstTabOn").css({"display": "none"});
  $(".secondTabOn").css({"display": "table"});
  $(".thirdTabOn").css({"display": "none"});
  $(".fourthTabOn").css({"display": "none"});
  $(".fifthTabOn").css({"display": "none"});
  $(".sixthTabOn").css({"display": "none"});
});

$(".thirdTab").click(function(){  
  $(".thirdTab").addClass("active");
  $(".projectMenu ul li:not(:nth-child(3))").removeClass("active");
  $(".firstTabOn").css({"display": "none"});
  $(".secondTabOn").css({"display": "none"});
  $(".thirdTabOn").css({"display": "table"});
  $(".fourthTabOn").css({"display": "none"});
  $(".fifthTabOn").css({"display": "none"});
  $(".sixthTabOn").css({"display": "none"});
});

$(".fourthTab").click(function(){
  $(".fourthTab").addClass("active");
  $(".projectMenu ul li:not(:nth-child(4))").removeClass("active");
  $(".firstTabOn").css({"display": "none"});
  $(".secondTabOn").css({"display": "none"});
  $(".thirdTabOn").css({"display": "none"});
  $(".fourthTabOn").css({"display": "table"});
  $(".fifthTabOn").css({"display": "none"});
  $(".sixthTabOn").css({"display": "none"});
});

$(".fifthTab").click(function(){
  $(".fifthTab").addClass("active");
  $(".projectMenu ul li:not(:nth-child(5))").removeClass("active");
  $(".firstTabOn").css({"display": "none"});
  $(".secondTabOn").css({"display": "none"});
  $(".thirdTabOn").css({"display": "none"});
  $(".fourthTabOn").css({"display": "none"});
  $(".fifthTabOn").css({"display": "table"});
  $(".sixthTabOn").css({"display": "none"});
});

$(".sixthTab").click(function(){
  $(".sixthTab").addClass("active");
  $(".projectMenu ul li:not(:nth-child(6))").removeClass("active");
  $(".firstTabOn").css({"display": "none"});
  $(".secondTabOn").css({"display": "none"});
  $(".thirdTabOn").css({"display": "none"});
  $(".fourthTabOn").css({"display": "none"});
  $(".fifthTabOn").css({"display": "none"});
  $(".sixthTabOn").css({"display": "table"});
});




});


