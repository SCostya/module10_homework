let animals = new Map([
    ["dog", "good"],
    ["cat", "bad"],
    ["parrot", "kind"]
]);
animals.forEach((value, key) => {
    console.log(`Ключ - ${key}, значение - ${value} `);
});