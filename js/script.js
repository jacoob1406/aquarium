$(document).ready(function () {
    animate_red_fish();
    animate_blue_fish();
    animate_bubble1();
    animate_bubble2();
    animate_bubble3();
});

//HELP
$(".howto").click(function () {
    // $('.modal').css('display', 'block');
    $('.modal').fadeIn();
});

$(".escape").click(function () {
    // $('.modal').css('display', 'none');
    $('.modal').fadeOut();
});

$("button").click(function () {
    //  $('.modal').css('display', 'none');
    $('.modal').fadeOut();
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        $('.modal').fadeOut();
    }
});

//needed variables
var w_blue = $("#fish2Id").width();
var h_blue = $("#fish2Id").height();

var w_red = $("#fish1Id").width();
var h_red = $("#fish1Id").height();

var w_bubble = $(".bubbleClass").width();
var h_bubble = $(".bubbleClass").height();

//Gold fish is increased when we double click on it
$("#fish1Id").dblclick(function () {
    $(this).animate({
        width: w_red * 2,
        height: h_red * 2
    });

    setTimeout(function () {
        $('#fish1Id').animate({
            width: w_red,
            height: h_red
        });
    }, 2000, "linear");
});


//Red fish go for click
$(document).click(function (event) {
    let X = event.pageX - 100;
    let Y = event.pageY - 100;

    $("#fish1Id").stop().animate({
        left: X,
        top: Y
    }, 500, function () {
        animate_red_fish();
    });
});


//Red Fish Move Randomly
function animate_red_fish() {
    let height = $(window).height() - h_red;
    let width = $(window).width() - w_red;

    topheight = Math.floor(Math.random() * height);
    topwidth = Math.floor(Math.random() * width);

    $("#fish1Id").animate({
        top: topheight,
        left: topwidth
    }, 2000, function () {
        animate_red_fish();
    });
}
;


//When we hoover the mouse over the blue fish it moves
//to a random location

$("#fish2Id").mouseover(function () {
    let maxLeft = $(window).width() - w_blue;
    let maxTop = $(window).height() - h_blue;
    let leftPos = Math.floor(Math.random() * (maxLeft));
    let topPos = Math.floor(Math.random() * (maxTop));
    $("#fish2Id").stop().animate({
        left: leftPos,
        top: topPos
    }, 500, function () {
        animate_blue_fish();
    });
});

//Blue Fish Move Randomly
function animate_blue_fish() {

    let height = $(window).height() - h_blue;
    let width = $(window).width() - w_blue;

    topheight = Math.floor(Math.random() * height);
    topwidth = Math.floor(Math.random() * width);

    $("#fish2Id").animate({
        top: topheight,
        left: topwidth
    }, 2000, function () {
        animate_blue_fish();
    });
}
;

// Function for making random positions for the bubbles
function positionBubble() {
    let w = $(window).width() - 100;
    let nw = Math.floor(Math.random() * w);
    return [nw];
}

//Clicking on bubbles

$("#bubble1Id").click(function () {
    $("#bubble1Id").fadeOut(2000).stop(true, true);
});


$("#bubble2Id").click(function () {
    $("#bubble2Id").fadeOut(2000);

    $("#bubble2Id").stop(true, true);
    //$("#bubble2Id").fadeOut(2000);
});

$("#bubble3Id").click(function () {
    $("#bubble3Id").fadeOut(2000).stop(true, true);
});

// constant random movement of the first bubble
function animate_bubble1() {
    let newPoz = positionBubble();
    $("#bubble1Id").fadeIn(2000).animate({
        bottom: '100%', //start from the bottom 100% width
        left: newPoz[0] //random position
    }, 8000, 'linear', function () { //linear - constant pace
        $(this).css("bottom", "-10%");
        animate_bubble1();
    });
}
// constant random movement of the second bubble
function animate_bubble2() {
    let newPoz = positionBubble();
    $("#bubble2Id").fadeIn(2000).animate({
        bottom: '100%',
        left: newPoz[0]
    }, 8000, 'linear', function () { //linear - constant pace
        $(this).css("bottom", "-10%");
        animate_bubble2();
    });
}
// constant random movement of the third bubble
function animate_bubble3() {
    let newPoz = positionBubble();
    $("#bubble3Id").fadeIn(2000).animate({
        bottom: '100%',
        left: newPoz[0]
    }, 8000, 'linear', function () { //linear - constant pace
        $(this).css("bottom", "-10%");
        animate_bubble3();
    });
}