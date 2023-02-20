const _nav = document.querySelector('.navbar');
let nums = document.querySelectorAll(".counter-num");
let section = document.querySelector(".surgeries");
let started = false;

window.addEventListener('scroll', () => {
    if(window.scrollY > _nav.scrollHeight){
        _nav.classList.add('nav-scroll');
    }else if(window.scrollY <= window.innerHeight){
        _nav.classList.remove('nav-scroll');
    }
    // if (window.scrollY > section.scrollHeight) {
    //     if (!started) {
    //       nums.forEach((num) => startCount(num));
    //     }
    //     started = true;
    //   }
});

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 10/goal);
  }