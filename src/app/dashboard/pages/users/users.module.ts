import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersComponent } from './users.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [
    UsersComponent,
    UsersDialogComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [UsersComponent],
})
export class UsersModule { }
