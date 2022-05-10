import { NgModule } from '@angular/core';
import { SvgModule } from '../module-svg/module-svg.module';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [
    MessageComponent
  ]
})
export class MessageModule { }
