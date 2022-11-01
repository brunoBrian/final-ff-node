import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NotFoundInterceptor } from './utils/interceptors/EntityNotFoundInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8080;

  // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Interceptor
  app.useGlobalInterceptors(new NotFoundInterceptor());

  const config = new DocumentBuilder()
    .setTitle('Ame API - Comentários')
    .setDescription('API de comentarios com NestJS')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 8080, () => {
    console.log(`Server listen in port ${port}`);
  });
}
bootstrap();
