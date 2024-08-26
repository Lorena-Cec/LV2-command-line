"use strict";

const readline = require('readline');
const process = require('process');

let walletAmount = 212.5;
let cart = [];


let items = [
    {
        name: 'apple',
        price: 1.99,
        amount: 5,
    },
    {
        name: 'banana',
        price: 0.99,
        amount: 3,
    },
    {
        name: 'orange',
        price: 3.99,
        amount: 5,
    },
    {
        name: 'pineapple',
        price: 1.49,
        amount: 15,
    },
    {
        name: 'blueberry',
        price: 0.49,
        amount: 25,
    },
];

//add
function addToCart(itemName, amount) {
    const index = items.findIndex((item) => item.name === itemName);
    if (index === -1) {
        console.log(`${itemName} is not available.`);
        return;
    }

    const availableAmount = items[index].amount;

    if (amount > availableAmount) {
        console.log(`Not enough ${itemName} available.`);
        return;
    }

    const totalPrice = items[index].price * amount;

    if (totalPrice > walletAmount) {
        console.log('Not enough money');
        return;
    }

    const itemToAdd = Object.assign({}, items[index]);
    itemToAdd.amount = amount; 

    for (let i = 0; i < amount; i++) {
        cart.push(itemToAdd); 
    }

    console.log(`${amount} ${itemName}(s) added to cart with total price ${totalPrice.toFixed(2)}.`);
    console.log(items);
}

//buy
function buy() {
    if (cart.length === 0) {
        console.log('Cart is empty');
        return;
    }

    let totalCost = 0;
    for (const item of cart) {
        const index = items.findIndex((itemInList) => itemInList.name === item.name);
        if (index !== -1) {
            totalCost += items[index].price; 
            items[index].amount -= 1;
            if (items[index].amount === 0) {
                items.splice(index, 1); 
            }
        }
    }

    if (totalCost > walletAmount) {
        console.log('Not enough money');
        return;
    }

    walletAmount -= totalCost;

    console.log(`Items bought successfully.`);
    console.log(`Wallet amount after purchase: ${walletAmount.toFixed(2)}`);

    cart = [];
}

//buyout
function buyAll() {
    let totalCost = 0;

    items.forEach((item) => {
        totalCost += item.price * item.amount;
    });

    if (totalCost > walletAmount) {
        console.log('Not enough money to buy all items.');
        return;
    }

    items.forEach((item) => {
        walletAmount -= item.price * item.amount; 
        item.amount = 0; 
    });

    console.log('All items bought successfully.');
    console.log(`Wallet amount after purchase: ${walletAmount.toFixed(2)}`);
}


//wallet
function viewWalletAmount() {
    console.log(`Current wallet amount: ${walletAmount.toFixed(2)}`);
}

//items
function viewItems() {
    console.log(items);
}

//cart
function viewCartItems() {
    if (cart.length === 0) {
        console.log('Cart is empty');
        return;
    }

    console.log('Items in cart:');
    cart.forEach((item) => {
        console.log(`${item.name} - $${item.price}`);
    });

    let totalCost = 0;
    cart.forEach((item) => {
        totalCost += item.price;
    });
    console.log(`Total cost: ${totalCost.toFixed(2)}`);
}

//remove 
function removeFromCart(itemName) {
    const index = cart.findIndex((item) => item.name === itemName);
    if (index !== -1) {
        cart.splice(index, 1);
        console.log(`Removed ${itemName} from the cart.`);
    } else {
        console.log(`No ${itemName} in the cart.`);
    }
}

//help
function help() {
    console.log("Available commands:");
    console.log("- add <item> <amount>: Add items to cart");
    console.log("- items: View items to buy");
    console.log("- buy: Buy items in the cart");
    console.log("- buyout: Buy all available items");
    console.log("- cart: View items in the cart");
    console.log("- remove <item>: Remove items from the cart");
    console.log("- help: Display available commands");
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Store");
rl.prompt();

rl.on('line', (line) => {
    const split = line.split(' ');
    const command = split[0];
    const args = split.slice(1); 
    console.log(`Command: ${command}`);
    console.log(`Args: ${args}`);

    switch (command) {
        case 'add':
            addToCart(args[0], parseInt(args[1]));
            break;
        case 'buy':
            buy();
            break;
        case 'buyout':
            buyAll();
            break;
        case 'wallet':
            viewWalletAmount();
            break;
        case 'items':
            viewItems();
            break;
        case 'cart':
            viewCartItems();
            break;
        case 'help':
            help();
            break;
        case 'remove':
            removeFromCart(args[0]);
            break;
        default:
            console.log(`Unknown command: ${command}`);
    }

    rl.prompt();
}).on('close', () => {
    console.log('Exit');
    process.exit(0);
});
