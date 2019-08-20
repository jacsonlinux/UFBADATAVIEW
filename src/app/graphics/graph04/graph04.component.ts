import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as d3Selection from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-graph04',
  templateUrl: './graph04.component.html',
  styleUrls: ['./graph04.component.scss']
})
export class Graph04Component implements OnInit {

  data;

  constructor() { }

  ngOnInit() { this.script(); }

  script() {

    const margin = {top: 30, right: 10, bottom: 10, left: 0};
    const width = 1000 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3.select('div#jacsonlinux')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')');

    d3.csv('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/iris.csv')
      .then(data => {

        this.data = data;

        const color = d3.scaleOrdinal()
          .domain(['setosa', 'versicolor', 'virginica'])
          .range(['#440154ff', '#21908dff', '#fde725ff']);

        const dimensions = ['Petal_Length', 'Petal_Width', 'Sepal_Length', 'Sepal_Width'];

        const y = {};

        for (const dimension of dimensions) {
          y[dimension] = d3.scaleLinear()
            .domain([0, 8])
            .range([height, 0]);
        }

        const x = d3.scalePoint()
          .range([0, width])
          .domain(dimensions);


        /*const highlight = function(d) {
          console.log(d);
          const selectedSpecie = d.Species;

          d3.selectAll('.line')
            .transition().duration(200)
            .style('stroke', 'lightgrey')
            .style('opacity', '0.2');

          d3.selectAll('.' + selectedSpecie)
            .transition().duration(200)
            .style('stroke', color(selectedSpecie))
            .style('opacity', '1');
        };

        const doNotHighlight = function(d) {
          console.log(d);
          d3.selectAll('.line')
            .transition().duration(200).delay(1000)
            .style('stroke', function (d) {
              return (color(d.Species));
            })
            .style('opacity', '1');
        };

        function path(d) {
          return d3.line()(dimensions.map(p => [x(p), y[p](d[p])]));
        }

        svg
          .selectAll('myPath')
          .data(this.data)
          .enter()
          .append('path')
          .attr('class', function(d) {
            return 'line ' + d.Species;
          })
          .attr('d', path)
          .style('fill', 'none')
          .style('stroke', function(d) {
            return (color(d.Species));
          })
          .style('opacity', 0.5)
          .on('mouseover', highlight)
          .on('mouseleave', doNotHighlight);

        svg.selectAll('myAxis')
          .data(dimensions).enter()
          .append('g')
          .attr('class', 'axis')
          .attr('transform', function(d) {
            return 'translate(' + x(d) + ')';
          })
          .each(function(d) {
            d3.select(this).call(d3.axisLeft().ticks(5).scale(y[d]));
          })
          .append('text')
          .style('text-anchor', 'middle')
          .attr('y', -9)
          .text(function(d) {
            return d;
          })
          .style('fill', 'black');*/



      }).catch();

  }

}
