// Define the types of elements being selected
var addButtons = document.querySelectorAll(".add");
addButtons.forEach(function (addBtn) {
    addBtn.addEventListener("click", function () {
        var parentContainer = addBtn.parentElement; // Get the container related to the button
        if (parentContainer) {
            var newDiv = document.createElement("textarea");
            newDiv.setAttribute("rows", "5");
            newDiv.setAttribute("cols", "30");
            newDiv.setAttribute("placeholder", "Enter More");
            newDiv.classList.add("cont");
            // Check which button was clicked and assign the specific class
            if (addBtn.classList.contains("addEducation")) {
                newDiv.classList.add("education");
            }
            else if (addBtn.classList.contains("addExperience")) {
                newDiv.classList.add("experience");
            }
            // Insert the new textarea before the button
            parentContainer.insertBefore(newDiv, addBtn);
        }
    });
});
// Define types for form fields
var generateResumeButton = document.querySelector(".generateResume");
generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.addEventListener("click", function () {
    var firstName = document.querySelector(".nameField").value;
    var lastName = document.querySelector(".lastNameField").value;
    var title = document.querySelector(".titleField").value;
    var phoneNumber = document.querySelector(".phoneNumberField").value;
    var email = document.querySelector(".emailField").value;
    var linkedin = document.querySelector(".linkedinField").value;
    var facebook = document.querySelector(".facebookField").value;
    var aboutMe = document.querySelector(".aboutMe").value;
    var skills = document.querySelector(".skillsField").value;
    var skillsArray = skills.split(",");
    var languages = document.querySelector(".languagesField").value;
    var languagesArray = languages.split(",");
    // Collect education and experience
    var education = document.querySelectorAll("textarea.education");
    var educationString = "";
    education.forEach(function (element) {
        educationString += "<p> \uD83C\uDF93 ".concat(element.value, " </p>");
    });
    var experience = document.querySelectorAll("textarea.experience");
    var experienceString = "";
    experience.forEach(function (element) {
        experienceString += "<p> \uD83D\uDCBC ".concat(element.value, " </p>");
    });
    // Update resume contact info
    var phoneNumberElement = document.querySelector(".phoneNumber");
    var mailElement = document.querySelector(".mail");
    var linkedinElement = document.querySelector(".linkedin");
    var facebookElement = document.querySelector(".facebook");
    if (phoneNumberElement)
        phoneNumberElement.innerHTML = phoneNumber;
    if (mailElement)
        mailElement.innerHTML = email;
    if (linkedinElement)
        linkedinElement.setAttribute("href", linkedin);
    if (facebookElement)
        facebookElement.setAttribute("href", facebook);
    // Update skills section
    var skillsContainer = document.querySelector(".skills");
    var mySkills = "";
    skillsArray.forEach(function (element) {
        mySkills += "<div class=\"skillsItems\">".concat(element, "</div>");
    });
    if (skillsContainer)
        skillsContainer.innerHTML = mySkills;
    // Update languages section
    var languagesContainer = document.querySelector(".languages");
    var mylanguages = "";
    languagesArray.forEach(function (element) {
        mylanguages += "<div class=\"langsItems\">".concat(element, "</div>");
    });
    if (languagesContainer)
        languagesContainer.innerHTML = mylanguages;
    // Update name, title, about, education, and experience in resume
    var firstNameElement = document.querySelector(".firstName");
    var lastNameElement = document.querySelector(".lastName");
    var titleElement = document.querySelector(".title");
    var aboutSectionElement = document.querySelector(".aboutSection");
    var educationSectionElement = document.querySelector(".educationSection");
    var experienceSectionElement = document.querySelector(".experienceSection");
    if (firstNameElement)
        firstNameElement.innerHTML = firstName;
    if (lastNameElement)
        lastNameElement.innerHTML = lastName;
    if (titleElement)
        titleElement.innerHTML = title;
    if (aboutSectionElement)
        aboutSectionElement.innerHTML = aboutMe;
    if (educationSectionElement)
        educationSectionElement.innerHTML = educationString;
    if (experienceSectionElement)
        experienceSectionElement.innerHTML = experienceString;
    // Hide the form and show the resume
    var formElement = document.querySelector(".main");
    var resumeContainerElement = document.querySelector(".resumeContainer");
    var generateResumeBtnElement = document.querySelector(".generateResume");
    if (formElement)
        formElement.style.display = "none";
    if (resumeContainerElement)
        resumeContainerElement.style.display = "flex";
    if (generateResumeBtnElement)
        generateResumeBtnElement.style.display = "none";
});
// Event listener for the display picture input field
var displayPictureInput = document.querySelector('.displayPicture');
var profilePicture = document.querySelector('.profilePicture');
displayPictureInput === null || displayPictureInput === void 0 ? void 0 : displayPictureInput.addEventListener('change', function (event) {
    var target = event.target;
    var file = target.files ? target.files[0] : null; // Get the selected file
    if (file) {
        var objectURL = URL.createObjectURL(file); // Create object URL
        if (profilePicture)
            profilePicture.src = objectURL; // Set image source to the selected file
    }
    else {
        console.log('No file selected');
    }
});
