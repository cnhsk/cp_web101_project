/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [X] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
document.body.classList.toggle("dark-mode");
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);


/*** Reduce Motion ***
  
  Purpose:
  - Use this starter code to add a reduce motion feature to your website.

  When To Modify:
  - [X] Project 8 (STRETCH FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the reduce motion button
let motionButton = document.getElementById("motion-button");

// Step 2: Write the callback function
const toggleMotionButton = () => {
  // 1. Toggle the class on body
  document.body.classList.toggle("reduce-motion");

  // 2. Update the button text based on class presence
  if (document.body.classList.contains("reduce-motion")) {
    motionButton.textContent = "Reduce Motion: ON";
  } else {
    motionButton.textContent = "Reduce Motion: OFF";
  }
};

// Step 3: Register a 'click' event listener for the theme button,
// and tell it to use toggleMotionButton as its callback function
motionButton.addEventListener("click", toggleMotionButton);  

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [X] Project 6 (REQUIRED FEATURE)
  - [X] Project 6 (STRETCH FEATURE) 
  - [X] Project 7 (REQUIRED FEATURE)
  - [X] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
let rsvpButton = document.getElementById("rsvp-button");

let count = 3;

const addParticipant = (person) => {
    // Step 2: Write your code to manipulate the DOM here
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "👾 " + person.name + " from " + person.location + " will be building a " + person.idea + "!";
    let participantsContainer = document.querySelector(".rsvp-participants");
    participantsContainer.appendChild(newParagraph);
    document.getElementById("rsvp-count").remove();
    count = count + 1;
    let yourNewElement = document.createElement("p");
    yourNewElement.id = "rsvp-count";
    yourNewElement.textContent = "⭐ " + count + " people will be building with us this weekend!";
    participantsContainer.appendChild(yourNewElement);
}

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [X] Project 7 (REQUIRED FEATURE)
  - [X] Project 7 (STRETCH FEATURE)
  - [X] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;

    let person = {
name: rsvpInputs[0].value,
location: rsvpInputs[1].value,
idea: rsvpInputs[2].value,
email: rsvpInputs[3].value, 
}

  // 1. Wipe all UI error states FIRST at the beginning
  for (let i = 0; i < rsvpInputs.length; i++) {
    rsvpInputs[i].classList.remove("error");
  }

  // 2. Text input length check (NO ELSE NEEDED)
  for (let i = 0; i < rsvpInputs.length; i++) {
    if (rsvpInputs[i].value.length < 2 && rsvpInputs[i].type === "text") {
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    }
  }

  // 3. Email validation check (NO ELSE NEEDED)
  let email = document.getElementById("rsvp-email");
  if (!email.value.includes("@") || email.value.length < 5) {
  containsErrors = true;
  email.classList.add("error");
  }

  // 4. Success action
  if (!containsErrors) {
    addParticipant(person);
    toggleModal(person);
    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";        
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm);

/*** Scroll Animations ***
  
  Purpose:
  - Use this starter code to add scroll animations to your website.

  When To Modify:
  - [X] Project 8 (REQUIRED FEATURE)
  - [ ] Any time after
***/

// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelectorAll(".revealable");

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            current.classList.add("active");
        }
        // If the container is not within range, hide it by removing the 'active' class
        else { 
            current.classList.remove("active");
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener('scroll', reveal);

/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [X] Project 9 (REQUIRED FEATURE)
  - [X] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

// 1. Declare global variables for the modal animation
let modalImage = document.getElementById("modal-image");
let modalClose = document.getElementById("modal-close");
let intervalId;
let rotateFactor = 0;

// 2. Open the modal and start the wave animation
const toggleModal = (person) => {
    let modal = document.getElementById("success-modal");
    modal.style.display = "flex";

    let modalText = document.getElementById("modal-text");
    modalText.textContent = "Thanks for RSVPing, " + person.name + "! We can't wait to see you next weekend!";

    // Only start the interval if reduced motion is NOT active
    if (!document.body.classList.contains("reduce-motion")) {
        intervalId = setInterval(animateImage, 500);
    }

    // Auto-close after 5 seconds
    setTimeout(() => {
        modal.style.display = 'none';
        clearInterval(intervalId);
    }, 5000);
};

// 3. Animate the image angle
const animateImage = () => {
    if (rotateFactor === 0) {
        rotateFactor = -10;
    } else {
        rotateFactor = 0;
    }
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};

// 4. Function to close the modal manually
const closeModal = () => {
    let modal = document.getElementById("success-modal");
    modal.style.display = "none";
    clearInterval(intervalId);
};

// 5. Attach event listener for the close button
modalClose.addEventListener("click", closeModal);