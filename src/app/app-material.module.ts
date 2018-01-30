import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule
  ],
  exports: [
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule
  ]
})
export class AppMaterialModule { }
