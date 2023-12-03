document.addEventListener('DOMContentLoaded', () => {
    const themeSwitchCheckbox = document.getElementById('theme-switch-checkbox');
    const themeTextElement = document.querySelector('.theme-label');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeSwitchCheckbox.checked = currentTheme === 'dark-mode';
        themeTextElement.textContent = currentTheme === 'dark-mode' ? 'Dark Theme' : 'Light Theme';
    }

    themeSwitchCheckbox.addEventListener('change', function(event) {
        console.log("Toggling dark mode");
        if (event.target.checked) {
            themeTextElement.textContent = 'Dark Theme';
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            themeTextElement.textContent = 'Light Theme';
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
