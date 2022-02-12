import React, {useState} from "react";
import StandartCalculator from "./Calculator/StandartCalculator"
import AdvancedCalculator from "./Calculator/AdvancedCalculator";
import DropdownComponent from "./UI/Dropdown";
import Alert from "./UI/Alert";

const App = () => {

    const [changeUI, setChangeUI] = useState("Normal");
    const [enteredNumber, setEnteredNumber] = useState("0");
    const [result, setResult] = useState("0");
    const [inputs, setInputs] = useState([]);
    const [processName, setProcessName] = useState("");
    const [processSummary, setProcessSummary] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [messageProp, setMessageProp] = useState("");
    const [inputLength, setInputLength] = useState(16);
    const [isThereResult, setIsThereResult] = useState(false);
    
    const handleCalculatorUI = (e) => {
        clearAll();
        changeUI === e.target.innerHTML ? setInputLength(16) : setInputLength(32);
        setChangeUI(e.target.innerHTML);
    }

    const handleNumber = (e) => {
        if(enteredNumber.length < inputLength || isThereResult){
            setIsThereResult(false);

            if(enteredNumber === "0") setEnteredNumber(e.target.innerHTML.trim());
            
            else if(result !== "0"){
                setEnteredNumber(e.target.innerHTML.trim());
                setResult("0");
            }
            else setEnteredNumber(prevState => {return prevState+e.target.innerHTML.trim()});
                
        }
        else showAlertComp(`Input length cannot exceed ${inputLength} characters`);
    }

    
    const handleOperator = (e) => {
        setProcessName(e.target.id);

        if(e.target.id === "plus") {
            setProcessSummary(`${enteredNumber} + `)
            inputs.push(enteredNumber);
            setEnteredNumber("0");
        }
            
        else if(e.target.id === "minus") {
            setProcessSummary(`${enteredNumber} – `)
            inputs.push(enteredNumber);
            setEnteredNumber("0");
        }
        else if(e.target.id === "divide") {
            setProcessSummary(`${enteredNumber} ÷ `)
            inputs.push(enteredNumber);
            setEnteredNumber("0");
        }
        else if(e.target.id === "times") {
            setProcessSummary(`${enteredNumber} × `)
            inputs.push(enteredNumber);
            setEnteredNumber("0");
        }
        else if(e.target.id === "factorial") {
            setProcessSummary(`${enteredNumber}! `);
            setEnteredNumber(factorialize(parseInt(enteredNumber)).toString());
            setResult(factorialize(parseInt(enteredNumber)).toString());
            setIsThereResult(true);
        }
        else if(e.target.id === "divideByX") {
            setProcessSummary(`1 / ${enteredNumber} =`);
            setEnteredNumber((1/Number(enteredNumber)).toString());
            setResult((1/Number(enteredNumber)).toString());
            setIsThereResult(true);
        }
        else if(e.target.id === "exp") {
            setProcessSummary(`exp(${enteredNumber})`);
            setEnteredNumber(Math.exp(Number(enteredNumber)).toString());
            setResult(Math.exp(Number(enteredNumber)).toString());
            setIsThereResult(true);
        }
        else if(e.target.id === "mod") {
            setProcessSummary(`${enteredNumber} Mod `);
            inputs.push(enteredNumber);
            setEnteredNumber("0");
        }
        else if(e.target.id === "xPowerY") {
            setProcessSummary(`${enteredNumber} ^`);
            inputs.push(enteredNumber);
            setEnteredNumber("0");
        }
        else if(e.target.id === "cubeRoot") {
            setProcessSummary(`cuberoot(${enteredNumber})`);
            setEnteredNumber(Math.cbrt(Number(enteredNumber)).toString());
            setResult(Math.cbrt(Number(enteredNumber)).toString());
            setIsThereResult(true);
        }
        else if(e.target.id === "tenPowerX") {
            setProcessSummary(`10^(${enteredNumber})`);
            setEnteredNumber(Math.pow(10,Number(enteredNumber)).toString());
            setResult(Math.pow(10,Number(enteredNumber)).toString());
            setIsThereResult(true);
        }
        else if(e.target.id === "squareRoot") {
            if(enteredNumber < 0){
                return showAlertComp("Invalid Transaction");
            }
            setProcessSummary(`squareroot(${enteredNumber})`);
            setEnteredNumber(Math.sqrt(Number(enteredNumber)).toString());
            setResult(Math.sqrt(Number(enteredNumber)).toString());
            setIsThereResult(true);
        }
        else if(e.target.id === "log") {
            setProcessSummary(`log(${enteredNumber})`);
            setEnteredNumber(Math.log10(Number(enteredNumber)).toString());
            setResult(Math.log10(Number(enteredNumber)).toString());
            setIsThereResult(true);
        }
        else {
            setProcessSummary(`ln(${enteredNumber})`);
            setEnteredNumber(Math.log(Number(enteredNumber)).toString());
            setResult(Math.log(Number(enteredNumber)).toString());
            setIsThereResult(true);
        }  
    }

    const handleResult = () => {
        let processResult = 0;
        setProcessSummary(processSummary + `${enteredNumber} = `)
        switch(processName) {
            case "plus":
                processResult = Number(inputs[0])+Number(enteredNumber);
                break;
            case "minus":
                processResult = Number(inputs[0])-Number(enteredNumber);
                break;
            case "divide":
                processResult = Number(inputs[0])/Number(enteredNumber);
                break;
            case "times":
                processResult = Number(inputs[0])*Number(enteredNumber);
                break;
            case "mod":
                processResult = mod(Number(inputs[0]), Number(enteredNumber));
                break;
            case "xPowerY":
                processResult = Math.pow(Number(inputs[0]), Number(enteredNumber));
                break;
            default:
                console.log("Error");
        }
        setIsThereResult(true);
        setEnteredNumber(processResult.toString());
        setResult(processResult.toString());
        setInputs([]);
    }

    const factorialize = (num) => {
        if(num < 0) return -1;
        else if(num === 0) return 1;
        return num*factorialize(num-1);
    }

    const mod = (num1, num2) => {
        if(num2 === 0) return num1;
        else if(num1 === 0) return 0;
        return (num1%num2 + num2)%num2;
    }
    
    const clearAll = () => {
        setEnteredNumber("0");
        setInputs([]);
        setProcessSummary("");
        setProcessName("")
        setResult("0");
    }

    const handleDelete = (e) => {
        switch(e.target.id){
            case "clear":
                clearAll();
                break;
            case "delete":
                setEnteredNumber(enteredNumber.substring(0,enteredNumber.length-1))
                break;
            default:
                console.log("error");
                break;
        }
    }

    const handleFloat = () => {
        enteredNumber.includes(".") === false ? setEnteredNumber(`${enteredNumber}.`)  : setEnteredNumber(`${enteredNumber}`)
    }

    const handleConstantNumber = (e) => {
        setProcessSummary("");
        let result = "";
        e.target.id === "pi" ? result=Math.PI.toString() : result=Math.E.toString()
        setEnteredNumber(result);
        setResult(result);
    }

    const showAlertComp = (message) => {
        setMessageProp(message)
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 2500)
    }

    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div>
                <div className="d-flex align-items-center position-absolute top-0 start-0 m-1">
                    <DropdownComponent handleCalculatorUI={handleCalculatorUI}/>
                    <h5 className="text-light mt-1 ms-3">{changeUI}</h5>
                </div>

                {
                    changeUI === "Normal" ? 
                    
                        <StandartCalculator 
                            UIstate={changeUI}
                            enteredNumber={enteredNumber}
                            processSummary={processSummary}
                            handleNumber={handleNumber}
                            handleOperator={handleOperator}
                            handleResult={handleResult}
                            handleDelete={handleDelete}
                            handleFloat={handleFloat}
                        />
                        
                    : 
                        <AdvancedCalculator 
                            UIstate={changeUI} 
                            enteredNumber={enteredNumber}
                            processSummary={processSummary}
                            handleNumber={handleNumber}
                            handleOperator={handleOperator}
                            handleResult={handleResult}
                            handleDelete={handleDelete}
                            handleFloat={handleFloat}
                            handleConstantNumber={handleConstantNumber}
                        />
                }
            </div>
            <Alert show={showAlert} messageProp={messageProp}/>
        </div>
    )
}

export default App;