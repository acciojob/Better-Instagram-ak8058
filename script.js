let draggedElement = null;

document.querySelectorAll(".image").forEach((image) => {
  image.addEventListener("dragstart", function (event) {
    draggedElement = this;
    event.dataTransfer.setData("text/plain", this.id);
    setTimeout(() => this.classList.add("selected"), 0); // Highlight selected image
  });

  image.addEventListener("dragover", function (event) {
    event.preventDefault(); // Allow dropping
  });

  image.addEventListener("drop", function (event) {
    event.preventDefault();

    if (draggedElement && draggedElement !== this) {
      // Extract computed background images (Fixes background swap issues)
      let draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
      let targetBg = window.getComputedStyle(this).backgroundImage;

      // Swap background images
      this.style.backgroundImage = draggedBg;
      draggedElement.style.backgroundImage = targetBg;
    }
  });

  image.addEventListener("dragend", function () {
    this.classList.remove("selected"); // Remove highlight after dragging
    draggedElement = null;
  });
});
