document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const isActive = accordionItem.classList.contains('active');

            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = '0';
            });

            if (!isActive) {
                accordionItem.classList.add('active');
                accordionItem.querySelector('.accordion-content').style.maxHeight = accordionItem.querySelector('.accordion-content').scrollHeight + 'px';
            }
        });
    });
});