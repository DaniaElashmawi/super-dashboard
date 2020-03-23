import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TreeviewComponent } from '../../shared/components/treeview/treeview.component';

@NgModule({
  declarations: [TreeviewComponent],
  imports: [ CommonModule],
  exports : [TreeviewComponent]
})
export class TreeViewModule { }
