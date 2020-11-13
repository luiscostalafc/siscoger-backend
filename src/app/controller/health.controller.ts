import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get('alive')
  @HttpCode(200)
  alive(): string {
    return 'OK';
  }

  @Get('dead')
  @HttpCode(500)
  dead(): string {
    return 'DEAD';
  }
}