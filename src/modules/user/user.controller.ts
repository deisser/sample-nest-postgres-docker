import { UserService } from './user.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	public async getAll(): Promise<UserDTO[]> {
		return await this.userService.getAll();
	}

	@Post()
	public async post(@Body() dto: UserDTO): Promise<UserDTO> {
		return await this.userService.create(dto);
	}
}
