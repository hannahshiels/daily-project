const btn = document.querySelector('.btn');
btn.addEventListener('click', showNote);
const secretNoteContainer = document.querySelector('.secret-note-container');

function showNote() {
    secretNoteContainer.classList.toggle('visible')

    setTimeout(function() {
        secretNoteContainer.classList.add('visible');
    }, 200);
}