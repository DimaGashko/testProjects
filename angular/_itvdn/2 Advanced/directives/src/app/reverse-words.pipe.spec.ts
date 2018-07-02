import { ReverseWordsPipe } from './reverse-words.pipe';

describe('ReverseWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseWordsPipe();
    expect(pipe).toBeTruthy();
  });
});
