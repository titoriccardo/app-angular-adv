import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css',
})
export class ProgressComponent {

  progreso1: number = 54
  progreso2: number = 56

  get getProgreso1 (){
    return `${this.progreso1}%`
  }

  get getProgreso2 (){
    return `${this.progreso2}%`
  }

  cambioValorHijo(valor:number){
    console.log('kkjjh', valor)
  }

}
