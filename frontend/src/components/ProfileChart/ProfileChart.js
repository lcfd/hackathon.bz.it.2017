import React, { Component } from 'react';

import { Chart } from 'chart.js';

var ctx;
var chart;
class ProfileChart extends Component {
  componentDidMount(nextProps, nextState) {
    var canvas = document.getElementById('myChartProfile');
    ctx = canvas.getContext('2d');
    console.log(this.props);

    chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'doughnut',
      // The data for our dataset
      data: {
        labels: this.props.label,
        datasets: [
          {
            label: 'Donut',
            backgroundColor: ['#268be2', '#1ADBC9', '#2761e3', '#9f3ce2'],
            borderColor: '#FFFFFF',
            data: this.props.values
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.values.toString() !== this.props.values.toString()) {
      var canvas = document.getElementById('myChartProfile');
      console.log(ctx);

      if (ctx != null) {
        chart.destroy();
      }
      ctx = canvas.getContext('2d');

      chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',
        // The data for our dataset
        data: {
          labels: nextProps.label,
          datasets: [
            {
              label: 'Donut',
              backgroundColor: ['#268be2', '#1ADBC9', '#2761e3', '#9f3ce2'],
              borderColor: '#FFFFFF',
              data: nextProps.values
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
