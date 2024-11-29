const addButtons = document.querySelectorAll<HTMLButtonElement>(".add");

addButtons.forEach((addBtn) => {
    addBtn.addEventListener("click", () => {
        const parentContainer = addBtn.parentElement; // Get the container related to the button
        if (parentContainer) {
            const newDiv = document.createElement("textarea");
            newDiv.setAttribute("rows", "10");
            newDiv.setAttribute("cols", "60");
            newDiv.setAttribute("placeholder", "Enter More");
            newDiv.classList.add("cont");
            
            // Insert the new textarea before the button
            parentContainer.insertBefore(newDiv, addBtn);
        }
    });
});
``