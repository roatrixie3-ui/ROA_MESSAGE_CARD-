// 🌠 Create animated stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('span');
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 2 + 's';
  starsContainer.appendChild(star);
}

// 🔄 Card flip animation
const card = document.getElementById('card');
card.addEventListener('click', () => {
  card.classList.toggle('flipped');
});

// 📸 Handle teacher photo upload
const photoUpload = document.getElementById('photo-upload');
const teacherPhotoEl = document.getElementById('teacher-photo');
const photoPlaceholderEl = document.getElementById('photo-placeholder');

photoUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function(e) {
      teacherPhotoEl.src = e.target.result;
      teacherPhotoEl.style.display = 'block';
      photoPlaceholderEl.style.display = 'none';
    };
    reader.readAsDataURL(file);
  }
});
