// script.js
(function(){
  const profilePhotos = [
    "./assets/img/profile/1.jpg",
    "./assets/img/profile/2.jpg",
    "./assets/img/profile/3.jpg"
  ];

  const circleClasses = ["c1","c2","c3"];
  const expMasks = [
    "./assets/svg/exp-icons/arrow.svg",
    "./assets/svg/exp-icons/arrow1.svg"
  ];

  function pick(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const img = document.getElementById("profilePhoto");
  if(img) img.src = pick(profilePhotos);

  document.querySelectorAll(".js-circle").forEach(el=>{
    el.classList.remove(...circleClasses);
    el.classList.add(pick(circleClasses));
  });

  document.querySelectorAll(".js-expicon").forEach(el=>{
    const url = pick(expMasks);
    el.style.webkitMaskImage = `url("${url}")`;
    el.style.maskImage = `url("${url}")`;
  });
})();
