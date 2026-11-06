document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn-primary');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('Спасибо за интерес к Meta! Скачивание начнётся в ближайшее время.');
    });
  }
});