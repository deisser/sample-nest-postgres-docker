import { User } from './../../entity/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
	constructor(@InjectRepository(User) private readonly repo: Repository<User>) {}

	public async getAll(): Promise<UserDTO[]> {
		return await this.repo.find().then((items) => items.map((e) => UserDTO.fromEntity(e)));
	}

	public async create(dto: UserDTO): Promise<UserDTO> {
		const user = UserDTO.toEntity(dto);
		user.createDateTime = new Date();
		return await this.repo.save(user).then((e) => {
			console.log(e);
			return UserDTO.fromEntity(e);
		});
	}
}
