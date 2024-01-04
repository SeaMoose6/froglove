const productList = document.querySelectorAll('.product')
const priceList = document.querySelectorAll('.item_price')
const shopBtnList = document.querySelectorAll('.shop-btn')


productList.forEach(product => {
    product.addEventListener('mouseover', () =>{
        let index = product.id
        shopBtnList[index].style.display='block'
        priceList[index].style.display='none'
    })
    product.addEventListener('mouseout', () =>{
        let index = product.id
        shopBtnList[index].style.display='none'
        priceList[index].style.display='block'
    })
});