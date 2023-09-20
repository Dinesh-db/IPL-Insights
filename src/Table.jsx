import { useState } from "react";
import "./Table.css";
import { Link } from "react-router-dom";

function Table({points,Y,G}){
    const [table2022,settable2022]=useState([]);
    return(
        <>
        {points.map((e,i)=>{
            let TeamCode="";
            let Matches,Wins,Lose,NR,NRR,Recent,For,id;
            for(let i=0;i<points.length;i++){
                if(e.IPLYear==Y && e.Gender===G.toLowerCase()){
                    id=i;
                    TeamCode=e.TeamCode;
                    Matches=e.Matches;
                    Wins=e.Wins;
                    Lose=e.Loss;
                    NR=e.NoResult;
                    NRR=e.NetRunRate;
                    For=e.ForTeams;
                    Recent=e.Performance;
                    
                }
            }
            if(TeamCode==""){
                return (
                    <></>
                )
            }
            else{

                return(
                    <Link to="/team" state={{Username:TeamCode}}>
                            <div key={id} className="table-contents">
                                <div ><p>{TeamCode}</p></div>
                                <div ><p>{Matches}</p></div>
                                <div ><p>{Wins}</p></div>
                                <div ><p>{Lose}</p></div>
                                <div ><p>{NR}</p></div>
                                <div ><p>{NRR}</p></div>
                                <div ><p>{Recent}</p></div>
                            </div>
                        </Link>
                )
            }
            
            // console.log(TeamName);
            
            
        })}
        </>
    );
}

export default Table;