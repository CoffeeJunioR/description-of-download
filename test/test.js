import { checkHealth } from "../src/healthChecker";

// test('checkHealth at health: 90', () =>{
//     const hero = {name: 'Маг', health: 10};
//     const result = checkHealth(hero);
//     expect(result).toBe('green')
// });
const heroes = [
    {name: 'Маг', health: 10},
    {name: 'Робот', health: 90},
    {name: 'Ведьма', health: 40},
]

test.each([
    ['healthy', 10, 'critical'],
    ['wounded', 40, 'wounded'],
    ['critical', 90, 'healthy']
])
('testing healthchecker function with %s status and %i amount', (status, amount, expected) => {
    const result = checkHealth(heroes);
    expect(result).toBe(expected);
});