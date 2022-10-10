import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * Processo de administração do node, dentro das variáveis de 
   * ambiente, usamos o times only '-03:00' horário de brasilia
  */
  process.env.TZ = '-03:00';
  /*Sistema do classe validator para ajudar a tratar a entrada de dados do usuário.*/
  app.useGlobalPipes(new ValidationPipe ());
  /*Permitindo a entrada de requisições vindo de qualquer lugar*/
  app.enableCors();
  
  /*Mudando para 3000, pois o REACT roda na porta 3000 */
  await app.listen(4000);
}
bootstrap();
