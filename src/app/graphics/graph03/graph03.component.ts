import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthenticationService } from '../../authentication/authentication.service';

import * as d3 from 'd3';
import * as d3Selection from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-graph03',
  templateUrl: './graph03.component.html',
  styleUrls: ['./graph03.component.scss']
})
export class Graph03Component implements OnInit {

  // uploadPercent: Observable<number>;
  // downloadURL: Observable<string>;
  // dimensions: Array<string>;

  uid: string;

  url =
    'https://gist.githubusercontent.com/' +
    'jacsonlinux/da7cf481a61b93d6482b5ada7a5' +
    '08691/raw/bf8d27362d0636ac63c1513233cac' +
    '56787a08916/iris.csv';

  constructor(
    private angularFireStorage: AngularFireStorage,
    private authenticationService: AuthenticationService
  ) {
    console.log('TestComponet');
    this.authenticationService.user.subscribe(res => this.uid = res.uid);
  }


  /*uploadFile(event) {
    const file = event.target.files[0];
    console.log(file);
    const filePath = `/${this.uid}/${file.name}`;
    const fileRef = this.angularFireStorage.ref(filePath);
    const task = this.angularFireStorage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges()
      .pipe( finalize(() => this.downloadURL = fileRef.getDownloadURL() ) )
      .subscribe();
  }*/

  /*drawChart() {
    const m = [100, 10, 10, 60];
    const w = 1000 - m[1] - m[3];
    const h = 300 - m[0] - m[2];

    const x = d3.scaleBand().rangeRound([0, w]);
    const y = {};
    const dragging = {};

    const line = d3.line();

    const svg = d3.select('#graphccc').append('svg:svg')
      .attr('width', w + m[1] + m[3])
      .attr('height', h + m[0] + m[2])
      .append('svg:g')
      .attr('transform', 'translate(' + m[3] + ',' + m[0] + ')');

    const data = [{
      'A': 200,
      'B': 3000,
      'C': 2300,
      'D': 4320,
      'E': 1230,
      'F': 7400,
      'G': 1431,
      'H': 1400,
      'I': 4300,
      'J': 6750
    }, {
      'A': 1002,
      'B': 2003,
      'C': 2773,
      'D': 3432,
      'E': 1673,
      'F': 740,
      'G': 1231,
      'H': 1900,
      'I': 3000,
      'J': 675
    }];

    x.domain(this.dimensions = d3.keys(data[0]).filter(d => {
      if (d === 'name') { return false; }
      if (d === 'Plant' || d === 'Chemical' || d === 'Pathway' || d === 'Gene' || d === 'Disease') {
        y[d] = d3.scaleOrdinal()
          .domain(data.map(p => p[d]))
          .range([h, 0]);
      } else {
        y[d] = d3.scaleLinear()
          .domain(d3.extent(data, p => +p[d]))
          .range([h, 0]);
      }
      return true;
    }));

    svg.append('svg:g')
      .attr('class', 'background')
      .selectAll('path')
      .data(data)
      .enter().append('svg:path')
      .attr('d', path.bind(this));

    svg.append('svg:g')
      .attr('class', 'foreground')
      .selectAll('path')
      .data(data)
      .enter().append('svg:path')
      .attr('d', path.bind(this));

    const g = svg.selectAll('.dimension')
      .data(this.dimensions)
      .enter().append('svg:g')
      .attr('class', 'dimension')
      .attr('transform', d => 'translate(' + x(d) + ')')

    g.append('svg:g')
      .attr('class', 'axis')
      .each(function(d) {
        d3.select(this).call(d3.axisLeft(y[d]));
      })
      .append('svg:text')
      .attr('text-anchor', 'middle')
      .attr('y', -50)
      .attr('x', -10)
      .text(String);

    function position(d) {
      const v = dragging[d];
      return v == null ? x(d) : v;
    }

    function transition(g) {
      return g.transition().duration(500);
    }

    function path(d) {
      return line(this.dimensions.map(p => [position(p), y[p](d[p])]));
    }
  }*/

  ngOnInit() {
    /*d3.csv(`${this.url}`)
    .then(data => {
      console.log(data);
    });*/
  }


}
