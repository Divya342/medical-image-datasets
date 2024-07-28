document.getElementById('hamburger').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
    } else {
        sidebar.classList.add('show');
    }
});
