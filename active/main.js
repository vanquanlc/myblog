var btnMenu = document.querySelector(".header__menu--btn")

function ShowMenu() {
    document.querySelector("#fill").style = 'display: block;'
    document.querySelector(".header__navbar-list--menu").style = 'display: block;';
    document.querySelector(".header__navbar-list").style = 'display: block;'
    document.querySelector(".header__navbar-list").classList.add('header__navbar-list--mobile')

}

btnMenu.addEventListener('click', ShowMenu)

var btnClose = document.querySelector("#close");
var fill = document.querySelector("#fill");


function Close(closeItems) {
    document.querySelector(".header__navbar-list").classList.remove('header__navbar-list--mobile');
    
    var index = 0;
    for (let index = 0; index < closeItems.length; index++) {
        document.querySelector(closeItems[index]).style = 'display: none;';
    }

}

function intermediaryClose() {
    var CloseItems = [
        "#fill",
        ".header__navbar-list",
        ".header__navbar-list--menu"
    ]
    Close(CloseItems)
}



btnClose.addEventListener('click', intermediaryClose)
fill.addEventListener('click', intermediaryClose)



  
  
  
  
  
  
  