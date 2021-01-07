import { Controller, Get, Param } from '@nestjs/common';

import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getTest(): string {
    return this.testService.getTest();
  }

  @Get(':id')
  getTestWithId(@Param('id') id: string): string {
    return this.testService.getTestWithId(id);
  }
}
