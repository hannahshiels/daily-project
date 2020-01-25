const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
btn.addEventListener('click', addNote);
const input = document.querySelector('.text');

function addNote() {
    let value = input.value;
    let newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.innerHTML = '<div class="note-body"> <p>' + value + '</p></div>';
    container.append(newNote);
    input.value = '';

}