import { Component, OnInit } from '@angular/core';
import { ModalService } from "../../servicios/modal.service";

declare var $: any;

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {

  elecJug: string = "vacio.png";
  elecCPU: string = "ppt.gif";

  marcaJ: number = 0;
  marcaCPU: number = 0;

  resultado: string = "";

  modalText: string;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  playAgain(){
    location.href = "/ppt";
  }

  irAHome(){
    location.href = "/home";
  }

  Elegir(x){
    //document.getElementById("eleccion").src = "./../";
    
    document.getElementById("empate").style.display = "none";
    //var fileName = "";

    if (x == 1) {
      this.elecJug = "piedra1.png";
    } else if (x == 2) {
      this.elecJug = "papel1.png";
    } else {
      this.elecJug = "tijera1.png";
    }
     
    var y = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(y);
    if (y == 1) {
      this.elecCPU = "piedra1.png";
    } else if (y == 2) {
      this.elecCPU = "papel1.png";
    } else {
      this.elecCPU = "tijera1.png";
    }

    if ( (x == 1 && y == 2) || (x == 2 && y == 3) || (x == 3 && y == 1) ) {
      //document.getElementById("")
      this.marcaCPU ++;
    } else if ((y == 1 && x == 2) || (y == 2 && x == 3) || (y == 3 && x == 1)) {
      this.marcaJ ++;
    } else {
      document.getElementById("empate").style.display = "block";
    }

    if (this.marcaJ == 5) {
      
      this.modalText = "GANASTE!!";
      this.openModal('custom-modal-1');
      

    } else if(this.marcaCPU == 5) {

      this.modalText = "PERDISTE!!";
      this.openModal('custom-modal-1');
    }

  }//fin Elegir

}
