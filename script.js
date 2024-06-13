document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".art-gallery img");
    
    images.forEach(image => {
        image.addEventListener("click", () => {
            const info = image.getAttribute("data-info");
            alert(info); // Change this to display info in a more elegant way if needed
        });
    });
});
