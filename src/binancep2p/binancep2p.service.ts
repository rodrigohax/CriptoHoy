import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { uri, sell, buy } from './constants';

@Injectable()
export class BinanceP2PService {
  constructor(private httpService: HttpService) { }

  async getBuyPrice(): Promise<Number> {
    const resp = await firstValueFrom(this.httpService.post(uri, buy));
    return resp.data.data[0].adv.price;
  }

  async getSellPrice(): Promise<Number> {
    const resp = await firstValueFrom(this.httpService.post(uri, sell));
    return resp.data.data[0].adv.price;
  }

  async getArbitrage():Promise<Number> {
    const buyPrice: Number = await this.getBuyPrice();
    const sellPrice: Number = await this.getBuyPrice();
    const profitPercent: Number = ((Number(sellPrice) - Number(buyPrice)) / Number(buyPrice)) * 100;
    return profitPercent;
  }
}