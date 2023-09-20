import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import Flow from "./Flow";
import './Team.css';

function Team(){
    const location=useLocation().state.Username;
    const [players,setplayers]=useState([]);
    const team=location.toLowerCase();
    let cap;
    let batsman=[];
    let bowlers=[];
    let allrounders=[];
    let wicketkeeper;
    

    players.map((e)=>{
        if(e.team==team){
            if(e.role.includes('Captian') || e.role.includes('Captain')){
                cap=e.name;
            }
            if(e.role.includes('batsman')){
                batsman.push(e.name);
            }
            else if(e.role.includes('bowler')){
                bowlers.push(e.name);
            }
            else if(e.role.includes('All-rounder')){
                allrounders.push(e.name);
            }
            if(e.role.includes('Wicket-keeper')){
                wicketkeeper=e.name;
            }
        }
    })
    // console.log(cap);
    // console.log(batsman);
    // console.log(bowlers);
    // console.log(allrounders);
    // console.log(wickerkeeper);
    

    useEffect(()=>{
        const func= async ()=>{
            const r=await fetch('https://www.mockachino.com/5db99bd2-28c5-46/ipl/list/players');
            const data=r.json();
            return data;
        }
        func().then((e)=>{
            setplayers(...[e.players]);
        });
    },[])
    return(
        <>
        <div className="flow-container">
            <Flow players={players} team={team} cap={cap} batsman={batsman} bowlers={bowlers} allrounders={allrounders} wicketkeeper={wicketkeeper}/>
        </div>
        </>
    );
}
export default Team;