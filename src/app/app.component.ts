import { Component, ViewChild } from '@angular/core';
//判断是否是第一次开启app采用的是native的storage组件
import { Storage } from '@ionic/storage';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
//导航控件
import { TabsPage } from '../pages/tabs/tabs';
//欢迎页面
import { WelcomePage } from '../pages/welcome/welcome';
//列表页面
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // make HelloIonicPage the root (or first) page
  rootPage: any = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
