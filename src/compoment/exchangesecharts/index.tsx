
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import React, { PureComponent } from "react";
import * as eCharts from "echarts";

import './index.css'
interface IProps {
  title: string,         
  xData: string[],       
  seriesData: number[], 
}
const colors = ['#5470C6', '#EE6666'];
type EChartsOption = echarts.EChartsOption;
export default class  Exchangesecharts extends

  PureComponent {
    eChartsRef: any = React.createRef();
  componentDidMount() {
    const myChart = eCharts.init(this.eChartsRef.current);
    window.onresize = function(){
      myChart.resize()
    }
    let option = {
        title:{
            
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
        
          {
            name: 'USD Volume',
            type: 'line',
            left:'-20%',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320],
            label:{
                position:"right"
            }
          },
          {
            name: 'transactions',
            type: 'line',
            // right:'20%',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
    
    myChart.setOption(option);
  }
  render() 
  { return <div className=" Exchangesecharts">
  <div ref={this.eChartsRef} className="echarts"></div>
  </div>
  ;}
}
