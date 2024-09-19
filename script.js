function toggleDescription(movieId) {
    const description = document.querySelector(`#${movieId} .description`);
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}