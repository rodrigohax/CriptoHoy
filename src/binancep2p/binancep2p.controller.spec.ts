import { Test, TestingModule } from '@nestjs/testing';
import { BinanceP2PController } from './BinanceP2P.controller';
import { BinanceP2PService } from './BinanceP2P.service';

describe('BinanceP2PController', () => {
  let controller: BinanceP2PController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BinanceP2PController],
      providers: [BinanceP2PService],
    }).compile();

    controller = module.get<BinanceP2PController>(BinanceP2PController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
