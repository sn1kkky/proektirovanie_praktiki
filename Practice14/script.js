const tabLinks = document.querySelectorAll('.tab-link');
const tabItems = document.querySelectorAll('.tab-item');

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        tabLinks.forEach(item => item.classList.remove('active'));
        tabItems.forEach(item => {
            item.classList.remove('active');
            item.style.display = 'none';
        });

        link.classList.add('active');
        const tabId = link.getAttribute('data-tab');
        const currentTab = document.getElementById(tabId);

        setTimeout(() => {
            currentTab.style.display = 'block';
            currentTab.classList.add('active');
        }, 100);
    });
});