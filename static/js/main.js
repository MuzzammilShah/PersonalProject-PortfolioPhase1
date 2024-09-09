document.addEventListener('DOMContentLoaded', () => {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["Hey there.     ", "Welcome to my website!   ", "Feel free to scroll down :)     "];
    const typingDelay = 100;
    const erasingDelay = 120;
    const newTextDelay = 0; 
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay);
        }
    }

    setTimeout(type, newTextDelay);
});

window.onscroll = function() {
    // Get the amount the page has been scrolled vertically
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Get the total height of the webpage (the sum of all sections)
    let documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the horizontal scroll position for the background
    // Assuming the background image width is larger than the viewport, adjust the ratio.
    let horizontalPosition = (scrollTop / documentHeight) * 100; // Move from 0% to 100% horizontally

    // Update the background position to move horizontally based on vertical scroll
    document.body.style.backgroundPosition = `${horizontalPosition}% 0`;
};

// JavaScript to handle the modal popup
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const closeBtn = document.querySelector('.close-btn');

    // Show the modal when "Read More" is clicked
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
