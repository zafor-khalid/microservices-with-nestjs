import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './services/math.services';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mathService: MathService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('add')
  async Summation(@Body('data') data: Array<number>) {
    return this.mathService.Summation(data);
  }
}
