let btn_dark = document.getElementById('btn-dark');
let btn_light = document.getElementById('btn-light');
let btn_save = document.getElementById('btn-save');
let btn_cancel = document.getElementById('btn-cancel');
let btn_note = document.getElementById('btn-note');
let text_holder = document.getElementById('text-area');

function chTheme() {

    if (btn_light) {
        // change theme to dark
        document.querySelector('#btn-light').textContent = 'Light Theme';
        document.querySelector('#btn-light').setAttribute('id', 'btn-dark');
        document.querySelector('#body-light').setAttribute('id', 'body-dark');
        document.querySelector('#side-bar-light').setAttribute('id', 'side-bar-dark');
    }

    if (btn_dark) {
        // change theme to light
        document.querySelector('#btn-dark').textContent = 'Dark Theme';
        document.querySelector('#btn-dark').setAttribute('id', 'btn-light');
        document.querySelector('#body-dark').setAttribute('id', 'body-light');
        document.querySelector('#side-bar-dark').setAttribute('id', 'side-bar-light');
    }
}

function interactBtn() {

    if (btn_note) {}

    if (btn_save) {

    }

    if (btn_cancel) {
        text_holder.value = '';
    }
}