document.addEventListener("mousemove", (e) => {
    const customCursor = document.querySelector(".custom-cursor");
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});

document.addEventListener("click", () => {
    const customCursor = document.querySelector(".custom-cursor");
    customCursor.classList.add("hidden");

    // Optional: Remove the cursor after a short delay (e.g., 500ms)
    setTimeout(() => {
        customCursor.classList.remove("hidden");
    }, 500);
});
