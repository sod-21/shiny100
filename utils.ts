
const checkShiny = (n: number) => {
    if (n < 10) {
        return true;
    }

    let values = n.toString().split("");
    let min = values[0];
    for (var i = 1; i < values.length; i++) {
        if (min > values[i]) {
            return false;
        }

        min = values[i];
    }

    return true;
};

export const getShiny100 = (n: number) => {

    const results = [];
    while (results.length < 100) {
        n ++;
        if (checkShiny(n)) {
          results.push(n);
        }
    }

    return results;
}