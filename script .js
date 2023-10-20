const labels = document.querySelectorAll('label');

labels.forEach(label => {
    label.addEventListener('click', () => {
        labels.forEach(l => l.classList.remove('border-2', 'border-red-600'));
        label.classList.add('border-2', 'border-red-600');
    });
});
