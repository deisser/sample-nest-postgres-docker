import { User } from '../../../entity/user.entity';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsString, IsUUID } from 'class-validator';

export class UserDTO implements Readonly<UserDTO> {
	@ApiModelProperty({ required: false })
	@IsUUID()
	id: string;

	@ApiModelProperty({ required: true })
	@IsString()
	firstname: string;

	@ApiModelProperty({ required: true })
	@IsString()
	lastname: string;

	@ApiModelProperty({ required: true })
	@IsString()
	eMail: string;

	public static fromEntity(entity: User) {
		const user = new UserDTO();
		user.id = entity.id;
		user.firstname = entity.firstname;
		user.lastname = entity.firstname;
		user.eMail = entity.eMail;
		return user;
	}

	public static toEntity(dto: UserDTO): User {
		const user = new User();
		user.lastname = dto.lastname;
		user.firstname = dto.firstname;
		user.eMail = dto.eMail;
		return user;
	}
}
