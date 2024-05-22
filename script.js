// Japjot Singh 100873259
// description

window.onload = function() {
    // reference the object content - svg file
    const theSVG = document.getElementById('obj').contentDocument;

}
window.addEventListener('scroll', function() {
    const video = document.getElementById('videosrc');
    const scrollY = window.scrollY; // Get the vertical scroll position
    const maxScroll = document.body.scrollHeight - window.innerHeight; // Calculate the max scroll value
    const scaleFactor = 0.2; // The amount to scale up (100vw - 80vw = 20vw, which is 0.2 of 100vw)
    
    // Calculate the new width based on scroll position
    const newWidth = 80 + (scrollY / maxScroll) * 20;
    video.style.width = `${newWidth}vw`;
  });

