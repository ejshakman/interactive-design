document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".error_title");

    //Call restLightandShadow() on page load
    resetLightAndShadow();

    // Function to handle mouse movement and adjust light and shadow effects
    function moveHandler(e) {
        // Calculate mouse position relative to the center of the title element
        let rect = title.getBoundingClientRect();
        let x = e.clientX - rect.left - rect.width / 2;
        let y = e.clientY - rect.top - rect.height / 2;

        // Set CSS variables for light position
        title.style.setProperty("--x", x + "px");
        title.style.setProperty("--y", y + "px");

        // Calculate the angle and distance from the center
        let rad = Math.atan2(y, x).toFixed(2);
        let length = Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / 10);

        // Calculate the shadow offset based on the angle and distance
        let x_shadow = Math.round(length * Math.cos(rad));
        let y_shadow = Math.round(length * Math.sin(rad));

        // Set CSS text shadow with the calculated offset
        title.style.textShadow = `${-x_shadow}px ${-y_shadow}px 10px rgba(0, 0, 0, 0.8)`;
    }

    // Function to reset light and shadow effects
    function resetLightAndShadow() {
        // Set initial position of light to indicate it's not active
        title.style.setProperty("--x", "-9999px");
        title.style.setProperty("--y", "-9999px");

        //Set shadow to none so it does not show
        title.style.textShadow = "none";
    }

    // Function to handle when the mouse enters the title element
    function enterHandler() {
        // Event listener for mousemove to handle light and shadow effects
        title.addEventListener("mousemove", moveHandler);
    }

    // Event listener for mouseenter to activate light and shadow effects
    title.addEventListener("mouseenter", enterHandler);

    // Event listener for mouseleave to reset light and shadow effects
    title.addEventListener("mouseleave", resetLightAndShadow);
});
