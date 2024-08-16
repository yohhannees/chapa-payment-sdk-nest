import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ChapaConfigService } from '../chapa-config/chapa-config.service';
import { ChapaUtilsService } from '../chapa-utils/chapa-utils.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ChapaService {
  constructor(
    private readonly httpService: HttpService,
    private readonly chapaConfigService: ChapaConfigService,
    private readonly chapaUtilsService: ChapaUtilsService,
  ) {}

  async initializePayment(paymentData: any): Promise<any> {
    const apiKey = this.chapaConfigService.apiKey;
    const txRef = this.chapaUtilsService.generateTxRef(); // Use the utility function
    paymentData.tx_ref = txRef; // Add tx_ref to paymentData

    const response = await lastValueFrom(
      this.httpService.post(
        'https://api.chapa.co/v1/transaction/initialize',
        paymentData,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        },
      ),
    );

    return response.data;
  }

  async verifyPayment(transactionId: string): Promise<any> {
    const apiKey = this.chapaConfigService.apiKey;
    const response = await lastValueFrom(
      this.httpService.get(
        `https://api.chapa.co/v1/transaction/verify/${transactionId}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        },
      ),
    );

    return response.data;
  }
}
