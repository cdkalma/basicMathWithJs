const inputPrice = document.querySelector('#price')
const inputCoupon = document.querySelector('#coupon')
const btn = document.querySelector('#calcular')
const pResult = document.querySelector('#result')

const discounts = {
    blackCrusu: 50,
    kotaNewYear: 35,
    birthDay: 25,
}

btn.addEventListener('click', calcularPrecioConDescuento)

function calcularPrecioConDescuento() {
    let price = Number(inputPrice.value)
    let coupon = discounts[inputCoupon.value]
    
    if (price > 0 && coupon == undefined)
    {
        return pResult.innerText = 'ingresa un cupón valido'
    }
    if (!price || !coupon){
        pResult.innerText = 'Por favor llena el formulario'
    } else {
        let newPrice = (price * (100 - coupon)) / 100
        pResult.innerText = 'El nuevo precio con descuento es $' + newPrice
    }
}