import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

// import NodeType from './NodeType';
import './NodeType.css';
function Flow({team,cap,batsman,bowlers,allrounders,wicketkeeper}) {
  const edges = [
    { id: '1-2', source: '1', target: '2', type: 'step' },
    { id:'2-3',source:'2',target:'3',type:'step'},
    { id:'2-4',source:'2',target:'4',type:'step'},
    { id:'2-5',source:'2',target:'5',type:'step'},
    { id:'2-6',source:'2',target:'6',type:'step'},
    { id:'3-7',source:'3',target:'7',type:'step'},
    { id:'3-8',source:'3',target:'8',type:'step'},
    { id:'3-9',source:'3',target:'9',type:'step'},
    { id:'3-10',source:'3',target:'10',type:'step'},
    { id:'4-11',source:'4',target:'11',type:'step'},
    { id:'4-12',source:'4',target:'12',type:'step'},
    { id:'4-13',source:'4',target:'13',type:'step'},
    { id:'4-14',source:'4',target:'14',type:'step'},
    { id:'5-15',source:'5',target:'15',type:'step'},
    { id:'5-16',source:'5',target:'16',type:'step'},
    { id:'5-17',source:'5',target:'17',type:'step'},
    { id:'6-18',source:'6',target:'18',type:'step'},
  ];
  let t=String(team).toUpperCase();
  let c=String(cap).toUpperCase();
  const nodes = [
    {
      id: '1',
      data: { label: t},
      position: { x: 1000, y: 0 },
    },
    {
      id: '2',
      data: { label: c },
      position: { x:1000 , y: 100 },
    },
    {
      id: '3',
      data: { label: 'Batsman' },
      position: { x:200 , y: 200 },
    },
    {
      id: '4',
      data: { label: 'Bowler' },
      position: { x:800 , y: 200 },
    },
    {
      id: '5',
      data: { label: 'All-rounders' },
      position: { x:1400 , y: 200 },
    } ,
    {
      id: '6',
      data: { label: 'Wicketkeeper' },
      position: { x:1710 , y: 200 },
    },
    {
      id: '7',
      data: { label: batsman[0] },
      position: { x:-50 , y: 300 },
    },
    {
      id: '8',
      data: { label: batsman[1] },
      position: { x:110 , y: 300 },
    },
    {
      id: '9',
      data: { label: batsman[2] },
      position: { x:270 , y: 300 },
      
    },
    {
      id: '10',
      data: { label: batsman[3] },
      position: { x:430 , y: 300 },
    },
    {
      id: '11',
      data: { label: bowlers[0] },
      position: { x:590 , y: 300 },
    },
    {
      id: '12',
      data: { label: bowlers[1] },
      position: { x:750 , y: 300 },
    },
    {
      id: '13',
      data: { label: bowlers[2] },
      position: { x:910 , y: 300 },
    },
    {
      id: '14',
      data: { label: bowlers[3] },
      position: { x:1070 , y: 300 },
    },
    {
      id: '15',
      data: { label: allrounders[0] },
      position: { x:1230 , y: 300 },
    },
    {
      id: '16',
      data: { label: allrounders[1] },
      position: { x:1390 , y: 300 },
    },
    {
      id: '17',
      data: { label: allrounders[2]},
      position: { x:1550 , y: 300 },
    },
    {
      id: '18',
      data: { label: wicketkeeper },
      position: { x:1710 , y: 300 },
    },
    
  ];
  const containerStyles = {
      width: '100%', // You can adjust this to your desired width
      height: '400px', // You can adjust this to your desired height
  };
  return (
    <div style={containerStyles}>
      <ReactFlow nodes={nodes} edges={edges} >
        
      </ReactFlow>
    </div>
  );
}

export default Flow;
