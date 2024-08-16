import { Controller, Post, Body } from '@nestjs/common';
import { ChapaService } from '../chapa/chapa.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly chapaService: ChapaService) {}

  @Post('initialize')
  async initializePayment(@Body() paymentData: any) {
    return this.chapaService.initializePayment(paymentData);
  }

  @Post('verify')
  async verifyPayment(@Body('transactionId') transactionId: string) {
    return this.chapaService.verifyPayment(transactionId);
  }
}
