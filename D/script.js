//input days
const slideValue = document.getElementById("span1");
const inputSlider = document.getElementById("input1");
let value = inputSlider.value;
slideValue.textContent = value;

slideValue.style.left = (35+value*19.35483870967742) + "px";

inputSlider.oninput = (()=>{
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (35+value*19.35483870967742) + "px";

});

//input months
const slideValue1 = document.getElementById("span2");
const inputSlider1 = document.getElementById("input2");
let value1 = inputSlider1.value;
slideValue1.textContent = inputSlider1.value;

slideValue1.style.left = (35+value1*50) + "px";

inputSlider1.oninput = (()=>{
  let value1 = inputSlider1.value;
  slideValue1.textContent = value1;
  slideValue1.style.left = (35+value1*50) + "px";

});

const resultLine = document.getElementById("resultLine")
function calculate(){
    sB12 = 0;
    const day = inputSlider.value
    const month = (inputSlider1.value)*30
    const days = Number(day)+Number(month)
    calculateB12 = Math.round((sB12) + (days*3) + 0.5*(0.05*(days*days)))
    document.querySelector(".title").classList.add("show")
    document.getElementById("results").classList.add("show")
    var resultim = document.querySelector( '.result' );
    resultim.scrollIntoView({behavior: "smooth", inline: "nearest"});
    document.getElementById('results').innerHTML=calculateB12+" cm"
    var hefresh = Number(calculateB12)-Number(0)
    resultLine.style.left = (hefresh*7.5) + "px";
    if (calculateB12>10){
      resultLine.style.backgroundColor="green"
    }
    else{
      resultLine.style.backgroundColor="red"

    }




}