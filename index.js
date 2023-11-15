let minValue = document.getElementById("min__value");
let maxValue = document.getElementById("max__value");

const rangeFill = document.querySelector(".range__fill");

// 3) FUNCTION TO VALIDATE RANGE AND UPDATE THE FILL COLOR ON SLIDER
function validateRange() {
    let minPrice = parseInt (inputElements[0].value);
    let maxPrice = parseInt (inputElements[1].value);

    // 4) SWAP THE VALUES IF MINPRICE IS GREATER THAN MAXPRICE
    if (minPrice > maxPrice) {
        let tempValue = maxPrice;
        maxPrice = minPrice;
        minPrice = tempValue;
    }

    // 6) CALC THE % POSITION FOR MIN AND MAX VALUES
    const minPercentage = ((minPrice - 0) / 490) * 100;
    const maxPercentage = ((maxPrice - 0) / 490) * 100;

    // 7) SET THE POSITION AND WIDTH OF THE FILL COLOR ELEMENT TO REPRESENT THE SELECTED RANGE
    rangeFill.style.left = minPercentage + "%";
    rangeFill.style.width = maxPercentage - minPercentage + "%";

    // 5) UPDATE THE DISPLAYED MIN AND MAX VALUES
    minValue.innerHTML = "$" + minPrice;
    maxValue.innerHTML = "$" + maxPrice;
}


// 1) GET REFERENCES TO THE INPUT ELEMENTS
const inputElements = document.querySelectorAll("input");

// 2) ADD AN EVENT LISTENER TO EACH INPUT ELEMENT
inputElements.forEach((element) => {
    element.addEventListener("input", validateRange);
})

// 8) INITIAL CALL TO VALIDATE RANGE
validateRange();