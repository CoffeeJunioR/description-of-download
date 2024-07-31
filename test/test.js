import { checkHealth } from "../src";
const heroWounded = {name: 'Маг', health: 30};
const heroHealthy = {name: 'Маг', health: 90};
const heroCritical = {name: 'Маг', health: 10};

test('checkHealth at health: 90', () =>{
    const result = checkHealth(heroHealthy);
    expect(result).toBe('healthy')
});

test('checkHealth at health: 30', () =>{
    const result = checkHealth(heroWounded);
    expect(result).toBe('wounded')
});

test('checkHealth at health: 10', () =>{
    const result = checkHealth(heroCritical);
    expect(result).toBe('critical')
});
