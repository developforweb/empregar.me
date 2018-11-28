import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  tabBarElement: any;

  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fire: AngularFireAuth,
    public toastCtrl: ToastController) {

      this.tabBarElement = document.querySelectorAll('.show-tabbar');
  }

  //esconder tab se nao estiver logado

  ionViewWillEnter() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs == null) {
      this.tabBarElement.style.dysplay= 'none';
    }
  }

    ionViewWillLeave(){
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'none';
      });
    }
    }

  //fim do metodo de esconder tab

  registrar(){

    let toast = this.toastCtrl.create({duration: 2000, position: 'bottom'});

    this.fire.auth.createUserAndRetrieveDataWithEmailAndPassword(this.email.value, this.password.value)
    .then(data =>{
      console.log('Aqui temos a data: ', data);
      toast.setMessage('Usuario Cadastrado com Sucesso! ');
      toast.present();
      this.navCtrl.setRoot(TabsPage);

    })
    .catch((error: any) =>{
      if(error.code == 'auth/email-already-in-use'){
        toast.setMessage('O e-mail já está em uso.')
      }else if(error.code == 'auth/invalid-email'){
        toast.setMessage('O e-mail digitado não é valido.')
      }else if(error.code == 'auth/operation-not-allowed'){
        toast.setMessage('Não está habilitado para cirar usúarios')
      }else if(error.code == 'auth/weak-password'){
        toast.setMessage('Senha muito fraca.')
      }
      toast.present();

    });

  }

}
