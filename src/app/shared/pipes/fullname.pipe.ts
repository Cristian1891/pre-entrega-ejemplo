import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../dashboard/pages/users/models/user';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): unknown {
    const firstArg = args[0];
    const result = `${value.name} ${value.lastName}`;

    switch (firstArg) {
      case 'lowercase':
        return result.toLowerCase();
      case 'uppercase':
        return result.toUpperCase();

      default:
        return result;
    }
  }

}
