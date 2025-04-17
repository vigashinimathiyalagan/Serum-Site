function toggleLike() {
  const heart = document.getElementById('like');
  heart.classList.toggle('liked');
  heart.textContent = heart.classList.contains('liked') ? '❤️' : '♡';
}

function buyNow() {
  alert("Yay! Added to cart 💖");
}
