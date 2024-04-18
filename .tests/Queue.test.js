const Queue = require('../Queue');


describe('Queue', () => {
  let stack;

  beforeEach(() => {
    stack = new Queue();
  });

  test('isEmpty method', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.enqueue(10);
    expect(stack.isEmpty()).toBe(false);
  });

  test('enqueue method', () => {
    stack.enqueue(10, 20, 30);
    expect(stack.size()).toBe(3);
  });

  test('peek method', () => {
    stack.enqueue(10, 20, 80);
    expect(stack.peek()).toBe(80);
  });

  test('dequeue method', () => {
    stack.enqueue(10, 20, 30);
    expect(stack.dequeue()).toBe(10);
    expect(stack.size()).toBe(2);
  });

  test('print method', () => {
    stack.enqueue(10, 20, 30);
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    stack.print();
    expect(consoleSpy).toHaveBeenCalledWith('10 => 20 => 30');
    consoleSpy.mockRestore();
  });
});
