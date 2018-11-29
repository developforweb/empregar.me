import { PostPage } from './../post/post';
import { WordpressService } from './../../services/wordpress.service';

import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the VagasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vagas',
  templateUrl: 'vagas.html',
})
export class VagasPage {

  posts: Array<any> = new Array<any>();
  morePagesAvailable: boolean = true;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public wordpressService: WordpressService) {

    }//fim constructor

    ionViewWillEnter(){
      this.morePagesAvailable = true;
      if(!(this.posts.length > 0)){
        let loading = this.loadingCtrl.create();
        loading.present();

        this.wordpressService.getRecentPost()
        .subscribe(data => {
          console.log('Data da Postagem: ', data);
          for(let post of data){
            post.excerpt.rendered = post.excerpt.rendered.split('<a')[0] + "<p>";

            this.posts.push(post);
          }
          loading.dismiss();
        })


      }
    }


  logout(){
    let toast = this.toastCtrl.create({duration: 2000, position: 'top'});

    this.fire.auth.signOut();
    toast.setMessage('Desconectado com sucesso!');
    toast.present()

    this.navCtrl.setRoot(HomePage);

  }

  postTapped(event, post){
    this.navCtrl.push(PostPage,{
      item: post
    });
  }
  doInfinite(infiniteScroll){
    let page = (Math.ceil(this.posts.length/10)) + 1;
    let loading = true;
    this.wordpressService.getRecentPost(page)
    .subscribe(data => {
      for(let post of data){
        if(!loading){
          infiniteScroll.complete();
        }
      this.posts.push(post);
      loading = false;
      }
    }, err => {
      this.morePagesAvailable = false; //faz parar de carregar quando acabar as paginas
    }
    )
  }

  doRefresh(refresher){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    setTimeout(()=> {
      refresher.complete();
    }, 2000);

  }

}
