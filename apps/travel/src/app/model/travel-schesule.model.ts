import { v4 as uuidv4 } from 'uuid';

abstract class BasicTable {
    /** 主要識別碼 */
    pk_id?: string = uuidv4().replace(/-/g, '');
    /** 建立日期 */
    create_dt: Date = new Date();
    /** 最後異動日 */
    last_update_dt: Date = new Date();
    /** 版本 */
    version = 0;
    /** 是否刪除 */
    isdelete: 'Y' | 'N' = 'N';
    /** 選取狀態 */
    selected = false;
    /** 刪除日 */
    delete_dt?: Date;
}

/** 行程計畫 */
export class TravelSchedule extends BasicTable {
    /** 行程標題 */
    title?: string;
    /** 起 */
    start_date?: Date;
    /** 迄 */
    end_date?: Date;
    /** 行程說明 */
    description?: string;
    /** 行程備註 */
    memo?: string;
    /** 行程預計花費 */
    preparation_cost?: number = 0;
    /** 行程實際花費 */
    real_cost?: number = 0;
    /** 行程介紹 */
    day_introduces: TravelDayIntroduce[] = [];
    /** 花費紀錄 */
    cost_records: TravelCostRecord[] = [];
    /** 檔案附檔 */
    file_list: TravelScheduleFile[] = [];
    /** 天數 */
    pass_day = 1;
    /** 選擇天數 */
    selected_introduce?: TravelDayIntroduce;
    /** 上傳檔案選取 */
    file_selected = false;
}

/** 旅遊單天規劃 */
export class TravelDayIntroduce extends BasicTable {
    /** 行程PK */
    schedule_pk_id?: string;
    /** 日期 */
    date?: Date;
    /** 當日標題 */
    title?: string;
    /** 當日說明 */
    description?: string;
    /** 行程介紹 */
    schedule_list: TravelDaySchedule[] = [];
    /** 旅店名稱 */
    hotel_name?: string;
    /** 旅店位置網址 */
    hotel_map_location?: string;
    /** 購物清單 */
    shopping_detail?: string;
    /** 備註清單 */
    memo?: string
    /** 早餐 */
    breakfirst?: string;
    /** 早餐位置 */
    breakfirst_map_location?: string;
    /** 午餐 */
    launch?: string;
    /** 午餐位置 */
    launch_map_location?: string;
    /** 晚餐 */
    dinner?: string;
    /** 晚餐位置 */
    dinner_map_location?: string;
}

/** 單天行程 */
export class TravelDaySchedule extends BasicTable {
    /** 序號 */
    ser_no?: number;
    /** 行程PK */
    introduce_pk_id?: string;
    /** 行程時間 */
    time?: string;
    /** 行程介紹圖片 */
    pic_src?: string;
    /** 行程說明 */
    description?: string;
    /** 行程位置網址 */
    map_location?: string;
    /** 行程類型 */
    type: 'move' | 'stay' = 'stay'
}

/** 行程附檔 */
export class TravelScheduleFile extends BasicTable {
    /** 行程PK */
    schedule_pk_id?: string;
    /** 檔案PK_ID */
    file_pk_id?: string;
    /** 檔案名 */
    file_name?: string;
    /** 檔案類型 */
    file_type?: 'A' | 'B';
    /** 使用者pk_id */
    user_pk_id?: string;
    /** 寬 */
    width?: number;
    /** 高 */
    height?: number;
    /** 是否為pdf */
    is_pdf?: boolean
    /** 序號 */
    ser_no?: number;
}

/** 花費紀錄 */
export class TravelCostRecord extends BasicTable {
    /** 行程PK_ID */
    schedule_pk_id?: string;
    /** A機票、B住宿、C景點票券、D交通、E吃喝、F禮物、G其他 */
    type?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
    /** 序號 */
    ser_no?: number;
    /** 說明 */
    description?: string;
    /** 備註 */
    memo?: string;
    /** 花費金額 */
    cost = 0;
    /** 幣別 */
    currency_type?: string = 'TWD';
    /** 匯率 */
    exchange_rate?: number = 1;
    /** 計算後成本 */
    final_cost?: number = 0;
}