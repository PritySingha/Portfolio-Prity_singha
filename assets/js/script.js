// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data-bs-theme', savedTheme);
}
// Toggle theme
themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  body.setAttribute('data-bs-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Project Filter Functionality
document.querySelectorAll('.btn-filter').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.btn-filter').forEach(btn => 
            btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter category
        const filter = button.dataset.filter;
        
        // Filter projects
        document.querySelectorAll('.project-item').forEach(project => {
            const category = project.dataset.category;
            if(filter === 'all' || category === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});