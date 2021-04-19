import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HelloPageRoutingModule } from './hello-routing.module';

import { HelloPage } from './hello.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelloPageRoutingModule
  ],
  declarations: [HelloPage]
})
export class HelloPageModule {}

