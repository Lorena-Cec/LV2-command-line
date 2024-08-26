Command-Line Shopping Cart Application

This is a command-line JavaScript application that simulates a shopping cart on a web store. It allows users to interact with a virtual store, add items to a shopping cart, buy items, view wallet balance, and perform other related operations.
Design

The command-line application is designed to be intuitive, user-friendly, and efficient. Several key considerations were taken into account during the design process:

    Intuitive Commands: Commands are designed to be easy to understand and remember.
    Help Feature: The application includes a help command to provide users with information about available commands and their usage.
    Error Handling: Proper error handling mechanisms are implemented to provide error messages in case of invalid inputs or actions.

Usage

    Installation: Clone the repository or download the source code.
    Dependencies: Ensure you have Node.js installed on your machine.
    Setup: Navigate to the directory containing the source code in your terminal.
    Install Dependencies: Run npm install to install the required dependencies.
    Run the Application: Execute node main.js to start the application.
    Interact: Once the application is running, use commands like add, buy, buyout, wallet, items, cart, remove, and help to perform various actions.

Commands

    add

        Add an item with the specified name and amount to the cart. Will search list of items (case insensitive) by the name. If no matching item is found, returns an error. If amount isn't sepcified, returns an error. If amount isn't available, returns an error. If there is not enough money in wallet, returns an error.

    buy

        Buy items from cart. If cart is empty, returns an error. If there is not enough money in wallet, returns an error. Calculates the total cost of the cart and substracts the amount from wallet.

    buyout

        Buys all available items.If there is not enough money in wallet, returns an error. Calculates the total cost of and substracts the amount from wallet.

    wallet

        Prints wallet amount.

    items

        Prints all available items - their name, price and amount.

    cart

        Prints all items in cart and total cost. If cart is empty, returns an error.

    remove

        Removes item from cart. If item is not in cart, returns an error.

    help

        Prints all available commands and describes them.

