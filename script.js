
const link = document.getElementById('trigger-link');
const image = document.getElementById('image');

// Add an event listener to the link to trigger the animation when clicked
link.addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default link behavior
    image.classList.add('image-visible');  // Add the class to start the animation
});

