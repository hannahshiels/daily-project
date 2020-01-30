const btn = document.querySelector('.btn');
const sections = document.querySelectorAll('section');
const body = document.querySelector('body');

btn.addEventListener('click', function() {
    body.style.maxHeight = '100vh';
    body.style.overflow = 'hidden';
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-container', 'flex-col', 'center-both');
    newDiv.innerHTML = `<h3> Sign Up to our Newsletter to continue! </h3> 
    <form class="mt-2"> 
    <input placeholder="Enter your email" type="email" name="" id="">
    <button type="submit"> Sign Up! </button>
    </form>`;
    body.appendChild(newDiv);
    sections.forEach(function(section) {
        section.classList.add('gray');
    });
    btn.remove()
});