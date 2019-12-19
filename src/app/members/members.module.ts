import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [MemberListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [MemberListComponent]
})
export class MembersModule { }
