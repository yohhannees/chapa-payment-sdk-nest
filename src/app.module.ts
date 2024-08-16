import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChapaModule } from './chapa/chapa.module';
import { ChapaConfigService } from './chapa-config/chapa-config.service';
import { PaymentsController } from './payments/payments.controller';
import { ChapaUtilsService } from './chapa-utils/chapa-utils.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ChapaModule, ConfigModule],
  controllers: [AppController, PaymentsController,],
  providers: [AppService, ChapaConfigService, ChapaUtilsService],
})
export class AppModule {}
