import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as d3Selection from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import {HttpClient} from '@angular/common/http';
import {AngularFireStorage} from '@angular/fire/storage';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {GraphicsService} from '../graphics.service';

@Component({
  selector: 'app-graph06',
  templateUrl: './graph06.component.html',
  styleUrls: ['./graph06.component.scss']
})
export class Graph06Component implements OnInit {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  dimensions: Array<string>;

  uid: string;

  specie: string;

  file: any;

  constructor(
    private http: HttpClient,
    private graphicsService: GraphicsService,
    private angularFireStorage: AngularFireStorage,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.user.subscribe(res => this.uid = res.uid);
  }

  ngOnInit() { this.scatterPlot2(); this.getData(); }

  scatterPlot2() {
    const margin = {top: 10, right: 30, bottom: 30, left: 60};
    const  width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select('div#jacsonlinux')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')');

    d3.csv('assets/iris.csv')
      .then(data => {

        const x: any = d3
          .scaleLinear()
          .domain([4, 8])
          .range([ 0, width ]);

        svg.append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x));

        const y: any = d3.scaleLinear()
          .domain([0, 9])
          .range([ height, 0]);

        svg.append('g')
          .call(d3.axisLeft(y));

        const color: any = d3.scaleOrdinal()
          .domain(['setosa', 'versicolor', 'virginica' ])
          .range([ '#440154ff', '#21908dff', '#fde725ff']);


        const highlight = d => {

          const selectedSpecie = d.Species;
          this.specie = selectedSpecie;
          console.log(selectedSpecie);

          d3.selectAll('.dot')
            .transition()
            .duration(200)
            .style('fill', 'lightgrey')
            .attr('r', 3);

          d3.selectAll('.' + selectedSpecie)
            .transition()
            .duration(200)
            .style('fill', color(selectedSpecie))
            .attr('r', 7);
        };

        const  doNotHighlight = () => {
          this.specie = '';
          d3.selectAll('.dot')
            .transition()
            .duration(200)
            .style('fill', 'lightgrey')
            .attr('r', 5 );
        };

        svg.append('g')
          .selectAll('dot')
          .data(data)
          .enter()
          .append('circle')
          .attr('class', d => 'dot ' + d.Species)          .attr('cx', d => x(d.Sepal_Length))
          .attr('cy', d => y(d.Petal_Length))
          .attr('r', 5)
          .style('fill', d => color(d.Species))
          .on('mouseover', highlight)
          .on('mouseleave', doNotHighlight );
      });
  }

  uploadFile(event) {
    const file = event.target.files[0];
    // console.log(file);
    const filePath = `/${this.uid}/${file.name}`;
    const fileRef = this.angularFireStorage.ref(filePath);
    const task = this.angularFireStorage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges()
      .pipe( finalize(() => this.downloadURL = fileRef.getDownloadURL() ) )
      .subscribe();
  }

  getData() {
    this.http.get('https://gist.gith' +
      'ubusercontent.com/jacsonlinux/da7cf481a' +
      '61b93d6482b5ada7a508691/raw/510da017a4ca7c5' +
      '1bc27b0a98e048d2700de4c5b/iris.csv', {responseType: 'text'})
      .subscribe(data => {
        // console.log(data);
      });
  }

  fileChanged(event) {
    console.log(event);
    this.file = event.target.files[0];
    this.uploadDocument(this.file);
  }

  uploadDocument(file) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    };
    fileReader.readAsText(this.file);
  }



}












