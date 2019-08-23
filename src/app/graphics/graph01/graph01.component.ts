import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-graph01',
  templateUrl: './graph01.component.html',
  styleUrls: ['./graph01.component.scss']
})
export class Graph01Component implements OnInit {

  file;
  displayValue;

  constructor(
  ) {
    console.log('Graph01Componet');
  }

  ngOnInit() { }

  jsAugusto(data) {

    const height = 400;
    const width = 500;
    const gap = 10;

    // overall svg
    const svg = d3.select('div#jacsonlinux')
      .append('svg')
      .attr('id', 'mainsvg')
      .attr('height', height)
      .attr('width', width * 2 + gap);

    // first svg
    const svg1: any = d3.select('svg#mainsvg')
      .append('svg')
      .attr('id', 'svg1')
      .attr('height', height)
      .attr('width', width);

    const svg2: any = d3.select('svg#mainsvg')
      .append('g') // group to move svg sideways
      .attr('transform', 'translate(' + (width + gap) + ')')
      .append('svg')
      .attr('id', 'svg2')
      .attr('height', height)
      .attr('width', width);

    // add a box around each SVG
    svg1.append('rect')
      .attr('height', height)
      .attr('width', width)
      .attr('stroke', 'black')
      .attr('fill', '#ccc')
      .attr('stroke-width', 2);

    svg2.append('rect')
      .attr('height', height)
      .attr('width', width)
      .attr('stroke', 'black')
      .attr('fill', '#ccc')
      .attr('stroke-width', 2);

    // plot y vs x in first plot
    svg1.selectAll('empty')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => d.x * width)
      .attr('cy', d => d.y * height)
      .attr('id', (d, i) => 'pt' + i)
      .attr('r', 5)
      .attr('stroke', 'black')
      .attr('fill', 'slateblue')
      .on('mouseover', (d, i) => {
        this.displayValue = `X: ${d.x} | Y: ${d.y}`;
        d3.selectAll('circle#pt' + i)
          .attr('fill', 'Orchid')
          .attr('r', 10);
      })
      .on('mouseout', (d, i) => {
        d3.selectAll('circle#pt' + i)
          .attr('fill', 'slateblue')
          .attr('r', 5);
      });

    // plot z vs x in 2nd plot
    svg2.selectAll('empty')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => d.x * width)
      .attr('cy', d => d.y * height)
      .attr('id', (d, i) => 'pt' + i)
      .attr('r', 5)
      .attr('stroke', 'black')
      .attr('fill', 'slateblue')
      .on('mouseover', (d, i) => {
        this.displayValue = `X: ${d.x} | Y: ${d.y} `;
        d3.selectAll('circle#pt' + i)
          .attr('fill', 'Orchid')
          .attr('r', 10);
      })
      .on('mouseout', (d, i) => {
        d3.selectAll('circle#pt' + i)
          .attr('fill', 'slateblue')
          .attr('r', 5);
      });
  }

  fileChanged(event) {
    this.file = event.target.files[0];
    this.uploadDocument();
  }

  uploadDocument() {
    const fileReader: any = new FileReader();
    fileReader.onload = (e) => {
      const data = d3.csvParse(fileReader.result);
      this.jsAugusto(data);
    };
    fileReader.readAsText(this.file);
  }

}
