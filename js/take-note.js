function chDarktheme() {
    let btn_dark = document.getElementById('btn-dark');
    let btn_light = document.getElementById('btn-light');

    if (btn_dark) {
        // change color to dark theme
        document.body.style.background = '#393552';
        document.getElementById('side-bar').style.background = '#817c9c';
        document.body.style.color = '#e0def4';

        // change the button text, id to light theme
        document.querySelector('#btn-dark').textContent = 'Light Theme';
        document.querySelector('#btn-dark').setAttribute('id', 'btn-light');
    }

    if (btn_light) {
        // change color to light theme
        document.body.style.background = '#f2e9de';
        document.getElementById('side-bar').style.background = '#faf4ed';
        document.body.style.color = '#286983';

        // change the button text, id dark theme
        document.querySelector('#btn-light').textContent = 'Dark Theme';
        document.querySelector('#btn-light').setAttribute('id', 'btn-dark');
    }
}

function interactBtn() {
    let btn_save = document.getElementById('btn-save');
    let btn_cancel = document.getElementById('btn-cancel');
    let btn_note = document.getElementById('btn-note');
    let text_holder = document.getElementById('text-area');

    if (btn_note) {}

    if (btn_save) {

    }

    if (btn_cancel) {
        text_holder.value = '';
    }
}