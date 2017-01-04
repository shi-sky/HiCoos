import { Component } from '@angular/core';
import { Tabs } from 'ionic-angular';
//消息页面
import { MessagePage } from '../message/message';
//工作页面
import { WorkPage } from '../work/work';
//我的设置
import { UserPage } from '../user/user';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  messRoot: any = MessagePage;
  workRoot: any = WorkPage;
  userRoot: any = UserPage;

  constructor() {

  }
}
