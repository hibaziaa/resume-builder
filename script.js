var addButtons = document.querySelectorAll(".add");
addButtons.forEach(function (addBtn) {
    addBtn.addEventListener("click", function () {
        var parentContainer = addBtn.parentElement; // Get the container related to the button
        if (parentContainer) {
            var newDiv = document.createElement("textarea");
            newDiv.setAttribute("rows", "10");
            newDiv.setAttribute("cols", "60");
            newDiv.setAttribute("placeholder", "Enter More");
            newDiv.classList.add("cont");
            // Insert the new textarea before the button
            parentContainer.insertBefore(newDiv, addBtn);
        }
    });
});
"";
