const planets = [
    { name: "Меркурий", distanceFromSun: 0.39 },
    { name: "Венера", distanceFromSun: 0.72 },
    { name: "Земля", distanceFromSun: 1.00 },
    { name: "Марс", distanceFromSun: 1.52 },
    { name: "Юпитер", distanceFromSun: 5.20 },
    { name: "Сатурн", distanceFromSun: 9.58 },
    { name: "Уран", distanceFromSun: 19.22 },
    { name: "Нептун", distanceFromSun: 30.05 }
];

console.log("Планеты с расстоянием от Солнца не более 1 астрономической единицы:");
for (const planet of planets) {
    if (planet.distanceFromSun <= 1) {
        console.log(`${planet.name}: ${planet.distanceFromSun} а.е.`);
    }
}

const basketballTeam = [
    { Name: "Олег", height: 192, weight: 78 },
    { Name: "Петя", height: 150, weight: 70 },
    { Name: "Саша", height: 196, weight: 75 },
    { Name: "Джамшут", height: 190, weight: 82 },
    { Name: "Рома", height: 173, weight: 90 }
];

console.log("\nРебята с ростом > 190 см и весом < 80 кг:");
for (const player of basketballTeam) {
    if (player.height > 190 && player.weight < 80) {
        console.log(player.lastName);
    }
}

const calorieCounter = [
    { name: "Яблоко", weight: 100, calories: 52 },
    { name: "Огурец", weight: 150, calories: 16 },
    { name: "Груша", weight: 120, calories: 57 },
    { name: "Помидор", weight: 200, calories: 18 },
    { name: "Банан", weight: 130, calories: 96 },
    { name: "Рис", weight: 150, calories: 130 },
    { name: "Апельсин", weight: 180, calories: 43 }
];

function findMinCalorieProducts(products) {
    let minCalories = Infinity;
    let selectedProducts = [];

    for (let i = 0; i < products.length; i++) {
        for (let j = i + 1; j < products.length; j++) {
            const totalCalories = products[i].calories + products[j].calories;
            if (totalCalories < minCalories) {
                minCalories = totalCalories;
                selectedProducts = [products[i], products[j]];
            }
        }
    }

    return selectedProducts;
}

const selectedProducts = findMinCalorieProducts(calorieCounter);
console.log("\nДва продукта с минимальной суммарной калорийностью:");
for (const product of selectedProducts) {
    console.log(`Название: ${product.name}, Вес: ${product.weight} г`);
}
