import React, {Component} from 'react';
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";


class Palette extends Component{
    constructor(props){
        super(props);
        this.state= {level: 500, format: "hex"};
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level) {
        this.setState({level});
    };
    ChangeFormat = (val) =>{
        this.setState( { format: val })
    };
    render() {
        const {colors} = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background ={color[format]} name={color.name}/>
        ));
        return (
            <div className="Palette">
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.ChangeFormat}/>
                {/*{todo: NavBar goes here}*/}
                <div className="palette-colors">{colorBoxes}</div>
                {/* footer eventually   */}
            </div>
        )
    }
}
export default Palette;