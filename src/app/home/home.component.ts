import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

/*status: string = "Form no submitted";
defaultName: string = "";
user: string = "";*/
  products = [];

  constructor(private dataService: DataService) {
    /* console.log("Dentro del constructos de app-home"); */
  }


  ngOnInit(): void {
    /* console.log("Dentro del ngOnInit de app-home"); */
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    });
  }

  /*onSendForm(){
    //alert("Formulario Enviado");
    this.status = "Form has been send";
  }*/

  /*onDefaultForm(){
    this.defaultName = "Fornite";
  }*/
}
