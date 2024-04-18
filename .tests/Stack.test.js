const Stack = require('../Stack');


describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('isEmpty method', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
  });

  test('push method', () => {
    stack.push(10, 20, 30);
    expect(stack.size()).toBe(3);
  });

  test('peek method', () => {
    stack.push(10, 20, 80);
    expect(stack.peek()).toBe(80);
  });

  test('pop method', () => {
    stack.push(10, 20, 30);
    expect(stack.pop()).toBe(30);
    expect(stack.size()).toBe(2);
  });

  test('print method', () => {
    stack.push(10, 20, 30);
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    stack.print();
    expect(consoleSpy).toHaveBeenCalledWith('10 => 20 => 30');
    consoleSpy.mockRestore();
  });
});
