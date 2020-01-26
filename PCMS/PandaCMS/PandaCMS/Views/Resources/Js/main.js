var CRUMINA = {};
! function (e) {
    "use strict";
    var i = e(window),
        t = e(document),
        a = e("body"),
        n = {},
        s = e("#site-header"),
        o = e("#site-footer"),
        r = e(".counter"),
        c = e(".countdown-timer"),
        l = e(".skills-item"),
        d = e("#primary-menu"),
        u = e("#hellopreloader"),
        p = e(".cd-overlay-nav"),
        f = e(".cd-overlay-content");
    CRUMINA.layerInit = function () {
        var i = 2 * Math.sqrt(Math.pow(e(window).height(), 2) + Math.pow(e(window).width(), 2));
        p.children("span").velocity({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0
        }, 50).velocity({
            height: i + "px",
            width: i + "px",
            top: -i / 2 + "px",
            left: -i / 2 + "px"
        }, 0), f.children("span").velocity({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0
        }, 50).velocity({
            height: i + "px",
            width: i + "px",
            top: -i / 2 + "px",
            left: -i / 2 + "px"
        }, 0)
    }, CRUMINA.fixedHeader = function () {
        s.headroom({
            offset: 210,
            tolerance: 5,
            classes: {
                initial: "animated",
                pinned: "slideDown",
                unpinned: "slideUp"
            }
        })
    }, CRUMINA.parallaxFooter = function () {
        o.length && o.hasClass("js-fixed-footer") && (o.before('<div class="block-footer-height"></div>'), e(".block-footer-height").matchHeight({
            target: o
        }))
    }, CRUMINA.preloader = function () {
        return i.scrollTop(0), setTimeout(function () {
            u.fadeOut(800)
        }, 500), !1
    };
    new SmoothScroll('a[href*="#"]', {
        ignore: "[data-toggle]",
        offset: 40
    });
    CRUMINA.counters = function () {
        r.length && r.each(function () {
            jQuery(this).waypoint(function () {
                e(this.element).find("span").countTo(), this.destroy()
            }, {
                offset: "95%"
            })
        })
    }, CRUMINA.countdown = function () {
        c.length && c.each(function () {
            var i = e(this),
                t = i.data("countdown");
            i.countdown(t).on("update.countdown", function (e) {
                i.html(e.strftime('<div class="column"><div class="text">DAY%!d</div><div class="timer">%D</div></div><div class="timer">:</div><div class="column"><div class="text">HRS</div><div class="timer">%H</div></div><div class="timer">:</div><div class="column"><div class="text">MIN</div><div class="timer">%M</div></div><div class="timer">:</div><div class="column"><div class="text">SEC</div><div class="timer">%S</div></div>'))
            })
        })
    }, CRUMINA.progresBars = function () {
        l.length && l.each(function () {
            jQuery(this).waypoint(function () {
                e(this.element).find(".count-animate").countTo(), e(this.element).find(".skills-item-meter-active").fadeTo(300, 1).addClass("skills-animate"), this.destroy()
            }, {
                offset: "90%"
            })
        })
    }, CRUMINA.toggleSearch = function () {
        e(".search-popup").toggleClass("open"), e(".search-full-screen input").focus()
    }, CRUMINA.mediaPopups = function () {
        e(".js-popup-iframe").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }), e(".js-zoom-image, .link-image").magnificPopup({
            type: "image",
            removalDelay: 500,
            callbacks: {
                beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = "mfp-zoom-in"
                }
            },
            closeOnContentClick: !0,
            midClick: !0
        })
    }, CRUMINA.equalHeight = function () {
        e(".js-equal-child").find(".theme-module").matchHeight({
            property: "min-height"
        })
    }, CRUMINA.rangeSlider = function () {
        e(".range-slider-js").ionRangeSlider({
            type: "double",
            grid: !0,
            min: 0,
            max: 1e3,
            from: 200,
            to: 800,
            prefix: "$"
        })
    }, CRUMINA.IsotopeSort = function () {
        e(".sorting-container").each(function () {
            var i = e(this),
                t = i.data("layout").length ? i.data("layout") : "masonry";
            i.isotope({
                itemSelector: ".sorting-item",
                layoutMode: t,
                percentPosition: !0
            }), i.imagesLoaded().progress(function () {
                i.isotope("layout")
            }), i.siblings(".sorting-menu").find("li").on("click", function () {
                if (e(this).hasClass("active")) return !1;
                e(this).parent().find(".active").removeClass("active"), e(this).addClass("active");
                var t = e(this).data("filter");
                return void 0 !== t ? (i.isotope({
                    filter: t
                }), !1) : void 0
            })
        })
    }, CRUMINA.initSwiper = function () {
        var i = 0;
        e(".swiper-container").each(function () {
            var t = e(this),
                a = "swiper-unique-id-" + i,
                s = !1;
            t.addClass("swiper-" + a + " initialized").attr("id", a), t.closest(".crumina-module").find(".swiper-pagination").addClass("pagination-" + a);
            var o = t.data("effect") ? t.data("effect") : "slide",
                r = !t.data("crossfade") || t.data("crossfade"),
                c = 0 != t.data("loop") || t.data("loop"),
                l = t.data("show-items") ? t.data("show-items") : 1,
                d = t.data("scroll-items") ? t.data("scroll-items") : 1,
                u = t.data("direction") ? t.data("direction") : "horizontal",
                p = !!t.data("mouse-scroll") && t.data("mouse-scroll"),
                f = t.data("autoplay") ? parseInt(t.data("autoplay"), 10) : 0,
                m = !!t.hasClass("auto-height"),
                h = !!t.data("nospace") && t.data("nospace"),
                g = !!t.data("centered-slider") && t.data("centered-slider"),
                v = t.data("stretch") ? t.data("stretch") : 0,
                y = t.data("depth") ? t.data("depth") : 0,
                w = l > 1 && 1 != h ? 20 : 0;
            l > 1 && (s = {
                480: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                }
            }), n["swiper-" + a] = new Swiper(".swiper-" + a, {
                pagination: ".pagination-" + a,
                paginationClickable: !0,
                direction: u,
                mousewheelControl: p,
                mousewheelReleaseOnEdges: p,
                slidesPerView: l,
                slidesPerGroup: d,
                spaceBetween: w,
                keyboardControl: !0,
                setWrapperSize: !0,
                preloadImages: !0,
                updateOnImagesReady: !0,
                centeredSlides: g,
                autoplay: f,
                autoHeight: m,
                loop: c,
                breakpoints: s,
                effect: o,
                fade: {
                    crossFade: r
                },
                parallax: !0,
                onImagesReady: function (e) {},
                coverflow: {
                    stretch: v,
                    rotate: 0,
                    depth: y,
                    modifier: 2,
                    slideShadows: !1
                },
                onSlideChangeStart: function (e) {
                    if (t.closest(".crumina-module").find(".slider-slides").length) {
                        t.closest(".crumina-module").find(".slider-slides .slide-active").removeClass("slide-active");
                        var i = e.slides.eq(e.activeIndex).attr("data-swiper-slide-index");
                        t.closest(".crumina-module").find(".slider-slides .slides-item").eq(i).addClass("slide-active")
                    }
                }
            }), i++
        }), e(".btn-prev").on("click", function () {
            var i = e(this).closest(".crumina-module-slider").find(".swiper-container").attr("id");
            n["swiper-" + i].slidePrev()
        }), e(".btn-next").on("click", function () {
            var i = e(this).closest(".crumina-module-slider").find(".swiper-container").attr("id");
            n["swiper-" + i].slideNext()
        }), e(".slider-slides .slides-item").on("click", function (i) {
            i.preventDefault();
            var t = e(this).closest(".crumina-module-slider").find(".swiper-container").attr("id");
            if (e(this).hasClass("slide-active")) return !1;
            var a = e(this).parent().find(".slides-item").index(this);
            return n["swiper-" + t].slideTo(a + 1), e(this).parent().find(".slide-active").removeClass("slide-active"), e(this).addClass("slide-active"), !1
        })
    }, CRUMINA.burgerAnimation = function () {
        function e(e) {
            e.draw("80% - 240", "80%", .3, {
                delay: .1,
                callback: function () {
                    i(e)
                }
            })
        }

        function i(e) {
            e.draw("100% - 545", "100% - 305", .6, {
                easing: ease.ease("elastic-out", 1, .3)
            })
        }

        function t(e) {
            e.draw(p - 60, f + 60, .1, {
                callback: function () {
                    a(e)
                }
            })
        }

        function a(e) {
            e.draw(p + 120, f - 120, .3, {
                easing: ease.ease("bounce-out", 1, .3)
            })
        }

        function n(e) {
            e.draw("90% - 240", "90%", .1, {
                easing: ease.ease("elastic-in", 1, .3),
                callback: function () {
                    s(e)
                }
            })
        }

        function s(e) {
            e.draw("20% - 240", "20%", .3, {
                callback: function () {
                    o(e)
                }
            })
        }

        function o(e) {
            e.draw(d, u, .7, {
                easing: ease.ease("elastic-out", 1, .3)
            })
        }

        function r(e) {
            e.draw(p, f, .7, {
                delay: .1,
                easing: ease.ease("elastic-out", 2, .4)
            })
        }

        function c(e) {
            e.className = "menu-icon-wrapper scaled"
        }

        function l(e) {
            e.className = "menu-icon-wrapper"
        }
        var d = 80,
            u = 320,
            p = 80,
            f = 320,
            m = document.getElementById("pathD"),
            h = document.getElementById("pathE"),
            g = document.getElementById("pathF"),
            v = new Segment(m, d, u),
            y = new Segment(h, p, f),
            w = new Segment(g, d, u),
            C = document.getElementById("menu-icon-wrapper"),
            I = document.getElementById("menu-icon-trigger"),
            b = !0;
        C.style.visibility = "visible", I.onclick = function () {
            c(C), b ? (e(v), t(y), e(w)) : (n(v), r(y), n(w)), b = !b, setTimeout(function () {
                l(C)
            }, 450)
        }
    }, i.keydown(function (i) {
        27 == i.which && (a.removeClass("overlay-enable"), e(".search-standard").removeClass("open"), d.css({
            visibility: "visible"
        }), e("#menu-icon-trigger").css({
            opacity: "1"
        }), e(".top-bar").removeClass("open"))
    }), jQuery(".js-open-search-popup > *").on("click", function () {
        return CRUMINA.toggleSearch(), !1
    }), jQuery("#top-bar-js").on("click", function () {
        return e(".top-bar").addClass("open"), !1
    }), jQuery(".js-open-search-standard > *").on("click", function () {
        return d.find(".search-standard").addClass("open"), d.css({
            visibility: "hidden"
        }), e("#menu-icon-trigger").css({
            opacity: "0"
        }), setTimeout(function () {
            d.find(".search-input").focus()
        }, 100), !1
    }), jQuery(".js-search-close > *").on("click", function () {
        return d.find(".search-standard").removeClass("open"), d.css({
            visibility: "visible"
        }), e("#menu-icon-trigger").css({
            opacity: "1"
        }), !1
    }), jQuery("#top-bar-close-js").on("click", function () {
        return e(".top-bar").removeClass("open"), !1
    }), jQuery(".js-message-popup").on("click", function () {
        return setTimeout(function () {
            e(".message-popup").addClass("open")
        }, 300), !1
    }), jQuery(".js-popup-close").on("click", function () {
        return e(".search-popup").removeClass("open"), e(".message-popup").removeClass("open"), e(".popup-gallery").removeClass("open"), !1
    }), jQuery(".js-popup-clear-input").on("click", function () {
        e(".js-popup-clear-input").closest(".typeahead__field").find(".js-typeahead").val("").focus()
    }), jQuery(".accordion-heading").on("click", function () {
        jQuery(this).parents(".panel-heading").toggleClass("active"), jQuery(this).parents(".accordion-panel").toggleClass("active")
    }), jQuery(".back-to-top").on("click", function () {
        return e("html,body").animate({
            scrollTop: 0
        }, 1200), !1
    }), CRUMINA.typeAhead = function () {
        e(".js-typeahead").typeahead({
            order: "asc",
            source: {
                data: ["63 WordPress", "48 WordPress Plugins", "16 WordPress Theme", "2 WP Mobile App"]
            }
        })
    }, CRUMINA.formValidate = function () {
        e(".form-validate").parsley()
    }, t.ready(function () {
        jQuery(function () {
            jQuery(".social__item.main").hover(function () {
                jQuery(".social__item.main").siblings(".share-product").addClass("open")
            }), jQuery(".share-product").mouseleave(function () {
                jQuery(".share-product").removeClass("open")
            })
        }), jQuery(".js-pricing-switcher").on("click", function () {
            var i = e(this).prev().is(":checked");
            e(this).closest(".crumina-pricings").find(".price").each(function () {
                i ? e(this).text(e(this).data("annually")) : e(this).text(e(this).data("monthly"))
            })
        }), e(".js-typeahead").length && CRUMINA.typeAhead(), e("#menu-icon-wrapper").length && CRUMINA.burgerAnimation(), d.crumegamenu({
            showSpeed: 0,
            hideSpeed: 0,
            trigger: "hover",
            animation: "drop-up",
            effect: "fade",
            indicatorFirstLevel: "&#xf0d7",
            indicatorSecondLevel: "&#xf105"
        }), CRUMINA.fixedHeader(), CRUMINA.initSwiper(), CRUMINA.equalHeight(), CRUMINA.mediaPopups(), CRUMINA.IsotopeSort(), CRUMINA.parallaxFooter(), CRUMINA.rangeSlider(), e("select").niceSelect(), CRUMINA.layerInit(), CRUMINA.countdown(), CRUMINA.counters(), CRUMINA.progresBars(), CRUMINA.formValidate()
    }), e(window).on("resize", function () {
        window.requestAnimationFrame(CRUMINA.layerInit)
    })
}(jQuery);