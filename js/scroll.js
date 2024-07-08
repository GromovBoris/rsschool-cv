document.addEventListener("DOMContentLoaded", function () {
  let isScrolled = false;
  const img = document.getElementById("img");
  const header = document.getElementsByTagName("header")[0];
  const photo = document.getElementsByClassName("photo")[0];
  const calls = document.getElementsByClassName("calls")[0];

  window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY;
    console.log(scrollPos);

    if (scrollPos > 100 && !isScrolled) {
      img.style.width = "100px";
      img.style.height = "100px";
      img.style.boxShadow = "0 0 0 2px #fff";
      // header.style.height = "100px";
      header.style.alignItems = "center";
      photo.style.marginTop = "12.5px";
      calls.style.marginTop = "0px";
      calls.style.marginBottom = "0px";
      isScrolled = true;
    } else if (scrollPos <= 100 && isScrolled) {
      img.style.width = "150px";
      img.style.height = "150px";
      img.style.boxShadow = "0 0 0 5px #fff";
      // header.style.height = "200px";
      header.style.alignItems = "flex-start";
      photo.style.marginTop = "120px";
      calls.style.marginTop = "120px";
      calls.style.marginBottom = "20px";
      isScrolled = false;
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   let isScrolled = false;
//   const img = document.getElementById("img");
//   const header = document.getElementsByTagName("header")[0];
//   const photo = document.getElementsByClassName("photo")[0];
//   const calls = document.getElementsByClassName("calls")[0];
//   let timeout = null;

//   window.addEventListener("scroll", function () {
//     const scrollPos = window.scrollY;

//     if (timeout) {
//       clearTimeout(timeout);
//     }

//     timeout = setTimeout(function () {
//       if (scrollPos > 200 && !isScrolled) {
//         // img.style.width = "75px";
//         // img.style.height = "75px";
//         // img.style.boxShadow = "0 0 0 2px #fff";
//         // header.style.height = "100px";
//         header.style.alignItems = "center";
//         photo.style.marginTop = "12.5px";
//         calls.style.marginTop = "0px";
//         calls.style.marginBottom = "0px";
//         isScrolled = true;
//       } else if (scrollPos <= 200 && isScrolled) {
//         // img.style.width = "150px";
//         // img.style.height = "150px";
//         // img.style.boxShadow = "0 0 0 5px #fff";
//         // header.style.height = "200px";
//         header.style.alignItems = "flex-start";
//         photo.style.marginTop = "120px";
//         calls.style.marginTop = "120px";
//         calls.style.marginBottom = "20px";
//         isScrolled = false;
//       }
//     }, 10);
//   });
// });
