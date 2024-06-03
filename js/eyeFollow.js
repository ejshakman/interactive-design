const cursors = document.querySelectorAll(".cursor");

cursors.forEach((div, index) => {
    window.addEventListener("mousemove", function (dets) {
      div.style.left = `${dets.clientX}px`;
      div.style.top = `${dets.clientY}px`;
    });
    div.style.transition = `${(index + 1) * 150}ms linear`;
  });