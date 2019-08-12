import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  uid: string;

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

  /*jsAugusto() {
    const height = 500;
    const width = 500;
    const gap = 10;

    // overall svg
    const svg = d3.select('div#jacsonlinux')
      .append('svg')
      .attr('id', 'mainsvg')
      .attr('height', height)
      .attr('width', width * 2 + gap);

    // first svg
    const svg1 = d3.select('svg#mainsvg')
      .append('svg')
      .attr('id', 'svg1')
      .attr('height', height)
      .attr('width', width);
    const svg2 = d3.select('svg#mainsvg')
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

    // simulate some data
    const nPts = 1000;
    const index = d3.range(nPts);
    const data = index.map(i => {
      const x = Math.random() * (width - 10) + 5;
      const y = x * 0.3 + Math.random() * height / 2;
      const z = x * 0.4 + Math.random() * height / 2;
      return { x, y, z };
    });


    // plot y vs x in first plot
    svg1.selectAll('empty')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => height - d . y + 10)
      .attr('class', (d, i) => 'pt' + i)
      .attr('r', 5)
      .attr('stroke', 'black')
      .attr('fill', 'slateblue')
      .on('mouseover', (d, i) => {
        console.log(i);
        d3.selectAll('circle.pt' + i)
          .attr('fill', 'Orchid')
          .attr('r', 10);
      })
      .on('mouseout', (d, i) => {
        d3.selectAll('circle.pt' + i)
          .attr('fill', 'slateblue')
          .attr('r', 5);
      });

    // plot z vs x in 2nd plot
    svg2.selectAll('empty')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => height - d . z + 10)
      .attr('class', (d, i) => 'pt' + i)
      .attr('r', 5)
      .attr('stroke', 'black')
      .attr('fill', 'slateblue')
      .on('mouseover', (d, i) => {
        console.log(i);
        d3.selectAll('circle.pt' + i)
          .attr('fill', 'Orchid')
          .attr('r', 10);
      })
      .on('mouseout', (d, i) => {
        d3.selectAll('circle.pt' + i)
          .attr('fill', 'slateblue')
          .attr('r', 5);
      });
  }*/

  uploadFile(event) {
    const file = event.target.files[0];
    // console.log(event.target.);
  }

  ngOnInit() {

   const x  = d3.csv('iris.csv').then(res => res);


  }

}
