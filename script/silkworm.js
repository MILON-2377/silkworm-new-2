
function scrollIntoViewById(idName1, idName2) {
    const galleryContainer = document.getElementById(idName2);
    const clickSection = document.getElementById(idName1);

    clickSection.addEventListener("click", () => {
        galleryContainer.scrollIntoView("{behavior: 'smooth'}");
    }, false)
}

scrollIntoViewById("galler-btn", "gallery-container");
scrollIntoViewById("about-us-btn", "about-us-container");

