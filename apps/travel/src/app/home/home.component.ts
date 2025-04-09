import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { PrimengModule } from '../module/primeng/primeng.module';
import { CommonService } from '../service/common.service';
import { TravelScheduleService } from '../service/travel-schedule.service';

@Component({
  selector: 'app-home',
  imports: [
    PrimengModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      state('*', style({
        opacity: 1,
        visibility: 'visible'
      })),
      transition(':enter', [
        animate('0.25s')
      ]),
      transition(':leave', [
        animate('0.25s')
      ])
    ])
  ],
})
export class HomeComponent implements OnDestroy {

  /** 是否登入 */
  isLogin = true;
  /** 訊息訂閱器 */
  msgSubscriper: Subscription;
  /** 黑屏訂閱 */
  blockSubscriper: Subscription;
  /** 登入狀態確認訂閱器 */
  loginStatusSubscriper: Subscription;
  /** 黑屏 */
  block = false
  /** 選單 */
  menu: Menu[] = []

  constructor(
    protected router: Router,
    protected commonService: CommonService,
    protected changeDef: ChangeDetectorRef,
    protected messageService: MessageService,
    protected confirmationService: ConfirmationService,
    protected travelScheduleService: TravelScheduleService
  ) {
    this.blockSubscriper = this.commonService.blockEmitter.subscribe(val => {
      this.block = val;
      this.changeDef.detectChanges();
    });
    this.msgSubscriper = this.commonService.msgEmitter.subscribe(val => {
      this.messageService.add(val);
    })
    this.loginStatusSubscriper = this.commonService.loginStatusEmitter.subscribe(val => {
      this.isLogin = val;
    })

    if (this.commonService.isTestArea()) {
      this.menu = [
        { label: '我的行程列表', url: 'schedule_list', isLogin: true }
      ];
    } else {
      this.menu = [
        { label: '我的行程列表', url: 'schedule_list', isLogin: true },
        { label: '登出', url: 'logout', isLogin: true },
        { label: '登入', url: 'login', isLogin: false },
        { label: '註冊', url: 'register', isLogin: false }
      ];
    }
  }

  /** 關閉網頁 */
  ngOnDestroy() {
    this.blockSubscriper.unsubscribe();
    this.msgSubscriper.unsubscribe();
  }

  /** 切換索引 */
  goto(url: string): void {
    if (url === 'logout') {
      this.confirmationService.confirm({
        header: '登出確認',
        message: '即將登出系統，是否確認要登出?',
        accept: () => {
          this.logout()
        }
      })
    } else {
      this.router.navigate(['/' + url]);
    }
  }

  /** 登出 */
  async logout(): Promise<void> {
    await this.travelScheduleService.logout().forEach(
      res => {
        if (this.commonService.afterServerResponse(res)) {
          this.commonService.showMsg('s', '登出成功');
        }
      }
    )
  }

  /** 前往GoogleMap */
  gotoGoogleMap(): void {
    this.confirmationService.confirm({
      header: '確認',
      message: '是否確認要前往Google Map',
      accept: () => {
        window.open('https://www.google.com.tw/maps', '_blank');
      }
    })
  }
}

/**
 * 選單
 */
interface Menu {
  label: string;
  url: string;
  isLogin: boolean;
}
