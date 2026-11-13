# Prity Singha | Personal Portfolio

A fully responsive, dynamic, and highly customized personal portfolio built from scratch. This site showcases my journey as a Computer Science student, Full-Stack Developer, Machine Learning enthusiast, and Creative Designer.

🔗 **Live Demo:** [https://pritysingha.github.io/Portfolio-Prity_singha/](https://pritysingha.github.io/Portfolio-Prity_singha/)

---

## ✨ Key Features

*   **Data-Driven Architecture:** Projects, creative designs, and presentations are rendered dynamically from a central JavaScript file. Adding new content requires zero HTML changes.
*   **Custom Premium UI/UX:** Features a unique "Vintage Sage & Olive" color palette, custom cursor interactions, magnetic buttons, and 3D tilt effects on project cards.
*   **Interactive Media Previews:** Hovering over project cards or creative categories automatically cycles through image slideshows.
*   **Dynamic Modals:** Clicking "View Details" or "Browse" opens clean, distraction-free modals for reading project case studies or viewing full galleries.
*   **Dark/Light Mode:** Seamless theme switching with a professional toggle switch. Preferences are saved in the user's local storage.
*   **Fully Responsive:** Optimized for ultra-wide monitors, laptops, tablets, and small mobile screens (including custom hamburger menu and stacked layouts).
*   **View-Only Media:** Resumes and Presentations (PPTs/PDFs) open directly in the browser via a new tab rather than forcing a download.

---

## 🛠️ Tech Stack

*   **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (ES6+)
*   **Framework/Grid:** Bootstrap 5
*   **Animations & Effects:** Vanilla-Tilt.js
*   **Icons:** FontAwesome 6
*   **Typography:** Google Fonts (*Syne* & *Space Grotesk*)
*   **Form Handling:** Web3Forms API

---

## 📁 Project Structure

```text
Portfolio-Prity_singha/
├── assets/
│   ├── css/
│   │   └── style.css          # All custom styling and responsiveness
│   ├── js/
│   │   ├── data.js            # ⚠️ Central data file (Projects, Creative, PPTs)
│   │   └── script.js          # Rendering logic, theme toggle, animations
│   ├── images/
│   │   ├── profile.jpg        # Hero section photo
│   │   ├── projects/          # Project covers and slideshow screenshots
│   │   └── creative/          # Posters, invites, and design graphics
│   └── documents/             # Resumes and PPTs (in PDF format)
├── index.html                 # Main HTML structure
└── README.md
```

---

## 🚀 How to Update Content (Maintenance Guide)

This portfolio uses a data-driven system. To update your site, you **only** need to edit the `assets/js/data.js` file.

### 1. Adding a New Technical Project
Open `assets/js/data.js`, locate the `portfolioData` array, and add a new object:

```javascript
{
    id: "unique-project-id", // Must be unique, lowercase, no spaces
    title: "Project Name",
    category: "web", // Options: 'web', 'ml', or 'data'
    categoryLabel: "Full-Stack Web Dev",
    description: "A short 1-2 sentence description of the project.",
    tech: ["HTML", "CSS", "JavaScript"],
    coverImage: "assets/images/projects/my-project-cover.jpg",
    slides: [
        "assets/images/projects/my-project-slide1.jpg",
        "assets/images/projects/my-project-slide2.jpg"
    ],
    github: "https://github.com/your-link",
    demo: "https://your-live-demo.com",
    presentation: "assets/documents/my-presentation.pdf", // Optional
    problem: "The problem this project solves...",
    features: ["Feature 1", "Feature 2"]
}
```

### 2. Adding Creative Work (Posters, Invitations, PPTs)
Locate the relevant arrays at the bottom of `data.js`:
*   **Posters:** Add image paths to the `posterData` array.
*   **Invitations:** Add image paths to the `invitationData` array.
*   **Presentations:** Add objects to the `presentationsData` array.

### 3. Adding Media Files
*   Place all images in `assets/images/projects/` or `assets/images/creative/`. 
*   **Optimization Tip:** Always compress images using tools like [TinyPNG](https://tinypng.com/) before uploading to ensure fast load times.
*   Convert PowerPoint presentations to **PDF** and place them in `assets/documents/` so they can be viewed directly in the browser.

---

## 💻 Running Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/PritySingha/Portfolio-Prity_singha.git
   ```
2. Open the folder in VS Code.
3. Use an extension like **Live Server** to preview the site locally, or simply double-click `index.html` to open it in your browser.

---

## 📬 Contact

**Prity Singha**
*   **Email:** [pritysingha001@gmail.com](mailto:pritysingha001@gmail.com)
*   **LinkedIn:** [linkedin.com/in/prity-singha](https://linkedin.com/in/prity-singha)
*   **GitHub:** [github.com/PritySingha](https://github.com/PritySingha)

---

Made with 💻 and 💖 by **Prity Singha**

