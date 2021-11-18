const choose = document.querySelectorAll('.pprimary');
const block = document.querySelectorAll('.block');
const activeColor = document.querySelectorAll('.pprimary');




activeColor.forEach(elementsActive => {
    elementsActive.addEventListener('click', () => {
        const activeC = document.querySelectorAll('.pprimary');
        activeC.forEach(e => {
            e.classList.remove('active-color')
        })
        
        elementsActive.classList.add('active-color');
    })
})

choose.forEach(elem => {
    elem.addEventListener('click', () => {
        const index = elem.getAttribute('data-choose');
        const activeBlockElem = document.querySelectorAll(`[data-show='${index}']`);
        block.forEach(el => {
            el.classList.remove('active');
        })
        activeBlockElem.forEach(item => {
            item.classList.add('active')
        })
        
    })
})