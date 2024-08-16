// src/chapa/chapa-utils.service.ts
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'; // Ensure uuid is installed: npm install uuid

@Injectable()
export class ChapaUtilsService {
  /**
   * Generates a unique transaction reference (tx_ref).
   * @returns {string} A unique transaction reference string.
   */
  generateTxRef(): string {
    return `chapa_tx_${uuidv4()}`;
  }

  /**
   * Converts amount to the specified currency.
   * @param {number} amount - The amount to convert.
   * @param {string} fromCurrency - The currency to convert from.
   * @param {string} toCurrency - The currency to convert to.
   * @returns {number} The converted amount.
   */
  convertCurrency(
    amount: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fromCurrency: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    toCurrency: string,
  ): number {
    // Implement your currency conversion logic here
    return amount; // Placeholder
  }

  /**
   * Validates a given email address.
   * @param {string} email - The email address to validate.
   * @returns {boolean} True if valid, otherwise false.
   */
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Add more utility functions as needed
}
