const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Cargar tema guardado
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    if (themeIcon) themeIcon.textContent = '☀️';
}

// Escuchar el clic del botón
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if (themeIcon) themeIcon.textContent = isDark ? '☀️' : '🌙';
    });
}