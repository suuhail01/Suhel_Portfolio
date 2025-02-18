// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // Scroll to Top Button
    // ===========================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#scrollToTopBtn').fadeIn();
        } else {
            $('#scrollToTopBtn').fadeOut();
        }
    });

    $('#scrollToTopBtn').click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return false;
    });


    // ===========================
    // Active Class Toggle for Navigation Links
    // ===========================

    function setupActiveClass(navLinks) {
        function removeActiveClass() {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });
        }
        navLinks.forEach((link) => {
            link.addEventListener("click", (event) => {
                removeActiveClass();
                link.classList.add("active");
            });
        });
    }

    // First navbar: nav-bar
    const navBarLinks = document.querySelectorAll(".nav-bar .nav-box");
    if (navBarLinks.length > 0) {
        setupActiveClass(navBarLinks);
    }

    // Second navbar: name-box-btn
    const nameBoxLinks = document.querySelectorAll(".name-box-btn a");
    if (nameBoxLinks.length > 0) {
        setupActiveClass(nameBoxLinks);
    }


    // ===========================
    // Scrollable Card Container
    // ===========================
    const scrollContainer = document.querySelector(".scroll-container");
    const cards = Array.from(document.querySelectorAll(".image-container"));
    let currentStartIndex = 0;

    function updateVisibleCards() {
        const { cardWidth, visibleCards } = calculateCardWidthAndVisibleCards();
        const translateXValue = -(currentStartIndex * cardWidth);
        scrollContainer.style.transform = `translateX(${translateXValue}px)`;
    }

    function calculateCardWidthAndVisibleCards() {
        const screenWidth = window.innerWidth;
        let cardWidth = 280;
        let visibleCards = 3;

        if (screenWidth <= 820 && screenWidth > 500) {
            // Tablet screens
            cardWidth = 280;
            visibleCards = 2;
        } else if (screenWidth <= 500) {
            // Mobile screens
            cardWidth = 235;
            visibleCards = 1;
        }

        return { cardWidth, visibleCards };
    }

    // Event listeners for scroll navigation buttons (left and right arrows)
    document.querySelectorAll(".left_icon, .right_icon").forEach((icon) => {
        icon.addEventListener("click", function () {
            const { cardWidth, visibleCards } = calculateCardWidthAndVisibleCards();
            const direction = this.classList.contains("left_icon") ? "left" : "right";
            if (direction === "left" && currentStartIndex > 0) {
                currentStartIndex--;
            } else if (direction === "right" && currentStartIndex < cards.length - visibleCards) {
                currentStartIndex++;
            }
            updateVisibleCards();
        });
    });

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);













    // // Disable Right Click
    // document.addEventListener("contextmenu", (event) => event.preventDefault());

    // // Disable Developer Tools (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C)
    // document.addEventListener("keydown", (event) => {
    //     if (
    //         event.ctrlKey && (event.key === "u" || event.key === "U") || // Ctrl+U
    //         event.key === "F12" || // F12
    //         (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "C")) // Ctrl+Shift+I/J/C
    //     ) {
    //         event.preventDefault();
    //     }
    // });

    // // Disable Text Selection
    // document.addEventListener("selectstart", (event) => event.preventDefault());

    // // Disable Copying
    // document.addEventListener("copy", (event) => event.preventDefault());

    // // Prevent Dragging of Images
    // document.addEventListener("dragstart", (event) => event.preventDefault());

    // // Detect Developer Tools Opened
    // setInterval(() => {
    //     if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
    //         document.body.innerHTML = "<h1 style='text-align:center;margin-top:20%;'>Unauthorized Access Detected</h1>";
    //     }
    // }, 1000);











    // ===========================
    // Disable Right-Click and Text Selection
    // ===========================

    // document.addEventListener('contextmenu', (event) => event.preventDefault());
    // document.addEventListener('copy', (event) => event.preventDefault());
    // document.body.style.userSelect = 'none';

    // const images = document.querySelectorAll('img');
    // images.forEach((image) => {
    //     image.addEventListener('contextmenu', function (event) {
    //         event.preventDefault();
    //     });
    // });

    // updateVisibleCards();
    // window.addEventListener('resize', updateVisibleCards);





});




// ===============================================
// ===============================================


document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.image-scroll');
    const images = Array.from(scrollContainer.querySelectorAll('img'));

    // Clone the images to create an infinite loop effect
    images.forEach(img => {
        scrollContainer.appendChild(img.cloneNode(true));
    });
});





// ===============================================
// ---------------- carousel.js ------------------
// ===============================================


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        smartSpeed: 700,
        responsive: {
            0: {
                items: 1,  // 1 item for mobile devices
            },
            600: {
                items: 2,  // 2 items for tablets
            },
            1000: {
                items: 3,  // 3 items for larger screens
            }
        }
    });
});


// ===============================================
// -------------- Progress Line ----------------
// ===============================================

document.addEventListener("DOMContentLoaded", function () {
    const projectSections = document.querySelectorAll(".project-overview");

    // Use this flag to check if progress bar has already animated for a section
    projectSections.forEach((section) => {
        const underline = section.querySelector(".progress-line");
        let hasAnimated = false; // Flag to track animation status for each section

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        if (underline) {
                            underline.style.transition = "width 1s ease";
                            underline.style.width = "100%";
                            hasAnimated = true;
                        }
                    } else if (!entry.isIntersecting && hasAnimated) {
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is in view
        );

        observer.observe(section);
    });
});



// ===============================================
// ------------------- Slider --------------------
// ===============================================


const slider = document.getElementById("slider");

slider.innerHTML += slider.innerHTML;
slider.addEventListener("mouseenter", () => {
    slider.style.animationPlayState = "paused";
});
slider.addEventListener("mouseleave", () => {
    slider.style.animationPlayState = "running";
});




// ======================== CURSOR =================================

// $(window).mousemove(function (e) {
//     $(".ring").css(
//         "transform",
//         `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
//     );
// });




// ====================================================================
// ------------------ Mobile Menu (hamburger click) -------------------
// ====================================================================
// Toggle menu and overlay on hamburger click

const hamburger = document.getElementById('hamburger');
const mobileNavMenu = document.getElementById('mobileNavMenu');
const overlay = document.createElement('div');

overlay.classList.add('overlay');
document.body.appendChild(overlay);

hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    mobileNavMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});
overlay.addEventListener('click', function () {
    mobileNavMenu.classList.remove('active');
    hamburger.classList.remove('active');
    overlay.classList.remove('active');
});


// ====================================================================
// ----------------------- Underline Magical --------------------------
// ====================================================================

// Variables
const magicalUnderlines = document.querySelectorAll('.underline--magical');

// Logging to ensure elements are being selected
console.log('Magical Underlines:', magicalUnderlines);

// Helper Functions
const randNumInRange = max => Math.floor(Math.random() * max);
const mergeArrays = (arrOne, arrTwo) => arrOne.map((item, i) => `${item} ${arrTwo[i]}`).join(', ');
const addBackground = (elms) => (color) => {
    elms.forEach(el => {
        console.log('Applying background to:', el);
        el.style.backgroundImage = color;
    });
};

const getData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Failed to fetch gradient data:', error);
    }
};

const addBackgroundToUnderlines = addBackground(magicalUnderlines);
const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;
const applyGradient = async (url, callback) => {
    const data = await getData(url);
    if (data) {
        const gradient = buildGradient(data[randNumInRange(data.length)]);
        callback(gradient);
    }
};

// applyGradient(gradientAPI, addBackgroundToUnderlines);

// =====================================================================

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000);
});

// ==============================================








































































console.clear();
objectFitImages();

const S = Sizzle,
    frame = S('.frame')[0],
    struc = S('.struc', frame);

struc.push(frame.appendChild(struc[0].cloneNode(true)));
// clone the group of images and add the clone to the struc array

const images =
    [S('.image', struc[0]),
    S('.image', struc[1])], // images[0] is an array of the images in struc[0], same for images[1] and struc[1]
    tl =
        [new TimelineMax({ paused: true, repeat: -1 }),
        new TimelineMax({ paused: true, repeat: -1 })];

let duration = 3, // time for one image to go from right to left
    interval = 1, // time between 2 images appearing
    tlDelay = interval * (images[0].length + 1) - duration, // time between the start of one timeline and the other's
    w = (frame.clientWidth + images[0][0].clientWidth + 100) / 2; // assuming same size for every image and adding an arbitrary 100px margin

// Add the images as background to the elements
images[0][0].style.backgroundImage = 'url("imageA.jpg")'; // Path to image A
images[1][0].style.backgroundImage = 'url("imageB.jpg")'; // Path to image B
images[2][0].style.backgroundImage = 'url("imageC.jpg")'; // Path to image C

for (let i = 0; i < 2; i++) {
    tl[i].staggerFromTo(images[i], duration, { x: w }, { x: -w, ease: Linear.easeNone }, interval)
        .staggerTo(images[i], duration / 6, { scale: 1.25 }, interval, duration / 6)
        .staggerTo(images[i], duration / 6, { scale: 1 }, interval, duration * 4 / 6);
}

tl[1].delay(interval * images[0].length);
tl.forEach(tl => {
    tl.repeatDelay(tlDelay).play();
});

frame.addEventListener('mouseenter', toggleTLplay);
frame.addEventListener('mouseleave', toggleTLplay);

function toggleTLplay() {
    tl.forEach(tl => {
        tl.paused(!tl.paused());
    });
}
