import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  slides = [
    {
      title: "FACILIDADE DE USO!",
      description: "Poste vagas de emprego<br/> pelo seu celular <b>EM MINUTOS</b>.",
      image: "assets/imgs/slide1.jpg",
    },
    {
      title: "DIVERSAS OPÇÕES!",
      description: "Você é uma empresa e está a procura de um candidato para sua vaga de <b>EMPREGO</b>.",
      image: "assets/imgs/slide2.jpg",
    },
    {
      title: "RECOLOCAÇÃO!",
      description: "Você é um candidato em busca de uma oportunidade de <b>TRABALHO</b>.",
      image: "assets/imgs/slide3.jpg",
    }
  ];

  ionViewDidLoad() {
  }
avancar(){
  this.navCtrl.setRoot(HomePage) //usar o setRoot, pra ser a pag principal, e nao ter botao voltar
}
}
