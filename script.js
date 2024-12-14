// Select the dark mode and light mode buttons
const darkModeButton = document.getElementById('dark-btn');
const lightModeButton = document.getElementById('light-btn');

// Function to enable dark mode
function enableDarkMode() {
    document.body.style.backgroundImage = "url('4.jpg')"; // Set background to black
    document.body.style.color = '#FFFFFF'; // Set text color to white

    // Update links, borders, and other elements as needed
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = '#FFD700'; // Golden text for links in dark mode
    });

    const borders = document.querySelectorAll('th, td, aside, #about-me');
    borders.forEach(element => {
        element.style.borderColor = '#FFD700'; // White borders for table and aside
        element.style.color = 'black';
    });

    const tableText = document.querySelectorAll('th');
    tableText.forEach(element => {
        element.style.color = 'white';
    })
}

// Function to enable light mode
function enableLightMode() {
  document.body.style.backgroundImage = "url('S.jpg')"; // Revert background color
    document.body.style.color = ''; // Revert text color

    // Reset styles for links, borders, and other elements
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = ''; // Revert link colors
    });

    const borders = document.querySelectorAll('th, td, aside, #about-me');
    borders.forEach(element => {
        element.style.borderColor = ''; // Revert border colors
    });
}

// Attach event listeners to the buttons
darkModeButton.addEventListener('click', enableDarkMode);
lightModeButton.addEventListener('click', enableLightMode);