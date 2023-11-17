var orderBtn = document.querySelector(".box__order .button__order");
var menuPad = document.querySelector(".box__work .text__menu");
var menuIdx = 0;
const menuList = ["에스프레소", "아메리카노", "카페라떼"];
var ingBtns = document.querySelectorAll(".button__ingredient");
const espressoIng = document.querySelector("#espresso");
const waterIng = document.querySelector("#water");
const milkIng = document.querySelector("#milk");
var espressoIngCount = 0;
var waterIngCount = 0;
var milkIngCount = 0;
const completeBtn = document.querySelector(".button__complete");
var commentBox = document.querySelector(".box__customer");
var comment = document.querySelector(".box__customer .text__comment");
var workBox = document.querySelector(".box__work");
var resetBtn = document.querySelector(".button__reset");

orderBtn.addEventListener("click", function(){
    workBox.classList.add("box__work--active");
    orderBtn.style.display="none";
    var randomIdx = Math.floor(Math.random()* menuList.length);
    menuPad.innerHTML = menuList[randomIdx];
    menuIdx = randomIdx;
});
completeBtn.addEventListener("click", function(){
    completeFunc();
})
espressoIng.addEventListener("click", function(){
    espressoIngCount+=1;
})
waterIng.addEventListener("click", function(){
    waterIngCount+=1;
})
milkIng.addEventListener("click", function(){
    milkIngCount+=1;
})
var makeEsp = function(){
    commentBox.style.display="block";
    if(espressoIngCount == 2){
        comment.innerHTML = "⭐⭐⭐⭐⭐<br/>너무 맛있네여~"
    }else{
        comment.innerHTML = "지금 뭐하시는거에요??? 😲"
    }
}
var makeAme = function(){
    commentBox.style.display="block";
    if(espressoIngCount == 2 && waterIngCount == 1){
        comment.innerHTML = "⭐⭐⭐⭐⭐<br/>너무 맛있네여~"
    }else{
        comment.innerHTML = "지금 뭐하시는거에요??? 😲"
    }
}
var makeLatte = function(){
    commentBox.style.display="block";
    if(espressoIngCount == 2 && milkIngCount == 1){
        comment.innerHTML = "⭐⭐⭐⭐⭐<br/>너무 맛있네여~"
    }else{
        comment.innerHTML = "지금 뭐하시는거에요??? 😲"
    }
}

var completeFunc = function(){
    if(menuIdx == 0){
        makeEsp();
    }else if(menuIdx == 1){
        makeAme();
    }else if(menuIdx == 2){
        makeLatte();
    }
    resetBtn.classList.add("button__reset--active");
}
