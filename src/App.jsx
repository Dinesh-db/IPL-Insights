import { useEffect, useState } from 'react';
import './App.css';
import Table from './Table';

function App(){
  const [points,setpoints]=useState([]);
  useEffect(()=>{
    const func=async ()=>{
      const r=await fetch('https://www.mockachino.com/5db99bd2-28c5-46/ipl/table');
      const data=r.json();
      return data;
    }
    func().then((s)=>{
      setpoints(...[s.points]);
    })
  },[]);
  const [Gender,setGender]=useState([]);
  const [YearMen,setyearmen]=useState([]);
  const [YearWomen,setyearwomen]=useState([]);
  points.map((d)=>{
    let s=String(d.Gender);
    if(!Gender.includes(s)){
      Gender.push(s);
    }
  })
  points.map((e,i)=>{
    let s=e.IPLYear;
    if(e.Gender=="women" && !(YearWomen.includes(s))){
      YearWomen[i]=s;
    }
    else if(!(YearMen.includes(s))){
      YearMen[i]=s;
    }
  })
  const [G,setG]=useState("");
  const [Y,setY]=useState();
  const Handlegender=(event)=>{
    setG(event.target.value);
  }
  const HandleYearClick=()=>{
    if(Gender==""){
      alert('Please Select the Gender!!');
    }
  }
  const HandleYear=(event)=>{
    setY(event.target.value);
  }
  return(
    <>
    <div className="Heading-1">
      <h1>IPL INSIGHTS</h1>
      <div className="Ip-Container-1">
        <div className='ip-gender'>
          <h3>Gender</h3>
          <select className='g-dropdown' onChange={Handlegender}>
            <option></option>
            <option>--Select an Option--</option>
            {Gender.map((e,i)=>{
              return(<option key={i}>{e.toUpperCase()}</option>)
            })}
          </select>
        </div>
        <div className='year-ip'>
          <h3>Year</h3>
          <select className='g-dropdown' onMouseOver={HandleYearClick} onChange={HandleYear}>
          <option></option>
            <option>--Select an Option--</option>
            {(Gender!="") 
              ?
                <>
                {(G=="MEN")
                  ?
                    <>{YearMen.map((e,i)=>{
                      return(<option key={i}>{e}</option>)
                    })}</>
                  :<></>
                }
                  {(G=="WOMEN")?
                  <>{YearWomen.map((e,i)=>{
                    return(<option key={i}>{e}</option>)
                  })}</>
                  :<></>
                }
                </>
              :
                <></>}
          </select>
        </div>
      </div>
    </div>
    <div className='Container-1'>
      <div className='Table-headings'>
        <div><p>Team</p></div>
        <div><p>P</p></div>
        <div><p>W</p></div>
        <div><p>L</p></div>
        <div><p>NR</p></div>
        <div><p>NRR</p></div>
        <div><p>RECENT</p></div>  
      </div>
      <div className='Table-body'>
            <Table points={points} Y={Y} G={G}/>
        </div>
    </div>
    </>
  );
}

export default App;