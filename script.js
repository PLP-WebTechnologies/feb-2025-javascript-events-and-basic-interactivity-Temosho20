//Event handling
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  button.textContent = 'Button clicked!';
  button.styele.background = 'green';
});

button.AddEventListener('dblclick', () => {
  button.textContent = 'Button double clicked!';
  button.style.background = 'blue';
});
 button.addEventListener('mouseover', () => {
   button.style.background = 'yellow';
 });

button.addEventListener('mouseout', () => {
  button.style.background = '';
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    console.log('Enter key pressed!');
  }
});

//Image gallery
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentImage = 0;
const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('pre-button');
const nextButton = document.getElementById('next-button');

prevButton.addEventListener('click', () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  galleryImage.src = images[currentImage];
});

nextButton.addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  galleryImage.src = images[currentImage];
});

//Form validation
const form = document.getElementById('myForm';
const usernameInput = document.getElementElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  if (!usernameInput.value || ! emailInput.value || !passwordInput.value) {
    event.preventDefault();
    alert('Please fill out all fields!');
  }
  else if (passwordinput.value.length < 8){
    event.preventDefault();
    alert('Password must be at least 8 characters!);
  });
}
