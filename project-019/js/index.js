const imgSrcs = ['https://sftextures.com/texture/6344/0/6345/pink-zinnia-daisy-flower-yellow-stamen-center-colorful-garden-plant-isolated-transparent-background-texture-256x256.png', 'https://sftextures.com/texture/6726/0/6725/dandelion-yellow-summer-flower-visible-center-layered-garden-weed-plant-transparent-background-256x256.png', 'https://sftextures.com/texture/1619/0/1618/white-rose-flower-beautiful-blades-light-leaves-rose-half-closed-center-transparent-alpha-masked-texture-256x256.png', 'https://sftextures.com/texture/6084/0/6083/yellow-fluffy-dandelion-flower-transparent-background-bright-weed-plant-256x256.png', 'https://sftextures.com/texture/5118/0/5116/dandelion-white-head-flower-closeup-round-puff-stuff-open-weed-plant-transparent-texture-256x256.png']
const imgHolder = document.querySelector('img');


document.addEventListener('click', function() {
    for (let i = 0; i < imgSrcs.length; i++) {
        let j = i;
        setTimeout(function() {
            imgHolder.setAttribute('src', imgSrcs[i]);
        }, 1000 * (j + 1));

    }
});