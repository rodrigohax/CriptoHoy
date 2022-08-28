import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BinanceP2PModule } from './BinanceP2P/BinanceP2P.module';

@Module({
  imports: [BinanceP2PModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
