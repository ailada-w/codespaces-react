import { useEffect, useState } from "react";
function Item({name,isPacked=false}){
    return (<li>
        {name} {isPacked && '✓ ' }
        {/* {isPacked? name +'✓ ':name } */}
    </li>
    );
    // if(isPacked) return (<li>{name} ✓  </li>)
    // return(<li>{name} </li>)
}
export default function ItemsList(){
    const [keyword,setKeyword]=useState("");
    useEffect(()=>{
        console.log("this component is load");

        return ()=>{
            alert("component unloaded!");
        }
    },[]);
    const items=[{name:"Sunglass",isPacked:false},
        {name:"Sungblock",isPacked:true},{name:"Powerbank",isPacked:true}]
    const filterList=items.filter(i=>i.name.toLowerCase().includes(keyword.toLowerCase()))
    const itemList=filterList.map(i=><Item key={i.name}
        name ={i.name} isPacked={i.isPacked}/>
    )
  
    // const items=["Sunglass","Sunblock","Swimming suit","Towel","Powerbank"];
    // const itemList=items.map(i=><Item key={i} name={i}/>)
    return (<>
     <input type="text" value={keyword} onChange={e=>setKeyword(e.target.value)}/>
        <ui>
        {itemList}
        {/* <Item name="Sunglass" isPacked={false}/>
        <Item name="Sunblock" isPacked={false}/>
        <Item name="Swimming suit" isPacked={true}/>
        <Item name="Towel" isPacked={false}/> */}
        {/* <li>Sunblock</li>
        <li>Swimming suit</li>
        <li>Towel</li> */}
    </ui></>)
}