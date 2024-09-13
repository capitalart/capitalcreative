// Icons for sun and moon
const sunIcon = '<img src="icons/sun.svg" alt="Light Mode">';
const moonIcon = '<img src="icons/moon.svg" alt="Dark Mode">';

// Set up dark/light toggle buttons
const toggleThemeBtn = document.querySelectorAll('.toggle-theme');

// Toggle theme function
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update icons
    toggleThemeBtn.forEach(button => {
        button.innerHTML = newTheme === 'dark' ? sunIcon : moonIcon;
    });
}

// Set initial theme
window.onload = () => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', storedTheme);

    // Set initial icons
    toggleThemeBtn.forEach(button => {
        button.innerHTML = storedTheme === 'dark' ? sunIcon : moonIcon;
    });

    // Add event listener to toggle buttons
    toggleThemeBtn.forEach(button => {
        button.addEventListener('click', toggleTheme);
    });
};
