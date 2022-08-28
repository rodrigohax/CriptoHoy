import { Module } from '@nestjs/common';
import { BinanceP2PService } from './BinanceP2P.service';
import { BinanceP2PController } from './BinanceP2P.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [BinanceP2PController],
  providers: [BinanceP2PService]
})
export class BinanceP2PModule {}
