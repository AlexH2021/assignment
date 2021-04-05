// define button
const btn_chTheme = document.querySelector('.ch-theme');
const btn_cancel = document.querySelector('.btn-cancel');
const btn_save = document.querySelector('.btn-save');
const new_note = document.querySelector('.btn-note');
const text_holder = document.querySelector('#text-area');

//using local storage to store data
localStorage.clear()
localStorage.setItem('note-one', 'note one')
localStorage.setItem('note-two', 'note two')

function chTheme() {
    /* when click change text, class to theme accordingly */
    // define theme button
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

function hideNote() {
    /* hide the text area, save, and cancel buttons */
    text_holder.classList.toggle("hide");
    btn_save.classList.toggle("hide");
    btn_cancel.classList.toggle("hide");
}

function showNote() {
    if (text_holder.classList.contains('hide')) {
        text_holder.classList.toggle("hide");
        btn_save.classList.toggle("hide");
        btn_cancel.classList.toggle("hide");
    } else {
        clearText();
    }
}

function clearText() {
    text_holder.value = '';
}

function saveNote() {
    /* save note into local storage */
    document.querySelector('#note-list').insertAdjacentHTML(
        'afterbegin',
        `<li><a id="` + new_note.value + `" onclick="showNote(this.id);" href="#">` + text_holder.value + `</a></li>`
    )
    localStorage.setItem(new_note.value, text_holder.value)
    clearText()
}

function displayNote(clicked_id) {
    /* display note into textarea when clicked on note list */
    clearText()
    new_note.value = localStorage.key(clicked_id);
    text_holder.innerHTML = localStorage.getItem(clicked_id);
}

// on click
btn_chTheme.addEventListener('click', chTheme);
btn_cancel.addEventListener('click', hideNote);
new_note.addEventListener('click', showNote);
btn_save.addEventListener('click', saveNote);