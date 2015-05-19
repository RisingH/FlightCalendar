/**
 * Created by jl.gu on 2015/4/14.
 */
define(function () {

    var matrixContainer = [
        '<div class="mod-bd" id="matrixContainer"></div>'
    ].join('\n');

    var stContainer = [
        '<div class="calender" id="stContainer">',
        '</div>'
    ].join('\n');

    var leftContainer = [
        '<div class="calender-tabs" id="leftContainer"></div>'
    ].join('\n');

    var tabContainer = [
        '<div class="calender-tabs-month">',
        '</div>'
    ].join('\n');

    var tabChildrenContainer = [
        '<ul class="month" id="tabContainer">',
        '</ul>',
    ].join('\n');

    var tabChild = [
        '<li id="{0}">',
        '<div class="theme-s"><img src="{1}" id="{2}"></div>',
        '</li>'
    ].join('\n');

    var calendarContainer = [
        '<div class="calender-tabs-date-wrap" id="calendarContainer">',
        '<span class="btn-prev" id="btnPrev"></span>',
        '<span class="btn-next" id="btnNext"></span>',
        '</div>'
    ].join('\n');

    var galleryContainer = [
        '<div class="calender-tabs-date" id="galleryContainer"></div>'
    ].join('\n');

    var gallery = [
        '<div class="calender-date-panel active">',
        ' <ul class="days">',
        '<li>日</li>',
        '<li>一</li>',
        '<li>二</li>',
        '<li>三</li>',
        '<li>四</li>',
        '<li>五</li>',
        '<li>六</li>',
        '</ul>',
        '</div>'
    ].join('\n');

    var calendarDates = [
        '<ul class="dates" id="dates">',
        '</ul>'
    ].join('\n');

    var calendarBackImg = [
        '<div class="theme-img">',
        '<img src="{0}" alt="">',
        '</div>'
    ].join('\n');

    var emptyDateDom = [
        '<li></li>'
    ].join('\n');

    var ordinaryDateDom = [
        '<li><span>{0}</span></li>'
    ].join('\n');

    var specialDateDom = [
        '<li><span class="hide">{0}</span>',
        '<div class="sale-overlay">',
        '<a href="{1}" target="_blank">',
        '<span class="sale-date">{2}</span>',
        '<p class="sale-place">{3}</p>',
        '<p class="sale-price"><dfn>¥</dfn>{4}</p>',
        '</div>',
        '</li>'
    ].join('\n');

    var productContainer = [
        '<div class="product" id="productContainer">',
        '</div>'
    ].join('\n');

    var productItem = [
        '<div class="product-item">',
        '<a href="{0}">',
        '<div class="item-thumbnail">',
        '<img src="{1}" alt="{2}">',
        '</div>',
        '<div class="item-msg">',
        '<p class="price"><dfn>¥</dfn>{3} <i class="price_info">起</i></p>',
        '<p class="item-name">{4}</p>',
        '</div>',
        '<div class="iefix-bg"></div>',
        '</a>',
        '</div>'
    ].join('\n');

    var adItem = [
        '<div class="extra-item">',
        '<a href="{0}">',
        '<p class="extra-thumbnail">',
        '<img src="{1}" alt="">',
        '</p>',
        '<p class="extra-text">{2}</p>',
        '<p class="iefix-bg"></p>',
        '</a>',
        '</div>'
    ].join('\n');

    return {
        matrixContainer: matrixContainer,
        stContainer: stContainer,
        leftContainer: leftContainer,
        tabContainer: tabContainer,
        tabChildrenContainer: tabChildrenContainer,
        tabChild: tabChild,
        calendarContainer: calendarContainer,
        galleryContainer: galleryContainer,
        gallery: gallery,
        calendarDates: calendarDates,
        calendarBackImg: calendarBackImg,
        emptyDateDom: emptyDateDom,
        ordinaryDateDom: ordinaryDateDom,
        specialDateDom: specialDateDom,
        productContainer: productContainer,
        productItem: productItem,
        adItem: adItem
    };
});