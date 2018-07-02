import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputbg',
  templateUrl: './inputbg.component.html',
  styleUrls: ['./inputbg.component.css']
})
export class InputbgComponent implements OnInit {
  text: string = 'Lorem ipsum...';
  bg: string = 'rgba(0,0,255,0.1)';


  constructor() { }

  ngOnInit() {
  }

}
