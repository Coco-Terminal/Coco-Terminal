
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
export default class  Firstecharts extends

  PureComponent {
    eChartsRef: any = React.createRef();
  componentDidMount() {
    const myChart = eCharts.init(this.eChartsRef.current);
    let option = {
        title: {
          text: 'Current NFT collection Holding',
          textStyle: { fontSize:36, }
        },
       
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
            }
          ]
      };
    
    myChart.setOption(option);
  }
  render() 
  { return <div className="echarts_Firstechart">
  <div ref={this.eChartsRef} className="echarts"></div>
  </div>
  ;}
}
