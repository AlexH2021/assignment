// define button
const btn_chTheme = document.querySelector('.ch-theme');
const btn_cancel = document.querySelector('.btn-cancel');
const btn_save = document.querySelector('.btn-save');
const new_note = document.querySelector('.btn-note');
const text_holder = document.querySelector('#text-area');
const note_list = document.querySelector('.note-list');
const list_array = document.querySelectorAll('.note-list a');
const body_theme = document.querySelector('.body-theme');
const side_bar = document.querySelector('.side-bar');

//using local storage to store data
notesArray = [
    { title: "note one", body: "this is my first note" },
    { title: 'note two', body: 'this is my second note' }
];

function chTheme() {
    /* when click change text, class to theme accordingly */
    // define theme button
    if (btn_chTheme.textContent === 'Light Theme') {
        // change theme to dark
        btn_chTheme.textContent = 'Dark Theme';
        btn_chTheme.classList.toggle('btn-light');
        body_theme.classList.toggle('body-light');
        side_bar.classList.toggle('side-bar-light')
    } else {
        // change theme to light
        btn_chTheme.textContent = 'Light Theme';
        btn_chTheme.classList.toggle('btn-light');
        body_theme.classList.toggle('body-light');
        side_bar.classList.toggle('side-bar-light')
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

function promptUser() {
    let title = prompt('Enter title of the note');

    return title;
}

function saveNote() {
    /* save note into local storage */
    let body = text_holder.value;

    if (body.trim().length > 0) {
        // add new note to array
        let title = promptUser()
        if (title === null) {
            return; //break out of the function early
        }

        // if title already exist
        if (notesArray.find(item => item.title === title)) {
            alert('Title already exist!')
        } else {
            notesArray.push({ title, body });

            // create new li, a tags to hold note
            const newLi = document.createElement('li');
            const newA = document.createElement('a');
            const newContent = document.createTextNode(title);
            newA.appendChild(newContent);
            newLi.appendChild(newA);

            // separate title and transform and add to id
            new_id_for_a = title.split(' ');
            title = new_id_for_a.join('-')
            newA.setAttribute('id', title);
            newA.setAttribute('href', '#');

            // add new note to note list
            note_list.appendChild(newLi);
        }
    }
}

function editNote(value) {
    //edit note
    // let body = text_holder.value;

    // for (let item of notesArray) {
    //     if (item.title === body.trim()) {
    //         notesArray[item].body = body;
    //         title = item.title;
    //         return;
    //     }
    // }
}

function displayNote(e) {
    /* display note into textarea when clicked on note list */
    for (let item of notesArray) {
        if (item.title === e.target.innerText) {
            text_holder.value = item.body;
            break;
        }
    }
}

// on click
btn_chTheme.addEventListener('click', chTheme);
btn_cancel.addEventListener('click', hideNote);
new_note.addEventListener('click', showNote);
btn_save.addEventListener('click', saveNote);
note_list.addEventListener('click', displayNote);