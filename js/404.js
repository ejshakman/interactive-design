document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".error_title");

    title.onmousemove = function (e) {
        // Calculate mouse position relative to the center of the title element
        let x = e.pageX - title.offsetLeft - title.offsetWidth / 2;
        let y = e.pageY - title.offsetTop - title.offsetHeight / 2;

        // Light effect: Set CSS variables for light position
        title.style.setProperty("--x", x + "px");
        title.style.setProperty("--y", y + "px");

        // Shadow effect: Calculate shadow position based on mouse position
        let rad = Math.atan2(y, x).toFixed(2);
        let length = Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / 10);
        let x_shadow = Math.round(length * Math.cos(rad));
        let y_shadow = Math.round(length * Math.sin(rad));

        // Set CSS variables for shadow position
        title.style.setProperty("--x-shadow", -x_shadow + "px");
        title.style.setProperty("--y-shadow", -y_shadow + "px");
    };
});
