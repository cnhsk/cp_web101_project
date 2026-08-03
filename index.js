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

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [X] Project 6 (REQUIRED FEATURE)
  - [X] Project 6 (STRETCH FEATURE) 
  - [X] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
let rsvpButton = document.getElementById("rsvp-button");

let count = 3;

const addParticipant = (event) => {
    event.preventDefault();
    // Step 2: Write your code to manipulate the DOM here
    let nameValue = document.getElementById("rsvp-name").value;
    let locationValue = document.getElementById("rsvp-location").value;
    let ideaValue = document.getElementById("rsvp-idea").value;
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "👾 " + nameValue + " from " + locationValue + " will be building a " + ideaValue + "!";
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
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  
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
    addParticipant(event);
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
  - [ ] Project 8 (REQUIRED FEATURE)
  - [ ] Any time after
***/

// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = TODO;

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = TODO;
        let topOfRevealableContainer = TODO;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            TODO;
        }
        // If the container is not within range, hide it by removing the 'active' class
        else { 
            TODO;
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener(TODO, TODO);

/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/