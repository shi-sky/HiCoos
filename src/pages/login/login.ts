import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { WelcomePage } from '../welcome/welcome';
import { UserModel} from '../../model/user';
@Component({
    selector:'login-page',
    templateUrl:'login.html'
})

export class LoginPage {

    userInfo:UserModel={
        ID:null,
        UserName:'liuzhuang',
        PassWord:'111111'
    }
    constructor(public NavCtrl:NavController,public LoadCtrl:LoadingController){


    }


    loadDefault(){

        let loading = this.LoadCtrl.create({
            content:"loading...",//loading框显示的内容
            //dismissOnPageChange:true, // 是否在切换页面之后关闭loading框
            showBackdrop:false //是否显示遮罩层
        });
        loading.present();// 弹出load框
        setTimeout(()=>{
            loading.dismiss();
            this.NavCtrl.push(TabsPage);//跳转页面
        },1000);

        // 上面这段代码先是在按下按钮1000毫秒之后挑战页面，再在3000毫秒之后关闭loading框
        // 但是因为设置了切换页面之后关闭loading框，因此在切换页面后则关闭loading框
    }

    btnClick(){
        this.loadDefault();
    }
}
