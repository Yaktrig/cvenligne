// Function to cycle background images
function cycleBackgrounds(sectionId, images) {
    let index = 0;
    const section = document.getElementById(sectionId);

    setInterval(() => {
        // Change the background image
        section.style.backgroundImage = `url('${images[index]}')`;

        // Increment index or reset to 0
        index = (index + 1) % images.length;
    }, 6000); // Change every 3 seconds
}

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Define background images for each section
const detailsImages = [
    'images/details1.jpg'
];

const experienceImages = [
    'images/experience1.png',
    'images/experience2.jpg',
    'images/experience3.png',
    'images/experience4.png'
];

const educationImages = [
    'images/education1.png',
    'images/education2.png',
    'images/education3.jpg',
    'images/education3.png'
];

const skillsImages = [
    'images/skills1.jpg',
    'images/skills2.jpg',
    'images/skills3.jpg'
];

// Apply the image cycling functionality to sections
cycleBackgrounds('details', detailsImages);
cycleBackgrounds('experience', experienceImages);
cycleBackgrounds('education', educationImages);
cycleBackgrounds('skills', skillsImages);

// Scroll-triggered animations for list items
document.addEventListener("scroll", () => {
    const listItems = document.querySelectorAll("ul li");
    const triggerHeight = window.innerHeight * 0.8;

    listItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerHeight) {
            item.style.animationPlayState = "running";
        }
    });
});
