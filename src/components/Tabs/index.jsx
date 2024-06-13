import { AppBar, Tab, Tabs } from "@material-ui/core";
import React,{ Component } from "react";
import Timer from "../Timer";
import { ContextTimer } from "../../context/providerTimer";
import Historicos from "../Historicos";

class TabsBar extends Component {
    static contextType = ContextTimer;

    state = {
        value: 0
    }
    handleChange = (event, value)=>{
        this.setState({value: value});
    }


    render() {
        const { value } = this.state;
        return (
            <div>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Cronometro" />
                        <Tab label="Histórico" />
                    </Tabs>
                </AppBar>
                {value === 0 && <Timer/>}
                {value === 1 && <Historicos/> } 
            </div>
        );
    }
}

export default TabsBar;