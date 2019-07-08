import { KeysModule } from './keys.module';

describe('KeysModule', () => {
  let keysModule: KeysModule;

  beforeEach(() => {
    keysModule = new KeysModule();
  });

  it('should create an instance', () => {
    expect(keysModule).toBeTruthy();
  });
});
