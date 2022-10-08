import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AlreadyExistsInterceptor } from './utils/interceptors/EntityAlreadyExistsInterceptor';
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
  app.useGlobalInterceptors(new AlreadyExistsInterceptor());

  await app.listen(process.env.PORT || 8080, () => {
    console.log(`Server listen in port ${port}`);
  });
}
bootstrap();
