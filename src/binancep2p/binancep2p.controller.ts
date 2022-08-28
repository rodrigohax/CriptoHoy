import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BinanceP2PService } from './BinanceP2P.service';

@Controller('BinanceP2P')
export class BinanceP2PController {
  constructor(private readonly BinanceP2PService: BinanceP2PService) { }

  @Get('buy-price')
  getBuyPrice() {
    return this.BinanceP2PService.getBuyPrice();
  }

  @Get('sell-price')
  getSellPrice() {
    return this.BinanceP2PService.getSellPrice();
  }

  @Get('arbitraje')
  getArbitrage() {
    return this.BinanceP2PService.getArbitrage();
  }
}