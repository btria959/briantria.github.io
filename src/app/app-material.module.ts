import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  exports: [
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
