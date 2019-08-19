const add = (a, b) => a + b;

const addWithFive = (a) => a + 5;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should add 5 to a number', () => {
    const result = addWithFive(3);
    expect(result).toBe(8);
});

test('should print greeting', () => {
    const result = generateGreeting('Sai');
    expect(result).toBe('Hello Sai!');
});

test('should print greeting for anon', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});