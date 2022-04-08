import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getConfigServiceConfiguration } from './@core/config/app.module.config';

@Module({
  imports: [ConfigModule.forRoot(getConfigServiceConfiguration())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
