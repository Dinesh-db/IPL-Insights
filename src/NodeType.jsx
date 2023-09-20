
import { Handle, Position } from 'reactflow';

import './NodeType.css';

function NodeType() {

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top}/>
      <div>
        <img src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'></img>
        <br/>
        <h3>Text</h3>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
      />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default NodeType;
