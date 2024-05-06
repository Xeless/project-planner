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

darkModeButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
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