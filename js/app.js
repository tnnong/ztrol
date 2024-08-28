

  // Get the button
let scrollToTop = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };
document.getElementById("seeMore").addEventListener("click", scrollToDetail);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTop.classList.add('show');
  } else {
    scrollToTop.classList.remove('show');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  console.log('click');
}

function scrollToDetail() {
  window.scrollTo({ top: 730, behavior: 'smooth' });
}