const book = document.querySelector('.book');
const pages = document.querySelectorAll('.page');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');

let currentPage = 0;

function updateButtons() {
    prevPageBtn.disabled = currentPage === 0;
    nextPageBtn.disabled = currentPage === pages.length - 1;
}

function turnPage(direction) {
    if (direction === 'next' && currentPage < pages.length - 1) {
        pages[currentPage].style.transform = 'rotateY(-180deg)';
        currentPage++;
    } else if (direction === 'prev' && currentPage > 0) {
        currentPage--;
        pages[currentPage].style.transform = 'rotateY(0deg)';
    }
    updatePageVisibility();
    updateButtons();
}

function updatePageVisibility() {
    pages.forEach((page, index) => {
        if (index === currentPage) {
            page.style.zIndex = pages.length;
        } else if (index < currentPage) {
            page.style.zIndex = pages.length - (currentPage - index);
            page.style.transform = 'rotateY(-180deg)';
        } else {
            page.style.zIndex = pages.length - (index - currentPage);
            page.style.transform = 'rotateY(0deg)';
        }
    });
}

prevPageBtn.addEventListener('click', () => {
    turnPage('prev');
});

nextPageBtn.addEventListener('click', () => {
    turnPage('next');
});

// Inicialización
updatePageVisibility();
updateButtons();
