import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

status: string = "Form no submitted";

  constructor() {
    /* console.log("Dentro del constructos de app-home"); */

  }

  ngOnInit(): void {
    /* console.log("Dentro del ngOnInit de app-home"); */

  }

  onSendForm(){
    /* alert("Formulario Enviado"); */
    this.status = "Form has been send";
  }

}
