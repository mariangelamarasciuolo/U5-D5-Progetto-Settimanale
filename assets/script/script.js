function handleScroll() {
    const navbarFixed = document.querySelector(".navFixed");
    const scrollThreshold = 200;
  
    if (window.pageYOffset > scrollThreshold) {
      navbarFixed.style.display = "flex";
    } else {
      navbarFixed.style.display = "none";
    }
  }
  
  window.addEventListener("scroll", handleScroll);
 
  
  function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function updateOpacityOneByOneRandomly() {
  const groups = document.querySelectorAll('svg g');
  let count = 0;
  let opacitySetToOne = [];
  
  const interval = setInterval(updateNext, 10);

  setTimeout(() => {
  clearInterval(interval);
  }, groups.length * 100); 

  function updateNext() {
  const randomIndex = getRandomInt(0, groups.length - 1);
  const currentGroup = groups[randomIndex];
  const opacityValue = parseFloat(currentGroup.getAttribute('opacity'));
  

  if (opacityValue === 0) {
    currentGroup.animate({
      opacity: 1
    }, {
      duration: 1000
    });
    opacitySetToOne.push(currentGroup);
  }

  if (opacityValue === 1 && count === 20) {
    for (let i = 0; i < opacitySetToOne.length; i++) {
      opacitySetToOne[i].animate({
        opacity: 0
      }, {
        duration: 1000
      });
    }
    opacitySetToOne = [];
    count = 0;
  }
  }
  }

  setTimeout(updateOpacityOneByOneRandomly, 1000);