
function _load () {
    //console.log ("Hello World");
    
    const rootElement = document.getElementById("root");
    console.log(rootElement);

    rootElement.classList.add("loaded");

    console.log(window);
    console.log(document);
    console.log(rootElement.classList);


    rootElement.innerHTML = `
        <button class="btn btn-2">Click on me</button>
        <button class="btn">Click on me</button>
        <button class="btn">Click on me</button>
        <button class="btn">Click on me</button>
        <button class="btn">Click on me</button>
        <button class="btn">Click on me</button>
        <button class="btn">Click on me</button>
    `;    
    

    const buttonElementsQ = document.querySelectorAll(".btn");
    console.log(buttonElementsQ.classList);
    
    const buttonElementsG = document.getElementsByClassName("btn");
    console.log(buttonElementsG);
    
    // buttonElements[0].classList.remove("btn");
    // console.log(buttonElements[0]);
    
    console.log(buttonElementsQ.length);

    for (let i=0; i < 10 ; i++ ) {
        let imgElement = document.createElement('img');
        imgElement.setAttribute("src", `${i+1}.png`);
        rootElement.appendChild(imgElement);
    } 

    let inputElement = `
        <input placeholder="Write your name here"/>
    `;

    console.log(buttonElementsQ.length)
    for (let index=0; index < buttonElementsQ.length; index++) {
        //rootElement.innerHTML += inputElement;
        rootElement.insertAdjacentHTML("afterend", inputElement)

    }

}
window.addEventListener("load", _load);


