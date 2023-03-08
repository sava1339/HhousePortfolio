const houseName = document.getElementById('inputNameHouse')
const priceData = document.getElementById('inputPriceHouse')
const houseM = document.getElementById('inputMHouse')
const houseCountry = document.getElementById('inputCountry')
const houseRegion = document.getElementById('inputRegion')
const houseTown = document.getElementById('inputTown')
const houseTel = document.getElementById('inputTel')

const centerInput = document.getElementById('centerInput')
const EnterValueHouse = () => {
    if(houseName !== ""|| priceData !== ""|| houseM !== ""||houseCountry!== ""||houseRegion!== ""||houseTown!== ""||houseTel!== ""){
    var houseInfo = [houseName.value,priceData.value,houseM.value,houseCountry.value,houseRegion.value,houseTown.value,houseTel.value]        
    }else if(document.getElementById('error')){
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }else{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
        centerInput.insertAdjacentHTML (
            'afterbegin',
            `<p class='font' id='error'>Заполнены не все поля!<p>`
        )
        houseName.style.outlineStyle = "solid"
        priceData.style.outlineStyle = "solid"
        houseM.style.outlineStyle = "solid"
        houseCountry.style.outlineStyle = "solid"
        houseRegion.style.outlineStyle = "solid"
        houseTown.style.outlineStyle = "solid"
        houseTel.style.outlineStyle = "solid"
    }
}