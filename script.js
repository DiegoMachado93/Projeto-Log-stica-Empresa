function expandSection(sectionId) {
    document.getElementById('menu').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}

function showMenu() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('menu').style.display = 'block';
}
