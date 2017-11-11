import React, { Component } from 'react';

import { Chart } from 'chart.js';

class ProfileChart extends Component {
  componentDidMount(nextProps, nextState) {
    var ctx = document.getElementById('myChartProfile').getContext('2d');

    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'doughnut',
      // The data for our dataset
      data: {
        labels: ['Filling Station', 'E-commerce', 'Fast food', 'Transport'],
        datasets: [
          {
            label: 'Donut',
            backgroundColor: ['#585858', '#268BE2', '#9E9E9E', '#CCCCCC'],
            borderColor: '#FFFFFF',
            data: [21, 48, 26, 5]
            //hoverBorderWidth: 2,
            //hoverBorderColor: [ '#585858', '#268BE2', '#9E9E9E', '#CCCCCC'],
          }
        ]
      },
      // Configuration options go here
      options: {
        legend: {
          display: false,
          labels: {
            lineWidth: 5
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  }

  render() {
    return (
      <div className="profile__chart">
        <canvas id="myChartProfile" width="100%" height="55px" />
      </div>
    );
  }
}

export default ProfileChart;
