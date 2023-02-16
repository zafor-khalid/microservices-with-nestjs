import { Controller, Get, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
const logger = new Logger('AppController');

@Controller()
export class AppController {
  constructor() {}

  @MessagePattern('sum')
  async sumOfNumbers(data: Array<number>) {
    logger.log(
      'Received data is' + data.toString(),
    );
    return { result: data.reduce((a, b) => a + b) };
  }
}
