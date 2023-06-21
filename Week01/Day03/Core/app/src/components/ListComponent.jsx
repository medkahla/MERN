import React, { Component } from "react";
class ListComponent extends Component {
     
    render() { 
        return (
            <div className="MyGoals">
                <h2>Things i need to do:</h2>
                    <ul>
                        <li>Learn React</li>
                        <li>Climb Mt. Everest</li>
                        <li>Run a marathon</li>
                        <li>Feed the dogs</li>
                    </ul>
            </div>
        );
    }
}
 
export default ListComponent;