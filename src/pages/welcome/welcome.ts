import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//导航控件
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
    constructor(public navCtr: NavController){
    };
    mySlideOptions = {
     initialSlide: 1,
     loop: true
   };
    goToHome(){
        this.navCtr.setRoot(TabsPage);
    }
}
