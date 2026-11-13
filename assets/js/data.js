const portfolioData = [
    // --- 1. SafeOnyx 2.0 ---
    {
        id: "safeonyx-2.0",
        title: "SafeOnyx 2.0",
        category: "ml",
        categoryLabel: "Machine Learning & AI",
        description: "A multi-modal AI platform that detects scams across SMS, emails, URLs, and screenshots in real-time.",
        tech: ["Python", "Streamlit", "Scikit-learn", "XGBoost", "OCR"],
        coverImage: "assets/images/projects/so1.png",
        slides: [
            "assets/images/projects/so1.png",
            "assets/images/projects/so2.png",
            "assets/images/projects/so3.png",
            "assets/images/projects/so4.png",
            "assets/images/projects/so5.png",
            "assets/images/projects/so6.png",
            "assets/images/projects/so7.png"
        ],
        github: "https://github.com/PritySingha/SafeOnyx-2.0",
        demo: "https://safeonyx20.streamlit.app/", // Add your Render deployment link here
        problem: "Online scams are increasingly sophisticated and use various formats (text, images, links), making them hard for average users to identify.",
        features: [
            "Detects scams in 4 input types: SMS, Email, URL, and Screenshots",
            "Real-time predictions with confidence scores",
            "Explainable AI that shows *why* something was flagged",
            "High-performing models (up to 98% accuracy)"
        ]
    },
    // --- 2. AgriSmart AI ---
    {
        id: "agrismart-ai",
        title: "AgriSmart AI",
        category: "ml",
        categoryLabel: "Machine Learning & AI",
        description: "A Streamlit app that fuses CNN-based leaf analysis with sensor data to provide irrigation recommendations.",
        tech: ["Python", "TensorFlow", "Scikit-learn", "Streamlit", "Plotly"],
        coverImage: "assets/images/projects/as1.png",
        slides: [
            "assets/images/projects/as1.png",
            "assets/images/projects/as2.png",
            "assets/images/projects/as3.png",
            "assets/images/projects/as4.png",
            "assets/images/projects/as5.png"
        ],
        github: "https://github.com/PritySingha/AgriSmart-AI",
        demo: "https://agrismart-ai-m6c3fmkl946gectmfalulf.streamlit.app/", // Add your live demo link here if you have one
        problem: "Farmers need accessible tools to quickly diagnose plant health and optimize water usage without expensive lab tests.",
        features: [
            "CNN leaf-image classifier (15 plant-condition classes)",
            "Random Forest models for irrigation prediction",
            "Fused health report with top-3 breakdown and risk level",
            "Actionable next-step recommendations"
        ]
    },
    // --- 3. ClassVibes ---
    {
        id: "classvibes",
        title: "ClassVibes",
        category: "web",
        categoryLabel: "Full-Stack Web Dev",
        description: "A smart classroom management system that replaces slow roll calls with fast QR-based attendance tracking.",
        tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        coverImage: "assets/images/projects/cv1.png",
        slides: [
            "assets/images/projects/cv1.png",
            "assets/images/projects/cv2.png",
            "assets/images/projects/cv3.png",
            "assets/images/projects/cv4.png",
            "assets/images/projects/cv5.png",
            "assets/images/projects/cv6.png",
            "assets/images/projects/cv7.png",
            "assets/images/projects/cv8.png",
            "assets/images/projects/cv9.png",
            "assets/images/projects/cv10.png",
            "assets/images/projects/cv11.png",
            "assets/images/projects/cv12.png",
            "assets/images/projects/cv13.png",
            "assets/images/projects/cv14.png",
            "assets/images/projects/cv15.png",
            "assets/images/projects/cv16.png",
            "assets/images/projects/cv17.png",
            "assets/images/projects/cv18.png",
            "assets/images/projects/cv19.png",
            "assets/images/projects/cv20.png",
            "assets/images/projects/cv21.png"
        ],
        github: "https://github.com/PritySingha/classvibes",
        demo: "https://classvibes.ct.ws/",
        problem: "Traditional attendance systems waste valuable class time and are prone to proxy errors.",
        features: [
            "Dynamic QR generation for each session",
            "Role-based dashboards for teachers and students",
            "Automated attendance reports and analytics"
        ]
    },
    // --- 4. Personal Portfolio ---
    {
        id: "portfolio",
        title: "Personal Portfolio",
        category: "web",
        categoryLabel: "Frontend Design",
        description: "This very site you are on. Built from scratch to showcase both my technical and creative work.",
        tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        coverImage: "assets/images/projects/p1.png",
        slides: [
            "assets/images/projects/p1.png",
            "assets/images/projects/p2.png",
            "assets/images/projects/p3.png",
            "assets/images/projects/p4.png",
            "assets/images/projects/p5.png",
            "assets/images/projects/p6.png",
            "assets/images/projects/p7.png",
            "assets/images/projects/p8.png",
            "assets/images/projects/p9.png",
            "assets/images/projects/p10.png",
            "assets/images/projects/p11.png",
            "assets/images/projects/p12.png",
            "assets/images/projects/p13.png"
        ],
        github: "https://github.com/PritySingha/Portfolio-Prity_singha",
        demo: "https://portfolio-prity-singha.pages.dev/",
        problem: "Needed a unique digital space that didn't look like a standard, generic template.",
        features: [
            "Dynamic theme switching (light/dark)",
            "Custom cursor and magnetic button interactions",
            "Responsive masonry gallery for creative work",
            "Data-driven project rendering"
        ]
    },
    // --- 5. Safeonix (v1) ---
    {
        id: "safeonix-v1",
        title: "Safeonix (v1)",
        category: "ml",
        categoryLabel: "Machine Learning",
        description: "The foundational iteration of my fraud detection exploration, where I tested the core detection logic.",
        tech: ["Python", "Machine Learning"],
        coverImage: "assets/images/projects/s1.png",
        slides: [
            "assets/images/projects/s1.png",
            "assets/images/projects/s2.png",
            "assets/images/projects/s3.png",
            "assets/images/projects/s4.png",
            "assets/images/projects/s5.png",
            "assets/images/projects/s6.png",
            "assets/images/projects/s7.png"
        ],
        github: "https://github.com/PritySingha/Safeonix",
        demo: "https://safeonix.onrender.com/",
        problem: "To explore and validate the core machine learning models for text-based fraud detection.",
        features: [
            "Initial text classification models",
            "Basic feature engineering experiments",
            "Proof-of-concept for the SafeOnyx platform"
        ]
    }
   
];

// ==========================================
// CREATIVE DESIGNS DATA
// ==========================================

// Group 1: Posters (Add as many as you want to the array)
const posterData = [
    "assets/images/creative/Farewell_poster.png",
    "assets/images/creative/fp2.png",
    "assets/images/creative/fp3.png",
    "assets/images/creative/fp4.png",
    "assets/images/creative/fp5.png", 
    "assets/images/creative/fp6.png"

];

// Group 2: Invitations
const invitationData = [
    "assets/images/creative/inv1.png",
    "assets/images/creative/inv2.png",
    "assets/images/creative/inv3.png"
];

// Group 3: Presentations (PPTs/PDFs)
const presentationsData = [
    {
        title: "ClassVibes Project Presentation",
        description: "A comprehensive breakdown of the architecture, database schema, and UI flow for ClassVibes.",
        cover: "assets/images/projects/cv1.png", // Use one of your slide images
        file: "assets/documents/classvibes-presentation.pdf" // Upload your PDF here
    },
    {
        title: "SafeOnyx AI Pitch Deck",
        description: "The pitch deck explaining the problem, machine learning models, and business potential of SafeOnyx 2.0.",
        cover: "assets/images/projects/so1.png",
        file: "assets/documents/safeonyx-presentation.pdf"
    },
    {
        title: "Electrical Safety Awareness Presentation",
        description: "A presentation aimed at educating users about electrical safety practices and precautions.",
        cover: "assets/images/creative/ppt1Cover.png",
        file: "assets/documents/ppt1.pdf"
    },
    {
        title: "Introduction to Monotremes and Marsupials Presentation",
        description: "An educational presentation that provides insights into the unique characteristics and evolutionary significance of monotremes and marsupials.",
        cover: "assets/images/creative/ppt2Cover.png",
        file: "assets/documents/ppt2.pdf"
    }
];