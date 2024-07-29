export function checkHealth(hero) {
    let result = 0;
    
    if (hero.health >= 50) {
        result = 'healthy';
    } else if ((hero.health < 50) && (hero.health >= 15)) {
        result = 'wounded';
    } else {
        result = 'critical';
    };

    return result;
}