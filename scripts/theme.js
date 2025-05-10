// theme.js
export function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // System preference fallback
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (systemPrefersDark ? 'dark' : 'light');
    
    body.setAttribute('data-bs-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';

    themeToggle.addEventListener('change', function() {
        const theme = this.checked ? 'dark' : 'light';
        body.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update dynamic colors
        updateThemeDependentElements(theme);
    });
}

function updateThemeDependentElements(theme) {
    const accentColor = theme === 'dark' ? '#64ffda' : '#4a90e2';
    document.documentElement.style.setProperty('--dynamic-accent', accentColor);
}