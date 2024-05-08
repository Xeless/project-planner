const darkModeButton = document.createElement("button");
darkModeButton.id = "darkMode";
const darkIcon = document.createElement("i");
darkIcon.id = "iconMode";
darkIcon.classList.add("fa-solid");
darkIcon.classList.add("fa-sun");
darkIcon.classList.add("fa-beat");
darkModeButton.appendChild(darkIcon);
document.body.appendChild(darkModeButton);

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