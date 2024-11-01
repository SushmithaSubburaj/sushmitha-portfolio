
document.addEventListener("DOMContentLoaded", function () {
  const skillBars = document.querySelectorAll(".skill-bar .progress");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          const progressBar = entry.target;
          if (entry.isIntersecting) {
             
              progressBar.style.width = progressBar.getAttribute("data-progress");
          } else {
              
              progressBar.style.width = "0";
          }
      });
  }, { threshold: 0.5 }); 

  
  skillBars.forEach((bar) => observer.observe(bar));
});

