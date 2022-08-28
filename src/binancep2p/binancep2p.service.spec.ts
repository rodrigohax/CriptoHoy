import { Test, TestingModule } from '@nestjs/testing';
import { BinanceP2PService } from './BinanceP2P.service';

describe('BinanceP2PService', () => {
  let service: BinanceP2PService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BinanceP2PService],
    }).compile();

    service = module.get<BinanceP2PService>(BinanceP2PService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
