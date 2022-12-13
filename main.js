const textBlock = document.querySelector('.text');
const flatBlock = document.querySelector('.flat_block');
textBlock.onmouseenter = () => {
    flatBlock.classList.toggle('active');
}
textBlock.onmouseleave = () => {
    flatBlock.classList.toggle('active');
}
