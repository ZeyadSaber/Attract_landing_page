const _nav = document.querySelector('.navbar');
let nums = document.querySelectorAll(".counter-num");
let section = document.querySelector("#services .section-title");
let services = Array.from(document.querySelectorAll('.service'));

window.addEventListener('scroll', () => {
    if(window.scrollY > _nav.scrollHeight){
        _nav.classList.add('nav-scroll');
    }else if(window.scrollY <= window.innerHeight){
        _nav.classList.remove('nav-scroll');
    }
    for (let i = 0; i < services.length; i++) {
      const element = services[i];
      if (window.scrollY > element.clientHeight) {
            setTimeout(() => {
              element.classList.add('go-inside')
            }, i*2000);
        }
      }
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