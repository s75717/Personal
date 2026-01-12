// Navigation highlight
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
});

// Portfolio alert
function comingSoon() {
    alert("For this moment, portfolio publishing is not available.");
}

// PDF generation
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

<<<<<<< HEAD
    // to get input values from users
=======
    // to get input from users
>>>>>>> 7244b96aa71e948c891d54b85d056c3c0082361e
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
}