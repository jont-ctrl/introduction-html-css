const spinBtn = document.querySelector('#spinBtn');
const forestImg = document.querySelector('#forestImg');

console.log('Hello World');

spinBtn.addEventListener('click', () => {
  // Needed short timer between remove and add for repeat animation to work
  forestImg.classList.remove('forestImgClass');

  setTimeout(() => {
    forestImg.classList.add('forestImgClass');
  }, 10);
});
