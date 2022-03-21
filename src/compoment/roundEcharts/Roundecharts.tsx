
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
export default class  Roundecharts extends

  PureComponent {
    eChartsRef: any = React.createRef();
  componentDidMount() {
    const myChart = eCharts.init(this.eChartsRef.current);
    window.onresize = function(){
      myChart.resize()
    }
    let option = {
      title: {
        text: 'NFT Collection Opensea Volume',
        left:"center",
        textStyle: { fontSize:36, }
      },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      };
      
    
    myChart.setOption(option);
  }
  render() 
  { return <div className="round">
  <div ref={this.eChartsRef} className="roundecharts"></div>
  </div>
  ;}
}