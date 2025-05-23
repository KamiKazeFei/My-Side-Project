import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  /**
   * 執行API查詢方法
   * @param action 動作
   * @param body 傳遞參數
   * @returns 回傳API執行結果
   */
  postApi(action: string, body: object) {
    const requestOptions = { withCredentials: true };
    return this.httpClient.post(fileurl + '/travel/' + action, body, requestOptions);
  }
}

export const fileurl = 'http://kamikaze.website:8000'