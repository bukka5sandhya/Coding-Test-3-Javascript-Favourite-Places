let favouritePlacesEle = document.getElementById("favouritePlaces");
let lucknowEle = document.getElementById("lucknow");
let agraEle = document.getElementById("agra");
let varanasiEle = document.getElementById("varanasi");
let submitBtnEle = document.getElementById("submitBtn");
let messageEle = document.getElementById("message");

submitBtnEle.onclick = function(){
    if(lucknowEle.checked){
        messageEle.textContent = "Your Favourite place is Lucknow";
    }else if(agraEle.checked){
        messageEle.textContent = "Your Favourite place is agra";
    } else if(varanasiEle.checked){
        messageEle.textContent ="Your Favourite place is varanasi";
    }
}
favouritePlacesEle.addEventListener("submit",function(event){
    event.preventDefault();
});