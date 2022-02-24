import React from 'react';
import Tree from 'react-d3-tree';
import orgChart from './orgChart';
import './custom-tree.css';

class D3Tree extends React.Component {
  render() {
    return (
      // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
      <div id="treeWrapper" style={{ width: '500em', height: '500em' }}>
          <span class='tooltip' data-tooltip="Room Devices and Users"></span>
        <Tree data={orgChart}
        rootNodeClassName='node__root'
        branchNodeClassName='node__branch'
        leafNodeClassName='node__leaf'/>
      </div>
    );
  }
}


export default D3Tree;