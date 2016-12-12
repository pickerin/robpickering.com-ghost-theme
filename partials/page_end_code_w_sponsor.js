< script type = "text/javascript" > !
function(s) {
    "use strict";

    function e(s) {
        return new RegExp("(^|\s+)" + s + "(\s+|$)")
    }

    function n(s, e) {
        var n = a(s, e) ? c : t;
        n(s, e)
    }
    var a, t, c;
    "classList" in document.documentElement ? (a = function(s, e) {
        return s.classList.contains(e)
    }, t = function(s, e) {
        s.classList.add(e)
    }, c = function(s, e) {
        s.classList.remove(e)
    }) : (a = function(s, n) {
        return e(n).test(s.className)
    }, t = function(s, e) {
        a(s, e) || (s.className = s.className + " " + e)
    }, c = function(s, n) {
        s.className = s.className.replace(e(n), " ")
    });
    var i = {
        hasClass: a,
        addClass: t,
        removeClass: c,
        toggleClass: n,
        has: a,
        add: t,
        remove: c,
        toggle: n
    };
    "function" == typeof define && define.amd ? define(i) : s.classie = i
}(window);
!
function() {
    function e() {
        n()
    }

    function n() {
        d.addEventListener("click", t), i && i.addEventListener("click", t), o.addEventListener("click", function(e) {
            var n = e.target;
            u && n !== d && t()
        })
    }

    function t() {
        u ? classie.remove(c, "show-menu") : classie.add(c, "show-menu"), u = !u
    }
    var c = document.body,
        o = document.querySelector("#container"),
        d = document.getElementById("open-button"),
        i = document.getElementById("close-button"),
        u = !1;
    e()
}();

function _dmBootstrap(e) {
    var t = document.createElement("script");
    t.type = "text/javascript", t.async = !0, t.src = ("https:" == document.location.protocol ? "https://" : "http://") + e, (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t)
}

function _dmFollowup(e) {
    "undefined" == typeof DMAds && _dmBootstrap("cdn2.DeveloperMedia.com/a.min.js")
}

function showUnsponsored() {
    document.getElementById("message_contents").innerHTML = "<a href='/sponsorship'><strong>Sponsored by:</strong> I'm unsponsored today, click to learn more</a>", function() {
        _dmBootstrap("cdn1.DeveloperMedia.com/a.min.js"), setTimeout(_dmFollowup, 2e3)
    }()
}

function showSponsor(e) {
    document.getElementById("message_contents").innerHTML = '<a href="' + e.campaignUrl + '" target="_blank" rel="noopener"><strong>Sponsored by:</strong> ' + e.message + ' <i class="fa fa-external-link" aria-hidden="true"></i></a>', [].forEach.call(document.querySelectorAll(".ad"), function(e) {
        e.style.display = "none"
    })
}

var disqus_shortname = "robpickering";
!
function() {
    var e = document.createElement("script");
    e.async = !0, e.type = "text/javascript", e.src = "//" + disqus_shortname + ".disqus.com/count.js", (document.getElementsByTagName("HEAD")[0] || document.getElementsByTagName("BODY")[0]).appendChild(e)
}(); < /script>

