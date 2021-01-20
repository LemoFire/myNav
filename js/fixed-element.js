var nav = document.getElementById("paper-back").getElementsByTagName("nav")[0];
nav.innerHTML +=
  '\
<a href="./sign-up.html">Sign up</a>\
<a href="./login.html">Login</a>\
';
var b_nav = document.getElementById("bottom_nav").getElementsByTagName("ul")[0];
b_nav.innerHTML +=
  '\
<li class="nav-item"><a class="nav-link" href="./nav.html">iTo_Nav<span class="sr-only">(current)</span></a></li>\
<li class="nav-item"><a class="nav-link" href="./share.html">S_Share</a></li>\
<li class="nav-item dropup"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Sites</a>\
<div class="dropdown-menu" aria-labelledby="navbarDropdown1">\
<a class="dropdown-item" href="https://note.ito.fun">iNotes</a><a class="dropdown-item" href="https://www.ito.fun">iTo</a>\
<div class="dropdown-divider">\
</div>\
<a class="dropdown-item disabled" href="#">use Bandwagon Host</a>\
</div>\
</li>\
<li class="nav-item"><a class="nav-link" href="./about.html">About iTo</a></li>\
<li class="nav-item"><a class="nav-link disabled" href="https://www.google.com">Google</a></li>\
';
var footet = document.getElementById("footer");
footet.innerHTML +=
  '\
<p class="text-center small" style="color: gray;padding-bottom:66px;padding-top:5vh;">© 2018 iTo.Fun 1640915223 卢跃 16通信2</p>\
';

var paperMenu = {
  $window: $("#paper-window"),
  $paperFront: $("#paper-front"),
  $hamburger: $(".hamburger"),
  offset: 1800,
  pageHeight: $("#paper-front").outerHeight(),
  open: function () {
    this.$window.addClass("tilt");
    this.$hamburger.off("click");
    $("#container, .hamburger").on("click", this.close.bind(this));
    this.hamburgerFix(true);
    $("#hamburger").css({ visibility: "hidden" });
    // console.log('opening...');
  },
  close: function () {
    this.$window.removeClass("tilt");
    $("#container, .hamburger").off("click");
    this.$hamburger.on("click", this.open.bind(this));
    this.hamburgerFix(false);
    setTimeout(function () {
      $("#hamburger").css({ visibility: "visible" });
    }, 300);
    // console.log('closing...');
  },
  updateTransformOrigin: function () {
    scrollTop = this.$window.scrollTop();
    equation = ((scrollTop + this.offset) / this.pageHeight) * 100;
    this.$paperFront.css("transform-origin", "center " + equation + "%");
  },
  hamburgerFix: function (opening) {
    if (opening) {
      $(".hamburger").css({
        position: "absolute",
        top: this.$window.scrollTop() + 30 + "px",
      });
    } else {
      setTimeout(function () {
        $(".hamburger").css({
          position: "fixed",
          top: "30px",
        });
      }, 300);
    }
  },
  bindEvents: function () {
    this.$hamburger.on("click", this.open.bind(this));
    $(".close").on("click", this.close.bind(this));
    this.$window.on("scroll", this.updateTransformOrigin.bind(this));
  },
  init: function () {
    this.bindEvents();
    this.updateTransformOrigin();
  },
};
paperMenu.init();
