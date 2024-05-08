const darkModeButton = document.getElementById("darkMode");

const darkIcon = document.getElementById("iconMode");

const logo = document.querySelector("img");

const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    if (isDarkModeEnabled) {
        document.body.classList.add('dark-mode');
        darkIcon.classList.remove('fa-sun');
        darkIcon.classList.add('fa-moon');  
        logo.src = "./assets/images/logo-dark.png";
    }

darkModeButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  const isDarkModeEnabled = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkModeEnabled', isDarkModeEnabled);

  if (document.body.classList.contains('dark-mode')){
    darkIcon.classList.remove('fa-sun');
    darkIcon.classList.add('fa-moon');  
    logo.src = "./assets/images/logo-dark.png";
  } else{
    darkIcon.classList.remove('fa-moon');
    darkIcon.classList.add('fa-sun');
    logo.src = "./assets/images/logo-light.png";
  }
});