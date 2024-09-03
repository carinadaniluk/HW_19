$(".themeChange").on("click", function(){
    if ($(this).hasClass("light-mode")) {
        $("#stylesheet").attr("href", "./css/style.css")
    }
    else if ($(this).hasClass("dark-mode")) {
        $("#stylesheet").attr("href", "./css/darkmode.css")
    }
})
// dark mode
$(".themeChange").on("click", function(){
    if ($(this).hasClass("light-mode")) {
        $("#stylesheet").attr("href", "./css/style.css")
    }
    else if ($(this).hasClass("dark-mode")) {
        $("#stylesheet").attr("href", "./css/darkmode.css")
    }
})

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
