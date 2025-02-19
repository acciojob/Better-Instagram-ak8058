document.addEventListener("DOMContentLoaded", function () {
  let draggedElement = null;

  // Select all draggable image divs
  document.querySelectorAll(".image").forEach((image) => {
    image.addEventListener("dragstart", function (event) {
      draggedElement = this; // Store the element being dragged
      event.dataTransfer.setData("text/plain", this.id);
      setTimeout(() => this.classList.add("selected"), 0); // Add visual highlight
      this.style.opacity = "0.4"; // Make dragged element semi-transparent
    });

    image.addEventListener("dragover", function (event) {
      event.preventDefault(); // Allow the drop to happen
    });

    image.addEventListener("drop", function (event) {
      event.preventDefault();

      if (draggedElement !== this) {
        // Swap background images if the elements are different
        let tempBg = this.style.backgroundImage;
        this.style.backgroundImage = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = tempBg;
      }
    });

    image.addEventListener("dragend", function () {
      this.style.opacity = "1"; // Reset opacity after dragging
      this.classList.remove("selected"); // Remove visual highlight
      draggedElement = null; // Reset dragged element
    });
  });
});




