export function checkHealth(heroes) {
    for (let i = 0; i<heroes.length; i++) {
        let result = 0;
        if (heroes[i].health > 50) {
            result = 'healthy';
        } else if ((50 > heroes[i].health) && (heroes[i].health > 15)) {
            result = 'wounded';
        } else {
            result = 'critical';
        };
        return result;
    }
    
}