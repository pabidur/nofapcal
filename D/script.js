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

//input year
const slideValue2 = document.getElementById("span3");
const inputSlider2 = document.getElementById("input3");
let value2 = inputSlider2.value;
slideValue2.textContent = inputSlider2.value;

slideValue2.style.left = (35+value2*8.695652173913043) + "px";

inputSlider2.oninput = (()=>{
  let value2 = inputSlider2.value;
  slideValue2.textContent = value2;
  slideValue2.style.left = (35+value2*8.695652173913043) + "px";

});

  


const resultLine = document.getElementById("resultLine")
function calculate(){
    var Orla = document.getElementById('Orla');

  
    sB12 = 0;
    if (Orla.checked){
      Orlav = 0.3
    }
    else {
      Orlav = 0

    }
    const day = inputSlider.value
    const month = (inputSlider1.value)*30
    const year = (inputSlider2.value)*360

    const days = Number(day)+Number(month)+Number(year)
    calculateB12 = Number(Orlav) + Math.round((days*3) + 0.5*(0.05*(days*days)))
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