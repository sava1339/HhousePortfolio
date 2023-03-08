class home{
    constructor(width,price){
        this.width = width;
        this.price = price
    }
};
console.log(innerWidth);
const aside = document.querySelector("aside");
const clLogo = () => {
    if (aside.classList.contains("open")){
        aside.classList.remove("open");
        aside.innerHTML = "";
    }else {
        aside.classList.add("open");
        aside.insertAdjacentHTML(
            "afterbegin",
            `
            <img onclick="clLogo()" class="imgLogo marginLeft" id="asideImg" src="SVG/res3.svg"></img>
            <p class=" font" id="asideLogoText">Hhouse<p>
            <ul class="marginLeft font floatRight" id="asideText">
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z"></path></svg>Личный кабинет<li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 24 24" width="24" fill="currentColor"><path d="M18 4V2H2v2h16zm0 3H2v5h16V7zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm2 9h1a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2zm5 0h5a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z"></path></svg>Способ оплаты<li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 24 24" width="24" fill="currentColor"><path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path></svg>Выйти<li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" width="24" fill="currentColor"><path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm2 1h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 12h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2z"></path></svg>Сотрудничество<li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-10a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>О нас<li>
            </ul>
            `
        );
        const asideUl = aside.querySelector("ul");
        asideUl.hidden = true;
        asideUl.style.fontSize = "0px";
        aside.querySelector("p").style.fontSize = "0px";
        setTimeout(()=>{
            asideUl.hidden = false;
        },100)
        setTimeout(()=>{
            asideUl.style.fontSize = "20px";
            aside.querySelector("p").style.fontSize = "18px";
        },110);
    };
};