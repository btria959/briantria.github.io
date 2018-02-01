import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatDividerModule
  ],
  exports: [
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatDividerModule
  ]
})
export class AppMaterialModule { }
