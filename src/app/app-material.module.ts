import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class AppMaterialModule { }
