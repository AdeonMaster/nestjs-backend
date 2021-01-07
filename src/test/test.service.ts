import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class TestService {
  getTest(): string {
    return 'Test';
  }

  getTestWithId(id: string): string {
    if (id === 'ggwp') {
      throw new HttpException('Custom error message', HttpStatus.BAD_REQUEST);
    }

    return id;
  }
}
