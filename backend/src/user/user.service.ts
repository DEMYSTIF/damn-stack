import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User, UserDoc } from './schema/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDoc>) {}

    async create(userDto: UserDto): Promise<User> {
        const newUser = new this.userModel(userDto);
        return newUser.save();
    }

    async readAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async update(id: any, userDto:UserDto): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, userDto, {new:true});
    }

    async delete(id: string): Promise<User> {
        return await this.userModel.findByIdAndRemove(id);
    }
}
