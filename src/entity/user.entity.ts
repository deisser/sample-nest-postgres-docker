import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
	@Column({ type: 'varchar', length: 300 })
	firstname: string;

	@Column({ type: 'varchar', length: 300 })
	lastname: string;

	@Column({ type: 'varchar', length: 300 })
	eMail: string;
}
