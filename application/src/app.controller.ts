import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
@Controller('ping')
export class AppController {
  constructor(private readonly appService: AppService) {}

  teste() {
    return this.appService.test();
  }
}
