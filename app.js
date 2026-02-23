// Foto de perfil dinâmica (a cada refresh)
  const profileImages = [
    "assets/img/profile/p-01.jpg",
    "assets/img/profile/p-02.jpg",
    "assets/img/profile/p-03.jpg"
  ];

  const expIcons = [
    "assets/svg/exp-icons/arrow.svg",
    "assets/svg/exp-icons/arrow1.svg"
  ];

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const profile = document.getElementById("profile-photo");
  if (profile && profileImages.length) {
    profile.src = pickRandom(profileImages);
  }
