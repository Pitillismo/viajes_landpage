

document.addEventListener('DOMContentLoaded', (event) => {
    const headerEl = document.querySelector('header');
    const headerWrapEl = document.querySelector('.wrapHead');
    const navEl = document.querySelector('nav');
    
    
    const onScroll = () => {
      if (window.scrollY > 60) {
        headerEl.classList.add('fixed-to-top');
        headerWrapEl.classList.add('fixed-to-top');
        navEl.classList.add('fixed-to-top');
      } else {
        headerEl.classList.remove('fixed-to-top');
        headerWrapEl.classList.remove('fixed-to-top');
        navEl.classList.remove('fixed-to-top');
      }
    };
  
    
    window.addEventListener('scroll', onScroll);
  
    
    document.querySelectorAll('.scroll').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });
  