import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  let health: TestingModule;

  beforeAll(async () => {
    health = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();
  });

  describe('get health', () => {
    it('should good return', () => {
      const healthController = health.get<HealthController>(HealthController);

      expect(healthController.alive()).toBe('OK');
    });
  });

  describe('get dead', () => {
    it('should bad return', () => {
      const healthController = health.get<HealthController>(HealthController);

      expect(healthController.dead()).toBe('DEAD');
    });
  });
});