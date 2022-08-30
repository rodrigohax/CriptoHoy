import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { uri } from './constants';
import { ResponseBinanceP2P } from './interface/response-binancep2p.interface';

@Injectable()
export class BinanceP2PService {
  constructor(private httpService: HttpService) {}

  getPrice(
    asset: string,
    fiat: string,
    tradeType: string,
  ): Observable<ResponseBinanceP2P> {
    console.log({ asset, fiat, tradeType });
    return this.httpService
      .post(uri, {
        proMerchantAds: false,
        page: 1,
        rows: 1,
        payTypes: [],
        countries: [],
        publisherType: null,
        asset: asset,
        fiat: fiat,
        tradeType: tradeType,
      })
      .pipe(
        map((axiosResponse: AxiosResponse) => {
          return {
            fiat: axiosResponse.data.data[0].adv.fiatUnit,
            asset: axiosResponse.data.data[0].adv.asset,
            tradeType: tradeType,
            price: axiosResponse.data.data[0].adv.price,
          };
        }),
      );
  }
}
