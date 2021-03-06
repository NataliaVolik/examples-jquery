const inputLeft = $("input.button_one");
const inputRight = $("input.button_two");
const navLeft = $(".nav-left");
const navRight = $(".nav-right");
const mainClass = $(".main");
const display = JSON.parse(localStorage.getItem('display'));

const openPanelLeft = (display) => {
    if (display == false) {
        navLeft.hide();
        mainClass.animate({
            marginLeft: "0px"
        });
    } else {
        navLeft.show();
        mainClass.animate({
            marginLeft: "180px"
        });
    }
}

openPanelLeft(display);

inputLeft.click(() => {
    const display = navLeft.is(':visible');
    localStorage.setItem('display', display);
    const show = !display;
    openPanelLeft(show);
});

// Task 1
const openPanelRight = (display) => {
    if (display == false) {
        navRight.addClass("hideNav");
        mainClass.animate({
            marginRight: "0px"
        });
    } else {
        mainClass.animate({
            marginRight: "180px"
        });
        navRight.removeClass("hideNav");
        navRight.addClass("showNav");
    }

}

openPanelRight(display);

inputRight.click(() => {
    const display = navRight.is(':visible');
    localStorage.setItem('display', display);
    const show = !display;
    openPanelRight(show);
})

const listName = $('li.item');
console.log("Все элементы: " + listName.hasClass("page"));
listName.each((index, elem) => {
    console.log("Элемент: " + $(elem).hasClass('page'));
});

//Task 2
$("li.itn-bg-one").click(() => {
    mainClass.css("background-color", "#cceecc");
    mainClass.removeClass("grey");
    mainClass.removeClass("beige");
});

$("li.itn-bg-two").click(() => {
    mainClass.removeClass("grey");
    mainClass.addClass("beige");
    mainClass.removeAttr('style');
});

$("li.itn-bg-three").click(() => {
    mainClass.removeClass("beige");
    mainClass.addClass("grey");
    mainClass.removeAttr('style');
});

$("li.itn-bg-four").click(() => {
    mainClass.css("background-color", "#eecccc");
    mainClass.removeClass("beige");
    mainClass.removeClass("grey");
});
// Task 3
const submit = $('#submit');
const input = $("#item");
const innerModal = $('#innerModal');
const closeModal = $('#closeModal');
const modal = $('#modal');

submit.click(() => {
    let content = input.val();
    innerModal.html(content);
    modal.addClass('show');
});
closeModal.click(() => {
    modal.removeClass('show');
})
// Task 4
$(document).ready(function () {
    $('.panel-heading').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.panel-heading').not(this).removeClass('in').next().slideUp();
    });
});
// Task 5
$(function () {
    const tab = $('#tabs .tabs-items > div');
    tab.hide().filter(':first').show();
    $('#tabs .tabs-nav a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('#tabs .tabs-nav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':first').click();
});
