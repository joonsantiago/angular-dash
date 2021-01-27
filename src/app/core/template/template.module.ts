import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateComponent } from './template.component';
import { MaterialModulesModule } from '../material-modules/material-modules.module';

@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    MaterialModulesModule
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
