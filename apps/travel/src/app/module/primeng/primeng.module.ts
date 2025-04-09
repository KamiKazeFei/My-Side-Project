import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

const primengModules = [
  ButtonModule,
  CardModule,
  DragDropModule,
  DialogModule,
  ConfirmDialogModule,
  CalendarModule,
  InputNumberModule,
  InputTextModule,
  ToastModule,
  MessagesModule,
  TooltipModule,
  CheckboxModule,
  RadioButtonModule,
  EditorModule,
  SplitterModule,
  TabViewModule,
  SelectButtonModule,
  FileUploadModule
];

@NgModule({
  declarations: [],
  imports: [
    ...primengModules
  ],
  exports: [
    ...primengModules
  ]
})
export class PrimengModule { }
