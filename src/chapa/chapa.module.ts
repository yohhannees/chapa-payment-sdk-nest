import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { ChapaService } from './chapa.service';
import { ChapaConfigService } from '../chapa-config/chapa-config.service';
import { ChapaUtilsService } from '../chapa-utils/chapa-utils.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(), // Import ConfigModule and call forRoot() if you haven't
  ],
  providers: [ChapaService, ChapaConfigService, ChapaUtilsService],
  exports: [ChapaService],
})
export class ChapaModule {}
