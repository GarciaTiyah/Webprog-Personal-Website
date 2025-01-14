document.addEventListener('DOMContentLoaded', function() {
    // Load gallery images
    const gallery = document.getElementById('gallery-images');
    const images = [
        'https://via.placeholder.com/300x200?text=Image+1',
        'https://via.placeholder.com/300x200?text=Image+2',
        'https://via.placeholder.com/300x200?text=Image+3'
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Gallery Image';
        img.style.margin = '10px';
        gallery.appendChild(img);
    });
});

function showContent(id) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
        content.style.opacity = '0';
    });
    const selectedContent = document.getElementById(id);
    selectedContent.style.display = 'block';
    setTimeout(() => {
        selectedContent.style.opacity = '1';
    }, 10);
}
