const select = document.querySelectorAll('.selectItem .select');
const selectImg = document.querySelectorAll('.selectedImg img');
let index = 0;

let current = 0;

select.forEach((el, i) => {
    el.addEventListener('click' , () => {
        removeClass(select, 'active');
        el.classList.add('active');

        index = i;

        action(current, i);
        current = i;
    })
})

setInterval(() => {
    
    removeClass(select, 'active');
    select[index].click() ;
    
    index ++;
    index = (index == select.length ? 0 : index);
}, 3000)

function removeClass(elements, classW){
    elements.forEach((element) => {
        element.classList.remove(classW);
    })
}

function action(cur, index){
    removeClass(selectImg, 'tr');
    selectImg[cur].classList.add('tr');
    selectImg[index].classList.add('tr');

    if ( cur > index ){
        for (let x = index + 1 ; x <= cur ; x++){
            selectImg[x].style.transform = 'translateY(100%)';
        }
        selectImg[index].style.transform = 'translateY(0%)';
    } else if (cur < index){
        for (let x = cur ; x < index ; x++){
            selectImg[x].style.transform = 'translateY(-100%)';
        }
        selectImg[index].style.transform = 'translateY(0%)';
    }
}