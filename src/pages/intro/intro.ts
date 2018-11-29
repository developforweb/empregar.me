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
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/imgs/slide1.jpg",
    },
    {
      title: "DIVERSAS OPÇÕES!",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/slide2.jpg",
    },
    {
      title: "RECOLOCAÇÃO!",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/slide3.jpg",
    }
  ];

  ionViewDidLoad() {
  }
avancar(){
  this.navCtrl.setRoot(HomePage) //usar o setRoot, pra ser a pag principal, e nao ter botao voltar
}
}
