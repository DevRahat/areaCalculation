function calculateRectangleArea(){
    // Rectangle width
    const rectangleWidthInput =document.getElementById('rectangle-width');
    const rectangleWidthText=rectangleWidthInput.value;
    const width=parseFloat(rectangleWidthText);

    // Rectangle height
    const rectangleHeightInput=document.getElementById('rectangle-height');
    const rectangleHeightText=rectangleHeightInput.value;
    const height=parseFloat(rectangleHeightText);

    // area calculation
    const Area=width*height;
    console.log('area of the rectangle:',Area);


    // display Triangle area
    const rectangleAreaSpan=document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText=Area;
}