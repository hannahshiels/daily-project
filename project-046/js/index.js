const image = document.querySelector('.img');


const imageFilters = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.filterButton');
const removeFilterBtn = document.querySelector('.removeFilter');

const randomImgBtn = document.querySelector('.randomImgBtn');
randomImgBtn.addEventListener('click', showRandomImage);
const randomImgs = ['https://www.publicdomainpictures.net/pictures/20000/nahled/funny-cat-871298226790TvQ.jpg', 'https://live.staticflickr.com/7472/15914923231_96f1630878_b.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Do_i_look_funny_or_something.jpg/1024px-Do_i_look_funny_or_something.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Funny_Kitten.jpg/640px-Funny_Kitten.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEKJAIOLkiycS1HTZDcXXlM_n3gz3Dgjk47FdHh1t_KKiZj2LA', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWEDHfuSFCIQQdSxDTfToGpOc5OsxG9o16PDcCuYyfI-oZpNYE', 'https://storage.needpix.com/rsynced_images/freaked-out-2015245_1280.jpg', 'https://live.staticflickr.com/65535/47925720796_dfaae49c3f_b.jpg', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vibrant-red-and-yellow-gazania-flower-royalty-free-image-594915222-1554736685.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Nelumno_nucifera_open_flower_-_botanic_garden_adelaide2.jpg/1024px-Nelumno_nucifera_open_flower_-_botanic_garden_adelaide2.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Unknown_flower_02.jpg/400px-Unknown_flower_02.jpg', 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd21-rp-t-1916-42-jj_1.jpg?w=800&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=90112a4e96e44dc1d5d0f348d141ae93', 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg'];

function showRandomImage() {
    image.id = '';
    imageFilters.classList.remove('active');
    let randomNum = Math.floor(Math.random() * randomImgs.length);
    image.setAttribute('src', randomImgs[randomNum]);
    removeErrorMessages();
}


function removeErrorMessages() {
    labelFormat.innerHTML = '';
    labelNoInput.innerHTML = '';
}
const input = document.querySelector('.input');
const labelNoInput = document.querySelector('.labelNoInput');
const labelFormat = document.querySelector('.labelFormat');

const button = document.querySelector('.btn')
const form = document.querySelector('form');


form.addEventListener('submit', validateForm)

function validateForm(e) {
    showImage(e);

}

button.addEventListener('click', showImage);

filterButtons.forEach(function(btn) {
    btn.addEventListener('click', filterImage);
})

removeFilterBtn.addEventListener('click', function() {
    image.id = '';
})

function filterImage() {
    const filter = this.id;
    image.setAttribute('id', filter);
}

function showImage(e) {
    e.preventDefault();
    labelFormat.innerHTML = '';
    image.id = '';
    imageFilters.classList.remove('active');

    const url = input.value;
    checkInput(url);

    image.addEventListener('error', imageError);

    image.setAttribute('src', '');
    image.setAttribute('src', url);
    input.value = '';
}

function checkInput(url) {

    if (url === '') {
        labelNoInput.innerHTML = 'Enter an image url';
        imageFilters.classList.add('active');
    } else if (labelNoInput.innerHTML !== '') {
        labelNoInput.innerHTML = '';
    }
}

function imageError() {
    labelFormat.innerHTML = 'Enter correct format';
    imageFilters.classList.add('active');
}