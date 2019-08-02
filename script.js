// Step 1:
// When Device reaches 600px, change Links to Display: None;
function hideLinks(links){
  var linksHTML = document.getElementsByClassName('links')[0];
  if(links.matches){
    linksHTML.style.display = "none";
  } else {
    linksHTML.style.display = "grid";
  }
}
var links =  window.matchMedia("(max-width: 992px)");
hideLinks(links);
links.addListener(hideLinks);


// Step 2:
// Add a div tag with class of .mobile above the links section



//
//
// Step 3:
// Apply these styling options to mobile
//
// Step 4:
// When the Contact button is clicked, show the 3 Links overlayed on the entire height of the screen
