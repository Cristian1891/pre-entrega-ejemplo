import { Component } from '@angular/core';
import { User } from './models/user';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  userName = '';

  users: User[] = [
    {
      id: 1,
      name: 'Bart',
      lastName: 'Simpson',
      email: 'bart@mail.com',
    },
    {
      id: 2,
      name: 'Nelson',
      lastName: 'Muntz',
      email: 'nelson@mail.com',
    },
  ];

  constructor(private matDialog: MatDialog) {}

  openUsersDialog(): void {
    this.matDialog
      .open(UsersDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.users = [
              ...this.users,
              {
                ...v,
                id: new Date().getTime(),
              },
            ];
          }
        },
      });
  }

  onEditUser(user: User): void {
    this.matDialog
      .open(UsersDialogComponent, {
        data: user,
      })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            // CREANDO UNA COPIA DEL ARRAY ACTUAL
            // const arrayNuevo = [...this.users];

            // const indiceToEdit = arrayNuevo.findIndex((u) => u.id === user.id);

            // arrayNuevo[indiceToEdit] = { ...arrayNuevo[indiceToEdit], ...v };

            // this.users = [...arrayNuevo];

            this.users = this.users.map((u) =>
              u.id === user.id ? { ...u, ...v } : u
            );
          }
        },
      });
  }

  onDeleteUser(userId: number): void {
    if (confirm('Esta seguro?')) {
      this.users = this.users.filter((u) => u.id !== userId);
    }
  }

}
