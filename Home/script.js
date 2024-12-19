function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('active')) {
        section.classList.remove('active');
    } else {
        section.classList.add('active');
    }
}