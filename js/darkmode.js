// Toggle dark/light mode
const toggleThemeBtn = document.querySelector('.toggle-theme');

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Set initial theme based on localStorage
window.onload = () => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', storedTheme);

    toggleThemeBtn.addEventListener('click', toggleTheme);
};
