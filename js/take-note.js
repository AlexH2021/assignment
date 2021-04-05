// define button
const btn_chTheme = document.querySelector('.ch-theme');
const btn_cancel = document.querySelector('.btn-cancel');
const btn_save = document.querySelector('.btn-save');
const new_note = document.querySelector('.btn-note');
const text_holder = document.querySelector('#text-area');
const note_list = document.querySelector('.note-list');

//using local storage to store data
notesArray = [
    { title: "note one", body: "this is my first note" },
    { title: 'note two', body: 'this is my second note' }
];

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
    let value = text_holder.value;
    if (text_holder.value.trim().length > 0) {
        // add new note to array
        let title = prompt('Enter title of the note');
        notesArray.push({ title, value });

        // create new li, a tags to hold note
        const newLi = document.createElement('li');
        const newA = document.createElement('a');
        const newContent = document.createTextNode(title);
        newA.appendChild(newContent);
        newLi.appendChild(newA);
        new_id_for_a = title.split(' ');
        title = new_id_for_a.join('-')
        newA.setAttribute('id', title);
        newA.setAttribute('href', '#');

        // add new note to note list
        note_list.appendChild(newLi);
    }
}

function displayNote(clicked_id) {
    /* display note into textarea when clicked on note list */

}

// on click
btn_chTheme.addEventListener('click', chTheme);
btn_cancel.addEventListener('click', hideNote);
new_note.addEventListener('click', showNote);
btn_save.addEventListener('click', saveNote);