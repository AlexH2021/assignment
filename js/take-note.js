const btn_chTheme = document.querySelector('.ch-theme');
const btn_cancel = document.querySelector('.btn-cancel');
const btn_save = document.querySelector('.btn-save');

let note_title = document.getElementById('btn-note');
let text_holder = document.getElementById('text-area');
localStorage.clear()
localStorage.setItem('note-one', 'note one')
localStorage.setItem('note-two', 'note two')

function chTheme() {
    let btn_dark = document.getElementById('btn-dark');
    let btn_light = document.getElementById('btn-light');
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

function clearText() {
    note_title.value = '';
    text_holder.value = '';
}

function saveNote() {
    document.querySelector('#note-list').insertAdjacentHTML(
        'afterbegin',
        `<li><a id="` + note_title.value + `" onclick="showNote(this.id);" href="#">` + text_holder.value + `</a></li>`
    )
    localStorage.setItem(note_title.value, text_holder.value)
    clearText()
}

function showNote(clicked_id) {
    clearText()
    note_title.value = localStorage.key(clicked_id);
    text_holder.innerHTML = localStorage.getItem(clicked_id);
}

// on click
btn_chTheme.addEventListener('click', chTheme);
btn_cancel.addEventListener('click', clearText)
btn_save.addEventListener('click', saveNote)