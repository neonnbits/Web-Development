function calculateTotalSpentByCategory(transactions){
    let categoryTotals = {};

    for(let transaction of transactions){
        if(categoryTotals[transaction.category]) categoryTotals[transaction.category] += transaction.price;
        else categoryTotals[transaction.category] = transaction.price;
    }

    return Object.entries(categoryTotals).map( ([category, totalSpent]) => ({ category, totalSpent }) );
}

const transactions = [
    { id: 1, timestamp: 1656076800000, price: 10, category: "Food", itemName: "Pizza" },
    { id: 2, timestamp: 1656076800000, price: 15, category: "Food", itemName: "Burger" },
    { id: 3, timestamp: 1656076800000, price: 20, category: "Electronics", itemName: "Mouse" },
  ];

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;