import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ChapaConfigService {
  constructor(private configService: ConfigService) {}

  get apiKey(): string {
    return this.configService.get<string>('CHAPA_API_KEY');
  }

  get environment(): string {
    return this.configService.get<string>('CHAPA_ENVIRONMENT', 'sandbox');
  }

  get baseUrl(): string {
    return this.environment === 'production'
      ? 'https://api.chapa.co'
      : 'https://sandbox.chapa.co';
  }
}
