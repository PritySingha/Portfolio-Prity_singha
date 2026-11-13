// --- 1. Theme Toggle (Professional Switch) ---
const themeSwitch = document.getElementById('checkbox');
const body = document.body;

// Check local storage for theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.setAttribute('data-bs-theme', 'dark');
  themeSwitch.checked = true;
} else {
  body.setAttribute('data-bs-theme', 'light');
  themeSwitch.checked = false;
}

// Listen for switch changes
themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    body.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.setAttribute('data-bs-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// --- 2. Simple Custom Cursor ---
// ... (Keep the rest of your script.js exactly the same) ...

// --- 2. Simple Custom Cursor ---
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px'; 
  cursor.style.top = e.clientY + 'px';
});

// Expand cursor on hoverable elements
document.querySelectorAll('a, button, .project-card, .masonry-item').forEach(link => {
  link.addEventListener('mouseenter', () => cursor.classList.add('expand'));
  link.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
});

// --- 3. Magnetic Buttons ---
const magneticBtns = document.querySelectorAll('.magnetic');
magneticBtns.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
  btn.addEventListener('mouseleave', () => btn.style.transform = `translate(0px, 0px)`);
});

// --- 4. Scroll Reveal Animations ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { 
        entry.target.classList.add('active'); 
        revealObserver.unobserve(entry.target); 
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// --- 5. Dynamic Project Rendering & Slideshow ---
const projectGrid = document.getElementById('project-grid');

function renderProjects(filter = 'all') {
    projectGrid.innerHTML = ''; 
    const filteredData = filter === 'all' ? portfolioData : portfolioData.filter(p => p.category === filter);

    filteredData.forEach((project) => {
        const firstImage = project.slides && project.slides.length > 0 ? project.slides[0] : project.coverImage;
        
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 project-item reveal active';
        
        col.innerHTML = `
            <div class="project-card h-100 d-flex flex-column" data-tilt data-tilt-max="10" data-tilt-glare="true" data-tilt-max-glare="0.1">
                <div class="project-image-container" data-id="${project.id}">
                    <img src="${firstImage}" alt="${project.title}" class="project-image-main" id="img-${project.id}">
                    <div class="hover-indicator"><i class="fas fa-play"></i> Preview</div>
                </div>
                <div class="project-body d-flex flex-column flex-grow-1 mt-3">
                    <p class="text-primary font-body small mb-2">${project.categoryLabel}</p>
                    <h3 class="project-title font-display mb-3">${project.title}</h3>
                    <p class="project-description font-body text-muted mb-4">${project.description}</p>
                    
                    <div class="tech-stack mb-4 font-body mt-auto">
                        ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                    </div>
                    <div class="project-actions">
                        <button class="btn btn-primary btn-sm magnetic view-details w-100" data-id="${project.id}">View Details</button>
                    </div>
                </div>
            </div>
        `;
        projectGrid.appendChild(col);
    });

    VanillaTilt.init(document.querySelectorAll(".project-card"));
    attachProjectEvents();
}

function attachProjectEvents() {
    document.querySelectorAll('.project-image-container').forEach(container => {
        const projectId = container.getAttribute('data-id');
        const project = portfolioData.find(p => p.id === projectId);
        const imgElement = document.getElementById(`img-${projectId}`);
        let slideInterval;
        let currentSlide = 0;

        container.addEventListener('mouseenter', () => {
            if (project.slides && project.slides.length > 1) {
                slideInterval = setInterval(() => {
                    currentSlide = (currentSlide + 1) % project.slides.length;
                    imgElement.style.opacity = 0;
                    setTimeout(() => {
                        imgElement.src = project.slides[currentSlide];
                        imgElement.style.opacity = 1;
                    }, 200); 
                }, 1500); 
            }
        });

        container.addEventListener('mouseleave', () => {
            clearInterval(slideInterval);
            currentSlide = 0;
            imgElement.src = project.slides[0]; 
        });
        
        container.addEventListener('click', () => openProjectModal(projectId));
    });

    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openProjectModal(btn.getAttribute('data-id'));
        });
    });
}

function openProjectModal(id) {
    const project = portfolioData.find(p => p.id === id);
    const modalBody = document.getElementById('modal-body-content');
    
    modalBody.innerHTML = `
        <h2 class="font-display mb-2">${project.title}</h2>
        <p class="text-primary font-body mb-4">${project.categoryLabel}</p>
        
        <img src="${project.coverImage}" class="img-fluid rounded mb-4" alt="${project.title}">
        
        <h5 class="font-display mt-4">Overview</h5>
        <p class="text-muted font-body mb-4">${project.description}</p>
        
        <h5 class="font-display">Problem Statement</h5>
        <p class="text-muted font-body mb-4">${project.problem}</p>
        
        <h5 class="font-display">Key Features</h5>
        <ul class="text-muted font-body mb-4">
            ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>

        <h5 class="font-display">Technologies</h5>
        <div class="tech-stack mb-4 font-body">
            ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
        </div>

        <div class="d-flex gap-3 mt-4">
            <a href="${project.github}" target="_blank" class="btn btn-custom btn-outline w-100">GitHub Repo</a>
            ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank" class="btn btn-custom btn-primary w-100">Live Demo</a>` : ''}
        </div>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
}

// --- 6. Filtering ---
document.querySelectorAll('.btn-filter').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderProjects(button.dataset.filter);
    });
});

// --- 7. Contact Form Submission ---
document.getElementById("contactForm")?.addEventListener("submit", async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });
  if (response.ok) {
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("errorMessage").style.display = "none";
    form.reset();
  } else {
    document.getElementById("errorMessage").style.display = "block";
    document.getElementById("successMessage").style.display = "none";
  }
});

// --- 8. Dynamic Creative Gallery Rendering ---
function renderCreative() {
    const creativeGrid = document.getElementById('creative-grid');
    if (!creativeGrid) return;

    creativeGrid.innerHTML = '';

    creativeData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'masonry-item';
        div.setAttribute('data-id', item.id);
        
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="overlay"><span>${item.category}</span></div>
        `;

        // Add click event to open lightbox
        div.addEventListener('click', () => {
            document.getElementById('creative-modal-image').src = item.image;
            document.getElementById('creative-modal-title').textContent = item.title;
            document.getElementById('creative-modal-category').textContent = item.category;
            document.getElementById('creative-modal-software').textContent = `Designed using ${item.software}`;
            
            const modal = new bootstrap.Modal(document.getElementById('creativeModal'));
            modal.show();
        });

        creativeGrid.appendChild(div);
    });
}

// --- 9. Dynamic Creative Category Rendering ---

function createSlideshow(containerId, imagesArray, modalTitle, modalCategory) {
    const container = document.getElementById(containerId);
    if (!container || imagesArray.length === 0) return;

    const imgElement = container.querySelector('.creative-image');
    imgElement.src = imagesArray[0]; // Set first image

    let slideInterval;
    let currentSlide = 0;

    // Hover Slideshow Logic
    container.addEventListener('mouseenter', () => {
        if (imagesArray.length > 1) {
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % imagesArray.length;
                imgElement.style.opacity = 0;
                setTimeout(() => {
                    imgElement.src = imagesArray[currentSlide];
                    imgElement.style.opacity = 1;
                }, 200);
            }, 1200); // Changes image every 1.2 seconds
        }
    });

    container.addEventListener('mouseleave', () => {
        clearInterval(slideInterval);
        currentSlide = 0;
        imgElement.src = imagesArray[0]; // Reset
    });

    // Click to open full lightbox (shows the first image)
    container.addEventListener('click', () => {
        document.getElementById('creative-modal-image').src = imagesArray[0];
        document.getElementById('creative-modal-title').textContent = modalTitle;
        document.getElementById('creative-modal-category').textContent = modalCategory;
        document.getElementById('creative-modal-software').textContent = "Designed using Canva / Figma";
        
        const modal = new bootstrap.Modal(document.getElementById('creativeModal'));
        modal.show();
    });
}

// --- 9. Dynamic Creative Category Rendering ---

function createSlideshow(containerId, imagesArray) {
    const container = document.getElementById(containerId);
    if (!container || imagesArray.length === 0) return;

    const imgElement = container.querySelector('.creative-image');
    imgElement.src = imagesArray[0]; 

    let slideInterval;
    let currentSlide = 0;

    // Hover Slideshow Logic (Still works on the main cards)
    container.addEventListener('mouseenter', () => {
        if (imagesArray.length > 1) {
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % imagesArray.length;
                imgElement.style.opacity = 0;
                setTimeout(() => {
                    imgElement.src = imagesArray[currentSlide];
                    imgElement.style.opacity = 1;
                }, 200);
            }, 1200); 
        }
    });

    container.addEventListener('mouseleave', () => {
        clearInterval(slideInterval);
        currentSlide = 0;
        imgElement.src = imagesArray[0]; 
    });
}

// Helper to open the Gallery Modal
function openGalleryModal(title, imagesArray) {
    document.getElementById('gallery-modal-title').textContent = title;
    const modalBody = document.getElementById('gallery-modal-body');
    modalBody.innerHTML = ''; // Clear previous

    imagesArray.forEach(imgSrc => {
        modalBody.innerHTML += `
            <div class="col-md-4 col-sm-6">
                <div class="gallery-modal-item">
                    <img src="${imgSrc}" class="img-fluid rounded" alt="${title} Image">
                </div>
            </div>
        `;
    });

    const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    modal.show();
}

function renderCreativeCategories() {
    // 1. Setup Posters
    createSlideshow('poster-card', posterData);
    document.getElementById('open-poster-modal').addEventListener('click', () => {
        openGalleryModal("Poster Design Collection", posterData);
    });

    // 2. Setup Invitations
    createSlideshow('invite-card', invitationData);
    document.getElementById('open-invite-modal').addEventListener('click', () => {
        openGalleryModal("Invitation Card Collection", invitationData);
    });

    // 3. Setup Presentations
    const pptCard = document.getElementById('presentation-card');
    const pptImg = document.getElementById('ppt-img');
    
    if (presentationsData.length > 0) {
        pptImg.src = presentationsData[0].cover; 
    }

    // Handle PPT Modal Content
    document.getElementById('open-ppt-modal').addEventListener('click', () => {
        const modalBody = document.getElementById('presentation-modal-body');
        modalBody.innerHTML = ''; 

        presentationsData.forEach(ppt => {
            modalBody.innerHTML += `
                <div class="ppt-list-item">
                    <img src="${ppt.cover}" class="ppt-cover" alt="${ppt.title}">
                    <div class="flex-grow-1">
                        <h5 class="font-display mb-1">${ppt.title}</h5>
                        <p class="text-muted small mb-0">${ppt.description}</p>
                    </div>
                    <!-- CHANGED: Now it's a View (Eye) icon instead of Download -->
                    <a href="${ppt.file}" target="_blank" class="btn btn-primary btn-sm rounded-circle" style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;" title="View Presentation">
                        <i class="fas fa-eye"></i>
                    </a>
                </div>
            `;
        });

        const modal = new bootstrap.Modal(document.getElementById('presentationModal'));
        modal.show();
    });
}


// Update your Initial Render line at the very bottom to include this:
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    renderCreativeCategories(); // <-- Replace renderCreative() with this
});



