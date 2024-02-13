function calculateTriangleArea(){
    const triangleBaseInput =document.getElementById('triangle-base');
    const triangleBaseText=triangleBaseInput.value;
    const base=parseFloat(triangleBaseText);

    // triangle height
    const triangleHeightInput=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeightInput.value;
    const height=parseFloat(triangleHeightText);

    // area calculation
    const area=0.5*base*height;
    console.log('area of the Triangle:',area);


    // display Triangle area
    const triangleAreaSpan=document.getElementById('triangle-area');
    triangleAreaSpan.innerText=area;
}

