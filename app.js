const eduButton = document.querySelector('#edu_btn')
const expButton = document.querySelector('#exp_btn')
const awdButton = document.querySelector('#awd_btn')

const exp = document.querySelector('#experience')
const edu = document.querySelector('#education')
const awd = document.querySelector('#awards')

const navScroll = function () {
    window.scroll(0, exp.scrollHeight);
}

eduButton.addEventListener('click', (event) => {
    window.scrollTo(0, edu.offsetTop - 50);
})

expButton.addEventListener('click', (event) => {
    window.scrollTo(0, exp.offsetTop - 50);
})

awdButton.addEventListener('click', (event) => {
    window.scrollTo(0, awd.offsetTop - 50);
})


const expContainersList = document.querySelectorAll('.exp_container');
const expInfoList = document.querySelectorAll('.exp_aux_info');
const expImgList = document.querySelectorAll('exp_img')

for (let element = 0; element < expContainersList.length; element++) {
    const container = expContainersList[element]
    const assocInfo = expInfoList[element];
    const assocImg = expImgList[element]
    console.log(assocInfo);
    container.addEventListener('mouseenter', function (event) {
        assocInfo.classList.remove('hidden');
        assocImg.style.filter = 'blur';
    })
    container.addEventListener('mouseleave', function (event) {
        assocInfo.classList.add('hidden');
        assocImg.style.filter = '';
    })
}

const scrollBtn = document.getElementById('scroll-up-btn');

scrollBtn.addEventListener('click', (event) => {
    window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 1000) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    })
});
