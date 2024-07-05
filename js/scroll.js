window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.padding = "5px 0";
  } else {
    document.getElementById("header").style.padding = "10px 0";
  }
}
