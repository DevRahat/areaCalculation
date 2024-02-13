function calculatePentagonArea(){

    const base=getInputValueById('pentagon-width');

    const height=getInputValueById('pentagon-width');

    const area=0.5*base*height;

    setInnerTextById('pentagon-area',area);

}

// function getInputValueById(inputFieldId){
//     const inputField=document.getElementById(inputFieldId);
//     const inputValueText=inputField.value;
//     const inputValue=parseFloat(inputValueText);
//     return inputValue;
// }
// function setInnerTextById(elementId,area){
//     const element=document.getElementById(elementId);
//     element.innerText=area;
// }