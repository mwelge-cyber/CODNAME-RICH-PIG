import React, {Component} from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
class StockGraph extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded: false,
        }
    }
    getData(){
        var { items } = this.state;
        var d = {};
        items=items["Time Series (Daily)"];
        console.log(items[0]);
        // items.map((day)=>{

        // })
        return d;
    }
    componentDidMount(){
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=R3TRL6035W5YVSYE')
        .then(res =>res.json())
        .then(json=>{   
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }

    render(){
        this.getData();
        const data = [
            {x: 0, y: 8},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 9},
            {x: 4, y: 1},
            {x: 5, y: 7},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}
          ];
          return (
            <div className="App">
              <XYPlot height={300} width={300}>
                <LineSeries data={data} />
              </XYPlot>
            </div>
          );
        
    }
    
}
export default StockGraph;