import { checkHealth } from "../src/healthChecker";
const hero = {name: 'Маг', health: 20};
test('checkHealth at health: 90', () =>{
    const result = checkHealth(hero);
    expect(result).toBe('wounded')
});
