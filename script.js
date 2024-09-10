function showRoadmap(subjectId) {
    // Hide all roadmaps and subject buttons
    document.querySelectorAll('.roadmap').forEach(roadmap => {
        roadmap.classList.remove('active');
    });

    // Hide subject buttons container
    document.querySelector('.container').style.display = 'none';

    // Show the selected roadmap
    document.getElementById(subjectId).classList.add('active');
}