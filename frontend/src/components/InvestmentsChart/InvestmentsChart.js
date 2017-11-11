import React, { Component } from 'react';

import { Chart } from 'chart.js';

class InvestmentsChart extends Component {
  componentWillUpdate(nextProps, nextState) {
    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
      draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function() {
          ctx.save();
          ctx.shadowColor = 'rgba(0,0,0,.2)';
          ctx.shadowBlur = 20;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          _stroke.apply(this, arguments);
          ctx.restore();
        };
      }
    });
    var bar_ctx = document.getElementById('myChart').getContext('2d');

    var purple_orange_gradient = bar_ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient.addColorStop(0, '#008FFC');
    purple_orange_gradient.addColorStop(1, '#1ADBC9');

    var bar_chart = new Chart(bar_ctx, {
      type: 'line',
      data: {
        labels: ['Monday', 'Thursday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            data: [12, 19, 10, 8, 20, 15, 34],
            backgroundColor: purple_orange_gradient,
            hoverBackgroundColor: purple_orange_gradient,
            borderColor: '#FFF',
            borderWidth: 7
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              display: false,
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <div className="profile__chart">
        <canvas id="myChart" width="100%" height="30px" />
      </div>
    );
  }
}

export default InvestmentsChart;
