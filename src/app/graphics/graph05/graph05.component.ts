import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as d3Selection from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-graph05',
  templateUrl: './graph05.component.html',
  styleUrls: ['./graph05.component.scss']
})
export class Graph05Component implements OnInit {

  constructor() { }

  ngOnInit() { this.scatterplot1(); }

  scatterplot1() {

    const margin = {top: 10, right: 30, bottom: 30, left: 60};
    const width = 860 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    const svg = d3.select('#my_dataviz')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')');

    d3.csv('https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv')
      .then(data => {

        const x: any = d3.scaleLinear()
          .domain([0, 4000])
          .range([ 0, width ]);
        svg.append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x));

        const y: any = d3.scaleLinear()
          .domain([0, 500000])
          .range([ height, 0]);
        svg.append('g')
          .call(d3.axisLeft(y));

        svg.append('g')
          .selectAll('dot')
          .data(data)
          .enter()
          .append('circle')
          .attr('cx', d => x(d.GrLivArea))
          .attr('cy', d => y(d.SalePrice))
          .attr('r', 1.5)
          .style('fill', '#69b3a2');
      });


  }

}
