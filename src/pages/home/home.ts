import { TabsPage } from './../tabs/tabs';
import { Users } from './users';
import { AngularFireAuth } from 'angularfire2/auth';

import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RecuperarPage } from '../recuperar/recuperar';

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabBarElement: any;
  users: Users = new Users();

  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public fire: AngularFireAuth) {

      this.tabBarElement = document.querySelectorAll('.show-tabbar');

  }
//esconder tab se nao estiver logado

  ngAfterViewInit() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'none';
      });
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
  entrar(){
    let toast = this.toastCtrl.create({duration: 3000, position: 'top'});

    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then(data =>{

      console.log('Data do login: ', data);
      this.users.email = this.email.value;
      this.users.senha = this.password.value;
      this.navCtrl.setRoot(TabsPage);

    })
    .catch((error: any)=> {
      if(error.code == 'auth/invalid-email'){
        toast.setMessage('O e-mail é inválido!')
      }else if(error.code == 'auth/user-disabled'){
        toast.setMessage('Usuario desabilitado!')
      }else if(error.code == 'auth/user-not-found'){
        toast.setMessage('Usuario não encontrado!')
      }else if(error.code == 'auth/wrong-password'){
        toast.setMessage('Senha inválida!')
      }
      toast.present();



    });

    //console.log('Email digitado:',this.email.value);
    //console.log('Senha difitada:', this.password.value);
  }
  cadastrar(){
    this.navCtrl.push(RegisterPage);
  }
  recuperar(){
    this.navCtrl.push(RecuperarPage);
  }
  loginFacebook(){
    let toast = this.toastCtrl.create({duration: 3000, position: 'top'});
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res =>{
      //console.log(res);
      this.navCtrl.setRoot(TabsPage);
    })
    .catch((error:any)=>{
      if(error.code == 'auth/account-exists-with-different-credential'){
        toast.setMessage('O email já existe em outra conta com senha diferente!')
      }else if(error.code == 'error.email'){
        toast.setMessage('O e-mail já existe em outra conta!')
      }else if(error.code == 'error.credential'){
        toast.setMessage('Usuario ou Senha incorreta!')
      }
      toast.present();
    }
    )};
  visitante(){

    let toast = this.toastCtrl.create({duration: 3000, position: 'top'});
    this.fire.auth.signInAnonymously()
    .then(data =>{

      console.log('Data do anonimo', data);
      this.navCtrl.setRoot(TabsPage);

    })
    .catch((error: any) =>{
      if(error.cod == 'auth/operation-not-allowed'){
        toast.setMessage('Modo visitante está desabilitado')
      }else{
        console.log('Error', error);
      }
      toast.present();
    });
  }

}
