  
  function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; // Stop the function
    audio.currentTime = 0; // Rewind to the start
    audio.play()
    key.classList.add('playing');
  }
  
  function removeTransition(e) {
    // Skip the transition if it is not a transform
    // Don't have to look at other transitions
    // transform is usually the longer one. We skip the rest
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll(".key");

  // Attach a transitionend event listener to all keys
  // For each key, remove transitions (there could be multiple tranisitons per key)
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))

  window.addEventListener("keydown", playSound);