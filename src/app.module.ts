import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';

@Module({
	imports: [
		UserModule,
		TypeOrmModule.forRootAsync({
			useFactory: () => configService.getTypeOrmConfig()
		})
	],
	controllers: [],
	providers: []
})
export class AppModule {}
