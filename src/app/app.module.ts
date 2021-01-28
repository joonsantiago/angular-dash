import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './core/template/template.module';
import { MaterialModulesModule } from './core/material-modules/material-modules.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { DecimalBrPipe } from './pipes/decimal-br.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DecimalBrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    
    MaterialModulesModule,
    TemplateModule,
  ],
  providers: [DecimalBrPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
