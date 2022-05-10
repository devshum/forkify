import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessageModule } from '../module-message/message.module';
import { SvgModule } from '../module-svg/module-svg.module';

import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchComponent } from './components/search/search.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    SearchComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SvgModule,
    MessageModule
  ],
  exports: [LayoutComponent]
})
export class MainModule { }
