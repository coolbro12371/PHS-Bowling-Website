function homePageClick(){
    window.location.replace("homepage.html");
}
// Get all elements with the class 'my-class'
const elements = document.querySelectorAll('.navTopBtn');

// Define the function to be executed when the event occurs
function handleClick(event) {
    window.location.href("pages/"+ event.target.value + ".html"); 
    // You can add more logic here based on the clicked element
}

// Iterate over each element and add the event listener
elements.forEach(element => {
  element.addEventListener('click', handleClick);
});
