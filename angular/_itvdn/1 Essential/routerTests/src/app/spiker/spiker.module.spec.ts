import { SpikerModule } from './spiker.module';

describe('SpikerModule', () => {
  let spikerModule: SpikerModule;

  beforeEach(() => {
    spikerModule = new SpikerModule();
  });

  it('should create an instance', () => {
    expect(spikerModule).toBeTruthy();
  });
});
