function findMatching(drivers, pattern) {
    const regEx = new RegExp(pattern, "i");
    const matches = drivers.filter(element => regEx.test(element));

    return matches;
}

function fuzzyMatch(drivers, pattern) {
    const regEx = new RegExp(`^${pattern}`, "i");
    const matches = drivers.filter(element => regEx.test(element));

    return matches;
}

function matchName(drivers, pattern) {
    const regEx = new RegExp(pattern, "i");
    const matches = drivers.filter(element => regEx.test(element.name));

    return matches;
}
