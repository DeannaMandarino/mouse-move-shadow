const container = document.querySelector('.container');
const text = document.querySelector('.container__title');
const walk = 25;

function shadow(event) {
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  let x = event.offsetX;
  let y = event.offsetY;

  if (this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }

  // Calculate the walk values, ensuring they stay within the bounds
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  // Apply the shadow effect
  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, 0.25)`;
}

// Adds event listener to the container
container.addEventListener('mousemove', shadow);