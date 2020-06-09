// debounce function is used to prevent events from
// firing off too many times - for instance scroll event
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        const sliderInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // Distance: Bottom of image to top of window
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = sliderInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide));