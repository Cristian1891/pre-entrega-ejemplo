import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// import { IconsModule } from './pages/icons/icons.module';
// import { FormsModule as FormsPageModule } from './pages/forms/forms.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    SharedModule,
    HomeModule,
    MatListModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
