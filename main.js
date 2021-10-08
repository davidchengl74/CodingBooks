// Menu Show
function showMenu(toggleId, navId) {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');

        });
    }
}
showMenu('nav-toggle','nav-menu')

function nestedLinkHandler (link) {
    const interviewBooks = document.getElementById("inteview-book-container")
    const codingBooks = document.getElementById("coding-books-container");
    if (link === "interview") {
        codingBooks.style.display = "none";
        interviewBooks.style.display = "block";
    } else if (link === "codingLanguage"){
        codingBooks.style.display = "block";
        interviewBooks.style.display = "none";
    } else {
        codingBooks.style.display = "block";
        interviewBooks.style.display = "block";
    }
}