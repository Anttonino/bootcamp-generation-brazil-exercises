import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Declare the brazilian time 
  process.env.TZ = '-03:00';
  // Http requisitions
  app.useGlobalPipes (new ValidationPipe ());
  // Enable Cross Origin
  app.enableCors ();
  // Change Http port
  await app.listen(4000);
}
bootstrap();