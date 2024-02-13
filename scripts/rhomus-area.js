function calculateRhombusArea(){

    const base=getInputValueById('rhombus-width');

    const height=getInputValueById('rhombus-height');

    const area=.5*base*height;
    setInnerTextById('rhombus-area',area);

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