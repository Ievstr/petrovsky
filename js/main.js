/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/advantages/advantages.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/advantages/advantages.js ***!
  \*****************************************************/
/***/ (() => {

$(function () {
  var advantages = $('.advantages');
  var advantagesItem = $('.advantages__item');
  if (advantages.length > 0 && $(window).width() > 1600 && advantagesItem.length < 5) {
    advantagesItem.parent().addClass('grid-2');
  }
});

/***/ }),

/***/ "./src/blocks/modules/animate-text/animate-text.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/animate-text/animate-text.js ***!
  \*********************************************************/
/***/ (() => {

$(function () {
  var targetBlock = $('.js-animate-text span');
  if (targetBlock.length) {
    $(window).scroll(function () {
      var currentScroll = $(window).scrollTop();
      $.each(targetBlock, function () {
        var targetBlockOffset = $(this).offset().top;
        var targetBlockHeight = $(this).outerHeight();
        var scrollStart;
        if ($(window).width() > 1023) {
          scrollStart = 200;
        } else {
          scrollStart = 100;
        }
        var step = (currentScroll - (targetBlockOffset - (targetBlockHeight + scrollStart))) / targetBlockHeight;
        var number = Math.round(-step * 100);
        if (!$(this).hasClass('animate-text-stop') && number <= 0 && number >= -100) {
          $(this).css('backgroundPosition', "".concat(number, "% 0"));
        }
        if (currentScroll >= targetBlockOffset + targetBlockHeight || number <= -100) {
          $(this).css('backgroundPosition', "-100% 0").addClass('animate-text-stop');
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/catalog/catalog.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/catalog/catalog.js ***!
  \***********************************************/
/***/ (() => {

$(function () {
  if ($('.catalog').length) {
    $('.js-tab-item').click(function () {
      if ($(this).hasClass('tab__item_map')) {
        $('.catalog .tab-content').parent().addClass('container_wide');
      } else {
        $('.catalog .tab-content').parent().removeClass('container_wide');
      }
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/***/ (() => {

$(function () {
  var $phone = $('input[type="tel"]');
  var regex = '\\+7 \\([0-6,9]{1}[0-9]{2}\\) [0-9]{3}–[0-9]{2}–[0-9]{2}';
  $phone.inputmask({
    regex: regex
  });
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  var header = $('.js-header');
  $(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
    currentScroll > 0 ? header.addClass('header_scroll') : header.removeClass('header_scroll');
  });
  $('.js-burger').click(function () {
    $(this).toggleClass('burger_active');
    if ($(this).hasClass('burger_active')) {
      $('body').removeClass('o-hidden');
    } else {
      $('body').addClass('o-hidden');
    }
    header.toggleClass('header_active');
    $('.header__content').toggleClass('header__content_active');
    $('body').toggleClass('o-hidden');
  });
});

/***/ }),

/***/ "./src/blocks/modules/nav/nav.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/nav/nav.js ***!
  \***************************************/
/***/ (() => {

$(function () {
  $('.nav__link_dropdown').click(function (e) {
    e.preventDefault();
  });
  if ($(window).width() > 1279) {
    $('.js-nav-sublist').mouseover(function (e) {
      e.preventDefault();
      $('.js-nav-sublist').not(this).removeClass('nav__item_active').find('.nav__dropdown').slideUp(0);
      $(this).addClass('nav__item_active').find('.nav__dropdown').slideDown(0);
    });
    $('.nav__dropdown-list li a').mouseover(function () {
      $(this).parent().siblings().find('a').removeClass('active');
      $(this).addClass('active');
      var data = $(this).data('sublist');
      $(this).closest('.nav__dropdown-list').next().find('.nav__dropdown-item').removeClass('active');
      $(this).closest('.nav__dropdown-list').next().find('.nav__dropdown-item[data-sublist=' + data + ']').addClass('active');
    });
    $('.js-header').mouseleave(function () {
      $('.nav__dropdown').slideUp(0);
      $('.js-nav-sublist').removeClass('nav__item_active');
      $('.nav__dropdown-list li a').removeClass('active');
      $('.nav__dropdown-item').removeClass('active');
    });
    $('.nav__item:not(".js-nav-sublist")').mouseover(function () {
      $('.js-nav-sublist').removeClass('nav__item_active').find('.nav__dropdown').slideUp(0);
      $('.nav__dropdown-list li a').removeClass('active');
      $('.nav__dropdown-item').removeClass('active');
    });
    $(document).mouseover(function (e) {
      var target = e.target;
      if (!target.closest('.nav__item')) {
        $('.js-nav-sublist').removeClass('nav__item_active').find('.nav__dropdown').slideUp(0);
        $('.nav__dropdown-list li a').removeClass('active');
        $('.nav__dropdown-item').removeClass('active');
      }
    });
  } else if ($(window).width() <= 1279) {
    $('.js-nav-sublist').find('.nav__link_dropdown').click(function (e) {
      e.preventDefault();
      $(this).closest('.js-nav-sublist').siblings().removeClass('nav__item_active').find('.nav__dropdown').slideUp();
      $(this).closest('.js-nav-sublist').toggleClass('nav__item_active').find('.nav__dropdown').slideToggle();
    });
    $('.js-nav-sublink').click(function (e) {
      e.preventDefault();
      $('.js-nav-sublink').not(this).removeClass('active').next().slideUp();
      $(this).toggleClass('active').next().slideToggle();
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/news-detail/news-detail.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/news-detail/news-detail.js ***!
  \*******************************************************/
/***/ (() => {

$(function () {
  var checker;
  var padding = 20;
  $('.js-news-detail-side-link').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    var headerHeight = $('.js-header').outerHeight();
    checker = 0;
    $('.js-news-detail-side-link').removeClass('news-detail__side-link_active');
    $(this).addClass('news-detail__side-link_active');
    $('html').animate({
      scrollTop: top - (headerHeight + padding)
    }, 1000);
    setTimeout(function () {
      checker = 1;
    }, 1000);
  });
  $(window).scroll(function () {
    var $anchor = $('.js-anchor');
    var scroll = $(window).scrollTop();
    var headerHeight = $('.js-header').outerHeight();
    $anchor.each(function (i, el) {
      var top = $(el).offset().top - headerHeight;
      var bottom = top + $(el).outerHeight();
      var id = $(el).attr('id');
      if (scroll > top && scroll < bottom && checker != 0) {
        $('.js-news-detail-side-link').removeClass('news-detail__side-link_active');
        $('.js-news-detail-side-link[href="#' + id + '"]').addClass('news-detail__side-link_active');
      }
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/range/range.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/range/range.js ***!
  \*******************************************/
/***/ (() => {

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
$(function () {
  var range = $('.js-range');
  createRangeSlider(range);
  $('.range-input').on('keydown', function (e) {
    if (e.key.length == 1 && e.key.match(/[^0-9'".]/)) {
      return false;
    }
    ;
  });
  function createRangeSlider(range) {
    if (!range.length) return;
    var rangeInput = range.find('.range-input');
    var clean = function clean(num) {
      return num.toString().replace(/[^0-9]/g, '');
    };
    var bitDepth = function bitDepth(str) {
      return str.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };
    var formatter = function formatter(that) {
      return that.val(bitDepth(clean(that.val())));
    };
    var useInput = function useInput(input) {
      return [input.val(), input.data('max'), input.data('min')];
    };
    rangeInput.on('change', function (e) {
      var input = $(e.target);
      var keyCode = e.keyCode;
      var _useInput = useInput(input),
        _useInput2 = _slicedToArray(_useInput, 3),
        value = _useInput2[0],
        maxVal = _useInput2[1],
        minVal = _useInput2[2];
      var rangeLimit = function rangeLimit() {
        return +clean(value) < +minVal && keyCode !== 8 ? minVal : +clean(value) > +maxVal && keyCode !== 8 ? maxVal : value;
      };
      input.filter('.range-input-min').val(rangeLimit());
      input.filter('.range-input-max').val(rangeLimit());
      formatter(input);
    });
    rangeInput.each(function (_, r) {
      return formatter($(r));
    });
    var useFields = function useFields(range) {
      return [range.find('.range-input-min'), range.find('.range-input-max'), range.find('.range-slider')[0]];
    };
    var useRange = function useRange(min, max) {
      var maxVal = !max.val() || max.val() === '0' ? max.data('max') : max.val();
      return [{
        val: +clean(min.val()),
        min: +min.data('min'),
        max: +min.data('max')
      }, {
        val: +clean(maxVal),
        min: +max.data('min'),
        max: +max.data('max')
      }];
    };
    range.each(function (_, range) {
      var $that = $(range);
      var _useFields = useFields($that),
        _useFields2 = _slicedToArray(_useFields, 3),
        $min = _useFields2[0],
        $max = _useFields2[1],
        slider = _useFields2[2];
      var _useRange = useRange($min, $max),
        _useRange2 = _slicedToArray(_useRange, 2),
        from = _useRange2[0],
        to = _useRange2[1];
      noUiSlider.create(slider, {
        start: [from.val, to.val],
        connect: true,
        // tooltips: {
        // 	to: num => bitDepth(clean(Math.round(num)))
        // },

        format: {
          from: Number,
          to: function to(val) {
            return bitDepth(clean(Math.round(val)));
          }
        },
        range: {
          'min': from.min,
          'max': to.max
        }
      });
      slider.noUiSlider.on('update', function (val, handle) {
        var value = val[handle];
        if (handle === 0) {
          var slideLimit = clean(+clean(value) > from.max ? from.max : value);
          // slider.noUiSlider.set([slideLimit, null])
          $min.val(bitDepth(slideLimit)).trigger('update');
        }
        if (handle === 1) {
          var _slideLimit = clean(+clean(value) < to.min ? to.min : value);
          // slider.noUiSlider.set([null, slideLimit])
          $max.val(bitDepth(_slideLimit)).trigger('update');
        }
      });
      slider.noUiSlider.on('change', function (val, handle) {
        var value = val[handle];
        if (handle === 0) {
          var slideLimit = clean(+clean(value) > from.max ? from.max : value);
          slider.noUiSlider.set([slideLimit, null]);
          $min.val(bitDepth(slideLimit)).trigger('change');
        }
        if (handle === 1) {
          var _slideLimit2 = clean(+clean(value) < to.min ? to.min : value);
          slider.noUiSlider.set([null, _slideLimit2]);
          $max.val(bitDepth(_slideLimit2)).trigger('change');
        }
      });
      $min.on('change', function (e) {
        return slider.noUiSlider.set([clean(e.target.value), null]);
      });
      $max.on('change', function (e) {
        return slider.noUiSlider.set([null, clean(e.target.value)]);
      });
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/select2/select2.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/select2/select2.js ***!
  \***********************************************/
/***/ (() => {

$(function () {
  var $select2 = $('.js-select2');
  var $multiple = $select2.filter('[multiple]');
  var $select2Price = $select2.filter('.select2_price');
  $select2.select2({
    allowClear: true,
    width: '100%'
  });
  $select2.on('select2:selecting', function (e) {
    $(this).parent().addClass('select2-block_active');
  });
  $multiple.select2({
    allowClear: true,
    width: '100%',
    closeOnSelect: false
  }).each(function (_, select) {
    var $select = $(select);
    multipleChangeCallback($select);
    replaceInputToDiv($select.next());
  });
  $multiple.on('change.select2', function (e) {
    return multipleChangeCallback($(e.currentTarget));
  });
  function chooseTemplate(name, amount) {
    return "\n      <li class=\"select2-selection__display\">\n        <div class=\"select2-selection__display-name\">\n          ".concat(name, "\n        </div>\n        <div class=\"select2-selection__display-amount\">\n          (").concat(amount, ")\n        </div>\n      </li>\n    ");
  }
  function replaceInputToDiv(select) {
    var element = select.find('.select2-search .select2-search__field');
    var placeholder = element.attr('placeholder');
    element.replaceWith("<div class='select2-search__field'>".concat(placeholder, "</div>"));
  }
  function multipleChangeCallback(that) {
    var _that$data = that.data(),
      placeholder = _that$data.placeholder;
    var val = that.val();
    var select2 = that.next().find('.select2-selection.select2-selection--multiple');
    var selectRender = select2.find('.select2-selection__rendered');
    selectRender.find('.select2-selection__choice, .select2-selection__display').remove();
    if (!!val.length && !!val.join('')) {
      select2.addClass('is-selected');
      selectRender.append(chooseTemplate(placeholder, val.length));
      return;
    }
    select2.removeClass('is-selected').closest('.select2-block').removeClass('select2-block_active').end().find('.select2-search__field').text(placeholder);
    that.val([]);
  }
  $.each($multiple, function () {
    $(this).data().select2.$dropdown.addClass('select2-dropdown_multiple');
  });
  $.each($select2Price, function () {
    $(this).data().select2.$dropdown.addClass('select2-dropdown_price');
  });
});

/***/ }),

/***/ "./src/blocks/modules/slider/slider.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/slider/slider.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  var cardSlider = new Swiper('.js-card-slider', {
    pagination: {
      el: '.card-pagination'
    },
    on: {
      init: function init() {
        var speed = $(window).width() > 1279 ? 0 : 1200;
        this.params.speed = speed;
      }
    }
  });
  if (cardSlider && $(window).width() > 1279) {
    var tempCardSlider = cardSlider.length ? cardSlider : [cardSlider];
    tempCardSlider.forEach(function (element) {
      var pagination = element.pagination.bullets;
      $(pagination).hover(function () {
        var index = $(this).index();
        element.slideTo(index);
      });
    });
  }
  $('.card').mouseleave(function () {
    $(this).find('.card__slider')[0].swiper.slideTo(0);
  });
  var newsSlider = new Swiper('.js-news-slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    speed: 1200,
    breakpoints: {
      768: {
        slidesPerView: 2.1,
        spaceBetween: 16
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 16
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    },
    navigation: {
      nextEl: '.news-button-next',
      prevEl: '.news-button-prev'
    }
  });
  var projectThumbs = new Swiper('.js-project-thumbs', {
    slidesPerView: 'auto',
    // spaceBetween: 8,
    watchSlidesProgress: true
  });
  var projectSlider = new Swiper('.js-project-slider', {
    // slidesPerView: 1,
    spaceBetween: 0,
    speed: 1200,
    thumbs: {
      swiper: projectThumbs
    }
  });
  var similarSlider = new Swiper('.js-similar-slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    speed: 1200,
    breakpoints: {
      768: {
        slidesPerView: 2.1,
        spaceBetween: 16
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 16
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    },
    navigation: {
      nextEl: '.similar-button-next',
      prevEl: '.similar-button-prev'
    }
  });
  var teamSlider = new Swiper('.js-team-slider', {
    slidesPerView: 1.01,
    spaceBetween: 8,
    speed: 1200,
    breakpoints: {
      768: {
        slidesPerView: 2.16,
        spaceBetween: 16
      },
      1280: {
        slidesPerView: 2.96,
        spaceBetween: 16
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    }
  });
  var offerSlider = new Swiper('.js-offer-slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    speed: 1200,
    breakpoints: {
      768: {
        slidesPerView: 2.1,
        spaceBetween: 16
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 16
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    },
    navigation: {
      nextEl: '.offer-button-next',
      prevEl: '.offer-button-prev'
    }
  });
  var completedProjectsSlider = new Swiper('.js-completed-projects-slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    speed: 1200,
    breakpoints: {
      768: {
        slidesPerView: 1.52,
        spaceBetween: 16
      },
      1280: {
        slidesPerView: 1.78,
        spaceBetween: 16
      },
      1600: {
        slidesPerView: 2.27,
        spaceBetween: 16
      }
    },
    navigation: {
      nextEl: '.completed-projects-button-next',
      prevEl: '.completed-projects-button-prev'
    }
  });
  var awardsSlider = new Swiper('.js-awards-slider', {
    slidesPerView: 1.03,
    spaceBetween: 8,
    speed: 1200,
    breakpoints: {
      768: {
        slidesPerView: 2.16,
        spaceBetween: 16
      },
      1280: {
        slidesPerView: 3.24,
        spaceBetween: 16
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/tab/tab.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/tab/tab.js ***!
  \***************************************/
/***/ (() => {

$(function () {
  $('.js-tab-item').click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass('tab__item_active');
    $(this).addClass('tab__item_active');
    var data = $(this).data('tab');
    $('.js-tab-content').removeClass('tab-content_active');
    $('.js-tab-content[data-tab=' + data + ']').addClass('tab-content_active');
  });
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_nav_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/nav/nav */ "./src/blocks/modules/nav/nav.js");
/* harmony import */ var _modules_nav_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_nav_nav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_slider_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_form_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_select2_select2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/select2/select2 */ "./src/blocks/modules/select2/select2.js");
/* harmony import */ var _modules_select2_select2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_select2_select2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_range_range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/range/range */ "./src/blocks/modules/range/range.js");
/* harmony import */ var _modules_range_range__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_range_range__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_tab_tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/tab/tab */ "./src/blocks/modules/tab/tab.js");
/* harmony import */ var _modules_tab_tab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_tab_tab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/catalog/catalog */ "./src/blocks/modules/catalog/catalog.js");
/* harmony import */ var _modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_animate_text_animate_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/animate-text/animate-text */ "./src/blocks/modules/animate-text/animate-text.js");
/* harmony import */ var _modules_animate_text_animate_text__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_animate_text_animate_text__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_advantages_advantages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/advantages/advantages */ "./src/blocks/modules/advantages/advantages.js");
/* harmony import */ var _modules_advantages_advantages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_advantages_advantages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_news_detail_news_detail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/news-detail/news-detail */ "./src/blocks/modules/news-detail/news-detail.js");
/* harmony import */ var _modules_news_detail_news_detail__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_news_detail_news_detail__WEBPACK_IMPORTED_MODULE_10__);












// import "%modules%/modal/modal";
// import "%modules%/file/file";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map