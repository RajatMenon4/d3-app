//App.js
import React from 'react';
import './App.css';
import Treemap from './Treemap';

const dataset = {"children":[{"name":"boss1","children":
                [{"name":"mister_a","group":"A","value":28,"colname":"level3"},
                {"name":"mister_b","group":"A","value":19,"colname":"level3"},
                {"name":"mister_c","group":"C","value":18,"colname":"level3"},
                {"name":"mister_d","group":"C","value":19,"colname":"level3"}],"colname":"level2"},
                {"name":"boss2","children":[{"name":"mister_e","group":"C","value":14,"colname":"level3"},
                {"name":"mister_f","group":"A","value":11,"colname":"level3"},{"name":"mister_g","group":"B","value":15,"colname":"level3"},
                {"name":"mister_h","group":"B","value":16,"colname":"level3"}],"colname":"level2"},
                {"name":"boss3","children":[{"name":"mister_i","group":"B","value":10,"colname":"level3"},
                {"name":"mister_j","group":"A","value":13,"colname":"level3"},{"name":"mister_k","group":"A","value":13,"colname":"level3"},
                {"name":"mister_l","group":"D","value":25,"colname":"level3"},{"name":"mister_m","group":"D","value":16,"colname":"level3"},
                {"name":"mister_n","group":"D","value":28,"colname":"level3"}],"colname":"level2"}],"name":"CEO"};

function App() {
    return (
        <div classsName="App">
            <h2>FMG Data</h2>
            <Treemap width={1900} height={850} data={dataset}/>
        </div>
    );
}

export default App;