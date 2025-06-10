settingsBtn.addEventListener('click', function() {
    const languageItems = navmenu.querySelectorAll('.language-options');
    languageItems.forEach(item => {
        item.style.display = item.style.display === 'none' ? 'block' : 'none';
    });
    event.preventDefault();
});