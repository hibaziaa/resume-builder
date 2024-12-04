// Define the types of elements being selected
const addButtons: NodeListOf<Element> = document.querySelectorAll(".add");
addButtons.forEach((addBtn: Element) => {
  addBtn.addEventListener("click", function () {
    const parentContainer: HTMLElement | null = addBtn.parentElement; // Get the container related to the button
    if (parentContainer) {
      const newDiv: HTMLTextAreaElement = document.createElement("textarea");
      newDiv.setAttribute("rows", "5");
      newDiv.setAttribute("cols", "30");
      newDiv.setAttribute("placeholder", "Enter More");
      newDiv.classList.add("cont");

      // Check which button was clicked and assign the specific class
      if (addBtn.classList.contains("addEducation")) {
        newDiv.classList.add("education");
      } else if (addBtn.classList.contains("addExperience")) {
        newDiv.classList.add("experience");
      }

      // Insert the new textarea before the button
      parentContainer.insertBefore(newDiv, addBtn);
    }
  });
});
    
// Define types for form fields
const generateResumeButton: HTMLElement | null = document.querySelector(".generateResume");
generateResumeButton?.addEventListener("click", () => {
  const firstName: string = (document.querySelector(".nameField") as HTMLInputElement).value;
  const lastName: string = (document.querySelector(".lastNameField") as HTMLInputElement).value;
  const title: string = (document.querySelector(".titleField") as HTMLInputElement).value;
  const phoneNumber: string = (document.querySelector(".phoneNumberField") as HTMLInputElement).value;
  const email: string = (document.querySelector(".emailField") as HTMLInputElement).value;
  const linkedin: string = (document.querySelector(".linkedinField") as HTMLInputElement).value;
  const facebook: string = (document.querySelector(".facebookField") as HTMLInputElement).value;
  const aboutMe: string = (document.querySelector(".aboutMe") as HTMLTextAreaElement).value;
  const skills: string = (document.querySelector(".skillsField") as HTMLInputElement).value;

  const skillsArray: string[] = skills.split(",");

  const languages: string = (document.querySelector(".languagesField") as HTMLInputElement).value;

  const languagesArray: string[] = languages.split(",");

  // Collect education and experience
  const education: NodeListOf<HTMLTextAreaElement> = document.querySelectorAll("textarea.education");
  let educationString: string = "";
  education.forEach((element: HTMLTextAreaElement) => {
    educationString += `<p> 🎓 ${element.value} </p>`;
  });

  const experience: NodeListOf<HTMLTextAreaElement> = document.querySelectorAll("textarea.experience");
  let experienceString: string = "";
  experience.forEach((element: HTMLTextAreaElement) => {
    experienceString += `<p> 💼 ${element.value} </p>`;
  });

  // Update resume contact info
  const phoneNumberElement: HTMLElement | null = document.querySelector(".phoneNumber");
  const mailElement: HTMLElement | null = document.querySelector(".mail");
  const linkedinElement: HTMLAnchorElement | null = document.querySelector(".linkedin");
  const facebookElement: HTMLAnchorElement | null = document.querySelector(".facebook");

  if (phoneNumberElement) phoneNumberElement.innerHTML = phoneNumber;
  if (mailElement) mailElement.innerHTML = email;
  if (linkedinElement) linkedinElement.setAttribute("href", linkedin);
  if (facebookElement) facebookElement.setAttribute("href", facebook);

  // Update skills section
  const skillsContainer: HTMLElement | null = document.querySelector(".skills");
  let mySkills: string = "";
  skillsArray.forEach((element: string) => {
    mySkills += `<div class="skillsItems">${element}</div>`;
  });
  if (skillsContainer) skillsContainer.innerHTML = mySkills;

  // Update languages section
  const languagesContainer: HTMLElement | null = document.querySelector(".languages");
  let mylanguages: string = "";
  languagesArray.forEach((element: string) => {
    mylanguages += `<div class="langsItems">${element}</div>`;
  });
  if (languagesContainer) languagesContainer.innerHTML = mylanguages;

  // Update name, title, about, education, and experience in resume
  const firstNameElement: HTMLElement | null = document.querySelector(".firstName");
  const lastNameElement: HTMLElement | null = document.querySelector(".lastName");
  const titleElement: HTMLElement | null = document.querySelector(".title");
  const aboutSectionElement: HTMLElement | null = document.querySelector(".aboutSection");
  const educationSectionElement: HTMLElement | null = document.querySelector(".educationSection");
  const experienceSectionElement: HTMLElement | null = document.querySelector(".experienceSection");

  if (firstNameElement) firstNameElement.innerHTML = firstName;
  if (lastNameElement) lastNameElement.innerHTML = lastName;
  if (titleElement) titleElement.innerHTML = title;
  if (aboutSectionElement) aboutSectionElement.innerHTML = aboutMe;
  if (educationSectionElement) educationSectionElement.innerHTML = educationString;
  if (experienceSectionElement) experienceSectionElement.innerHTML = experienceString;

  // Hide the form and show the resume
  const formElement: HTMLElement | null = document.querySelector(".main");
  const resumeContainerElement: HTMLElement | null = document.querySelector(".resumeContainer");
  const generateResumeBtnElement: HTMLElement | null = document.querySelector(".generateResume");

  if (formElement) formElement.style.display = "none";
  if (resumeContainerElement) resumeContainerElement.style.display = "flex";
  if (generateResumeBtnElement) generateResumeBtnElement.style.display = "none";
});

// Event listener for the display picture input field
const displayPictureInput: HTMLInputElement | null = document.querySelector('.displayPicture');
const profilePicture: HTMLImageElement | null = document.querySelector('.profilePicture');

displayPictureInput?.addEventListener('change', function (event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files ? target.files[0] : null; // Get the selected file
  if (file) {
    const objectURL: string = URL.createObjectURL(file); // Create object URL
    if (profilePicture) profilePicture.src = objectURL; // Set image source to the selected file
  } else {
    console.log('No file selected');
  }
});
