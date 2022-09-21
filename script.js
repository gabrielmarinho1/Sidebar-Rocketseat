const menu = document.querySelector('#menu')
const display = document.querySelectorAll('.closed')

menu.addEventListener('click', function () {
    var closed = document.querySelectorAll('.closed')

    if (closed.length != 0) {
        open_sidebar(closed)
    }
    else {
        close_sidebar()
    }
})

function open_sidebar(closed) {
    closed.forEach(el => el.className = "opened")
    var sidebar = document.querySelector('.sidebar')
    sidebar.style.width = "20vw";
    var buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.style.width = '18vw')
}

function close_sidebar() {
    var opened = document.querySelectorAll('.opened')
    opened.forEach(el => el.className = "closed")
    var buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.style.width = 'inherit')
    var sidebar = document.querySelector('.sidebar')
    sidebar.style.width = "6vw";
}