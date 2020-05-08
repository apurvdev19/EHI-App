import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private upersons: User[] = [
    {
      id: 1,
      firstName: 'Abc',
      lastName: 'Pqr',
      email:'abc@gmail.com',
      phoneno:'7899205678',
      status:'Active'
    },
    {
      id: 2,
      firstName: 'Tyu',
      lastName: 'zmf',
      email:'tyu@gmail.com',
      phoneno:'8990045678',
      status:'Inactive'
    },
    {
      id: 3,
      firstName: 'jhp',
      lastName: 'zhp',
      email:'zhp@gmail.com',
      phoneno:'8789930329',
      status:'Inactive'
    },
    {
      id: 4,
      firstName: 'kyu',
      lastName: 'uio',
      email:'kyu@gmail.com',
      phoneno:'89990044030',
      status:'Active'
    },
    {
      id: 5,
      firstName: 'uit',
      lastName: 'yzx',
      email:'uit@gmail.com',
      phoneno:'87893903930',
      status:'Active'
    },
    {
     id:6,
    firstName:'Rickie',
    lastName:'Hermiston',
    email:'Dangelo_Ratke@yahoo.com',
    phoneno:'847-531-2386',
    status:'InActive'
   },
   {
    id:7,
   firstName:'Kieran',
   lastName:'Maggio',
   email:'Ulises.King@yahoo.com',
   phoneno:'(879) 406-9081',
   status:'Active'
  },
  {
    id:8,
   firstName:'Devin',
   lastName:'Buckridge',
   email:'Cesar.Boyer90@hotmail.com',
   phoneno:'(649) 284-8163 x70447',
   status:'InActive'
  },
  {
    id:9,
   firstName:'Tevin',
   lastName:'Runte',
   email:'Victor_Lesch@hotmail.com',
   phoneno:'132-436-2445 x51452',
   status:'InActive'
  },
  {
    id:10,
   firstName:'Fanny',
   lastName:'Konopelski',
   email:'Letha48@gmail.com',
   phoneno:'1-752-660-3031',
   status:'Active'
  }
  ]
  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: User) {
    let index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

}
