import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config/config.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('/api');

	if (!configService.isProduction()) {
		const options = new DocumentBuilder()
			.setTitle('Sample')
			.setDescription('The API description')
			.setVersion('1.0')
			.build();
		const document = SwaggerModule.createDocument(app, options);
		SwaggerModule.setup('api', app, document);
	}

	await app.listen(5000);
}
bootstrap();
