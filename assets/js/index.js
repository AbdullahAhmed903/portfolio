

// smooth scroll
// $(document).ready(function(){
//     $(".navbar .nav-link").on('click', function(event) {

//         if (this.hash !== "") {

//             event.preventDefault();

//             var hash = this.hash;

//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 700, function(){
//                 window.location.hash = hash;
//             });
//         } 
//     });
// });

// protfolio filters
// $(window).on("load", function() {
//     var t = $(".portfolio-container");
//     t.isotope({
//         filter: ".new",
//         animationOptions: {
//             duration: 750,
//             easing: "linear",
//             queue: !1
//         }
//     }), $(".filters a").click(function() {
//         $(".filters .active").removeClass("active"), $(this).addClass("active");
//         var i = $(this).attr("data-filter");
//         return t.isotope({
//             filter: i,
//             animationOptions: {
//                 duration: 750,
//                 easing: "linear",
//                 queue: !1
//             }
//         }), !1
//     });
// });


let downloadCv=document.getElementById("download_cv")

downloadCv.addEventListener("click",()=>{
  window.open("https://ik.imagekit.io/abdullahAhmed/AbdullahAhmed-FlowCV-Resume-20240630.pdf?updatedAt=1725830599352")
})