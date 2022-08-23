import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
    console.log("Dentro del constructos de app-about");

  }

  ngOnInit(): void {
    console.log("Dentro del ngOnInit de app-about");
  }

}
