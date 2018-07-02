import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.css']
})
export class DelayComponent implements OnInit {

  checked: boolean = false;

  items: string[] = [
    'JavaScript',
    'Html',
    'Css',
    'Sass',
    'Scss',
    'Jade/pug',
    'Php',
    'TypeScript',
    'Gulp',
    'Node.js',
    'EcmaScript',
    'Webpack',
    'Grunt',
    'AngularJs',
    'Angular2+',
    'React',
    'Vue',
    'Backbone.js',
    'VS Code',
  ];

  constructor() { }

  ngOnInit() {
  }

}
