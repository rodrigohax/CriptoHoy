import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { BinanceP2PService } from './BinanceP2P.service';
import { ResponseBinanceP2P } from './interface/response-binancep2p.interface';

@Controller('BinanceP2P')
export class BinanceP2PController {
  constructor(private readonly BinanceP2PService: BinanceP2PService) {}

  @Get('price/:asset/:fiat/:tradeType')
  getPrice(
    @Param('asset') asset: string,
    @Param('fiat') fiat: string,
    @Param('tradeType') tradeType: string,
  ): Observable<ResponseBinanceP2P> {
    return this.BinanceP2PService.getPrice(asset, fiat, tradeType);
  }
}
