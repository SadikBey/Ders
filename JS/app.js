const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
const backToTopBtn = document.getElementById('backToTop');


menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  navUl.classList.toggle('show');
});
menuToggle.addEventListener('keydown', e => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    menuToggle.click();
  }
});


function navigate(page) {
  window.location.href = page; // Belirtilen sayfaya yönlendir
}


window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

backToTopBtn.addEventListener('keydown', e => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    backToTopBtn.click();
  }
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    alert('Lütfen tüm alanları doğru şekilde doldurun.');
    return;
  }

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if(name.length < 2) {
    alert('İsim en az 2 karakter olmalıdır.');
    form.name.focus();
    return;
  }
  if(message.length < 10) {
    alert('Mesaj en az 10 karakter olmalıdır.');
    form.message.focus();
    return;
  }
  alert('Mesajınız başarıyla gönderildi. Teşekkür ederiz!');
  form.reset();
});

const hero = document.getElementById('hero');
const images = [
  'https://salkimorman.com.tr/images/07082019072047_salkim-orman.jpg',
  'https://www.keresteci.com/wp-content/uploads/2019/08/1.png',
  'https://www.keresteci.com/wp-content/uploads/2019/08/2.png',
  'https://www.keresteci.com/wp-content/uploads/2019/08/3-1.png',
  'https://salkimorman.com.tr/images/kereste-bg.jpg',
  'https://i0.wp.com/www.yolcam.com/wp-content/uploads/2018/06/kereste4-717x717.jpg'
];
let currentIndex = 0;  //hvbjhvhjv
let intervalId = null;

function showImage(index) {
  if(index < 0) index = images.length - 1;
  if(index >= images.length) index = 0;
  currentIndex = index;
  hero.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}

function resetInterval() {
  if(intervalId) clearInterval(intervalId);
  intervalId = setInterval(nextImage, 2000);
}

document.getElementById('nextBtn').addEventListener('click', () => {
  nextImage();
  resetInterval();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  prevImage();
  resetInterval();
});

showImage(0);
resetInterval();













