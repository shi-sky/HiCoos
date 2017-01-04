import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Validators, FormBuilder } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
//欢迎页面
import { WelcomePage } from '../pages/welcome/welcome';
//登陆
import { LoginPage } from '../pages/login/login';
//导航控件
import { TabsPage } from '../pages/tabs/tabs';
//消息页面
import { MessagePage } from '../pages/message/message';
//工作页面
import { WorkPage } from '../pages/work/work';
//我的设置
import { UserPage } from '../pages/user/user';
//列表页面
import { ListPage } from '../pages/list/list';
//详情页面
import { ItemDetailsPage } from '../pages/item-details/item-details';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    TabsPage,
    MessagePage,
    WorkPage,
    UserPage,
    ListPage,
    ItemDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    TabsPage,
    MessagePage,
    WorkPage,
    UserPage,
    ListPage,
    ItemDetailsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]

})
export class AppModule {}
