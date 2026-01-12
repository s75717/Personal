// Navigation highlight with smooth behavior
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        if (scrollY >= sec.offsetTop - 150) {
            current = sec.id;
        }
    });

    links.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });

    // Scroll to top button visibility
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    // Header shadow on scroll
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Portfolio alert with better styling
function comingSoon() {
    alert("📋 Portfolio publishing feature is coming soon!\n\nStay tuned for updates!");
}

// PDF generation with loading state
function downloadPDF() {
    const button = event.target;
    const originalText = button.textContent;
    
    // Show loading state
    button.innerHTML = '<span class="loading"></span> Generating...';
    button.disabled = true;

    // Simulate slight delay for better UX
    setTimeout(() => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Get input values from users
        const name = document.getElementById("name").value || "John Williams";
        const title = document.getElementById("title").value || "Software Engineer";
        const email = document.getElementById("email").value || "john.williams@mail.uk";
        const phone = document.getElementById("phone").value || "+44 20 7946 0638";
        const address = document.getElementById("address").value || "14 Tottenham Court Road, London, WIT 1JY";
        const linkedin = document.getElementById("linkedin").value || "linkedin.com/in/johnwilliams";
        const website = document.getElementById("website").value || "www.johnwilliams.com";
        const drivingLicense = document.getElementById("drivingLicense").value || "B, AM, A";
        const summary = document.getElementById("summary").value || "Due to graduate in 2016, I have acquired technical knowledge and practical experience...";
        const skills = document.getElementById("skills").value || "Microsoft Office, Google Analytics, Google Adwords, Google Optimize";
        const experience = document.getElementById("experience").value || "Junior Software Developer, Explore the Web Ltd, London (2015 - Present)\n- Writing Python applications\n- Database design\n- Answering support tickets";
        const education = document.getElementById("education").value || "BSc Computer Science, University of London (2012 - 2016)";

        let y = 20;

    // Name
    doc.setFont("helvetica", "bold"); // fallback for Abhaya Libre ExtraBold
    doc.setFontSize(22);
    doc.text(name.toUpperCase(), 20, y);
    y += 8;

    // Contact Info
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(`^ ${address} | ${phone}`, 20, y);
    y += 6;
    doc.text(email, 20, y);
    y += 6;
    doc.text(`Website: ${website}`, 20, y);
    y += 6;
    doc.text(`LinkedIn: ${linkedin}`, 20, y);
    y += 6;
    doc.text(`Driving License: ${drivingLicense}`, 20, y);
    y += 10;

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(title, 20, y);
    y += 12;

    // Professional Summary
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Professional Summary", 20, y);
    y += 7;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const summaryLines = doc.splitTextToSize(summary, 170);
    doc.text(summaryLines, 20, y);
    y += summaryLines.length * 6 + 8;

    // Work Experience
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Work Experience", 20, y);
    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const expLines = experience.split("\n");
    expLines.forEach(line => {
        doc.text(`• ${line}`, 25, y);
        y += 6;
    });
    y += 8;

    // Education
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Education & Qualifications", 20, y);
    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const eduLines = education.split("\n");
    eduLines.forEach(line => {
        doc.text(`• ${line}`, 25, y);
        y += 6;
    });
    y += 8;

    // Skills
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Skills", 20, y);
    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const skillArray = skills.split(",");
    skillArray.forEach(skill => {
        doc.text(`• ${skill.trim()}`, 25, y);
        y += 6;
    });

    // Save PDF
    doc.save(`${name.replace(" ", "_")}_CV.pdf`);

        // Reset button state
        button.textContent = originalText;
        button.disabled = false;
        
        // Show success message
        showNotification('✅ Resume downloaded successfully!');
    }, 500);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}