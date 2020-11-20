var operation = null;
var inputValueMemo = 0;

function getContentClick(event) {
    //console.log(event);
    const value = event.target.innerHTML;
    filterAction(value);
}

const filterAction = value => {
    //console.log(value)
    value === '0' ? addNumberInput(0) : null;
    value === '1' ? addNumberInput(1) : null;
    value === '2' ? addNumberInput(2) : null;
    value === '3' ? addNumberInput(3) : null;
    value === '4' ? addNumberInput(4) : null;
    value === '5' ? addNumberInput(5) : null;
    value === '6' ? addNumberInput(6) : null;
    value === '7' ? addNumberInput(7) : null;
    value === '8' ? addNumberInput(8) : null;
    value === '9' ? addNumberInput(9) : null;
    value === ',' ? addNumberInput(',') : null;

    value === '+' ? setOperation('+'): null;
    value === '-' ? setOperation('-'): null;
    value === 'X' ? setOperation('*'): null;
    value === '/' ? setOperation('/'): null;
    value === '%' ? setOperation('%'): null;
    value === '+/-' ? setOperation('+/-'): null;
    //value === '=' ? setOperation('='): null;

    value === '=' ? calculation() : null;

    value === 'AC' ? resetCalculator() : null;
    //value === '=' ? calculation() : null;
}

function addNumberInput(value){
    const inputScreen = document.getElementsByClassName('calculator-screen')[0];
    const inputValue = inputScreen.value;

    if(inputValue === '0' && inputValue.length === 1 && value !== ','){
        inputScreen.value = value
        return;
    }

    if(inputScreen.value === '' && value === ','){
        inputScreen.value = 0 + value;
        return;
    }


    inputScreen.value = inputValue + value;
}

function setOperation(operation){
    const inputScreen = document.getElementsByClassName('calculator-screen')[0];
    const inputScreenValue = inputScreen.value;
    this.operation = operation;
    let total = this.inputValueMemo;
    //console.log(this.operation)
    if (inputScreenValue != 0){
        calculation();
    }else if(this.operation == '+/-'){
        console.log('select +/-', inputScreen)
         //total = this.inputValueMemo;
        inputScreen.value = '';
        inputScreen.placeholder = -this.inputValueMemo;
        this.inputValueMemo = -this.inputValueMemo;

    }
}
function calculation(){
    const inputScreen = document.getElementsByClassName('calculator-screen')[0];
    let valueOne = transformCommaToPoint(this.inputValueMemo)
    let valueTwo = transformCommaToPoint(inputScreen.value)

    let totol = this.inputValueMemo;
    console.log('valueOne', typeof valueOne);
    console.log('valueOne', valueOne);
    console.log('valueTwo', typeof valueTwo);
    console.log('valueTwo', valueTwo);




    if(this.operation === '+' && inputScreen.value !== ''){
        totol = trunc(valueOne + valueTwo, 3);
        console.log('select +')
    }
    if(this.operation === '-' && inputScreen.value !== ''){
        if(valueOne !== 0){
            totol = trunc(valueOne - valueTwo,3);
        }else{
            totol = trunc(valueTwo,3);
        }
    }
    if(this.operation === '*' && inputScreen.value !== ''){
        if(valueOne !== 0){
            totol = trunc(valueOne * valueTwo,3);
        }else{
            totol = trunc(valueTwo,3);
        }
    }
    if(this.operation === '/' && inputScreen.value !== ''){
        if(valueOne !== 0){
            totol = trunc(valueOne / valueTwo,3);
        }else{
            totol = trunc(valueTwo);
        }
    }
    if(this.operation === '%' && inputScreen.value !== ''){
        totol = trunc(valueTwo / 100, 3);
    }
    if(this.operation === '+/-' && inputScreen.value !== ''){
        if(valueTwo > 0){
            totol = -valueTwo;
        }
    }

    totol = transformPointToComma(totol)
    this.inputValueMemo = totol;


    inputScreen.value = '';
    inputScreen.placeholder = totol;
    console.log('memo:', this.inputValueMemo)
}
const resetCalculator = () => {
    const inputScreen = document.getElementsByClassName('calculator-screen')[0];
    inputScreen.value = 0;
    this.inputValueMemo = 0;
    this.operation = null;
}

function transformCommaToPoint(value){
    if(typeof value !== 'number'){
        let resultTranform = value.replace(',','.');
        return parseFloat(resultTranform);
    }
    return value;
}


function transformPointToComma(value){
    let resultTransform = value.toString();
    resultTransform = resultTransform.replace('.',',');
    return resultTransform;
}


function trunc (x, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)
}
