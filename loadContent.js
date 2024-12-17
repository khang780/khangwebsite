function loadHTML() {
    // Load Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('nav').innerHTML = data; // Load header into the <nav> section
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data; // Load footer into the <footer> section
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Call the function to load content after the page loads
window.onload = loadHTML;

// loadContent.js

// Function to load footer content from an external HTML file
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Load footer when the page is ready
loadFooter();
