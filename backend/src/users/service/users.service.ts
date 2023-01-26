import { CreateUserDto } from './../dtos/CreateUser.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private takeUsers = [
        { username: 'Anouhi', email: 'anouhi@gmamil.com' },
        { username: 'gaba', email: 'gaba@gmamil.com' },
    ]

    fetchUsers () {
        return this.takeUsers;
    }

    createUser(userDetails: CreateUserDto) {
        this.takeUsers.push(userDetails);
        return;
    }

    fetchUserById (id: number) {
        return ({ id, username: 'gaba', email: 'gaba@gmamil.com' });
    }
}
