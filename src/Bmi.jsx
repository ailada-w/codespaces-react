import { useRef ,useState} from "react";
const BmiText=({bmi})=>{
    if(bmi<18.5)
        return (<h1>UderWeight</h1>);
    if (bmi>30)
        return (<h1>OverWeight</h1>);
    return (<h1>Normal</h1>);
}

export default function Bmi(){
    const w_input=useRef(null);
    const h_input=useRef(null);
    const [bmi,setBmi]=useState(0.00);
    const calBmi=()=>{
        let weight=w_input .current.value;
        let hight=h_input.current.value/100;
        setBmi(weight/(hight*hight));
    }

    return (
    <>
    <h3>BMI</h3>
    Weight:<input 
    ref={w_input}/> kg.<br/>    
    hight:<input 
    ref={h_input}/>cm.<br/> 
    <button onClick={()=>calBmi()}>calculate</button>
    Bmi value:{bmi.toFixed(2)}
    <BmiText bmi={bmi}/>
    </>
    );
}