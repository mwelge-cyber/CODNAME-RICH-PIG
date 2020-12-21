import React, {Component} from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {FlexibleXYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, Crosshair} from 'react-vis';
class StockGraph extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded: false,
            value: false,
        }
    }
    getData(){
        var { items } = this.state;
        var d = [];
        var days = Object.entries(items['Time Series (Daily)']);
        console.log(days);
        // console.log(dates);
        days.map((day)=>{
            var dit = {};
            dit['x'] = new Date(day[0]);
            dit['y'] = day[1]['4. close'];
            d.push(dit);
            // console.log(day['4. close']);
        })
        console.log(d);
        return d;
    }
    componentDidMount(){

        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AMD&apikey=R3TRL6035W5YVSYE')
        .then(res =>res.json())
        .then(json=>{       
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
       
    }

    render(){
        var { isLoaded, items, value } = this.state;
        if(!isLoaded){
            return (<div>Loading...</div>);
        }
        else {
        // this.getData();
          return (
            <div className="App">
              <FlexibleXYPlot onMouseLeave={() => this.setState({value: false})} xType="time" height={300} width={900} >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
                <LineSeries data={this.getData()} />
                {value && <Crosshair values={[value]} />}
              </FlexibleXYPlot>
            </div>
          );
        }
        
    }
    
}
export default StockGraph;