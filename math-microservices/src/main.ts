import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('Main');

const additionalOptions = {
  transport: Transport.TCP,
  options: {
    host: 'localhost',
    port: 8000,
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    additionalOptions,
  );

  app.listen();
}
bootstrap();
