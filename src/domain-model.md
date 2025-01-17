## Domain Model

- Classes:
  - Basket:
  - Attributes:
      basket: Array holding items added to the basket.
     basketSize: Represents the current capacity of the basket.
    - Methods:
        addToBasket(item): Adds an item to the basket.
        removeFrom(item): Removes an item from the basket.
        isBasketFull(): Checks if the basket is full.
        increaseBasketCapacity(): Increases the capacity of the basket.
        cannotRemoveItemFromEmptyBasket(item): Handles scenarios when trying to remove an item from an empty basket.
- Relationships:
    The Basket class manages adding, removing, and checking the status of items within the basket.

  - Classes:
    - Menu:
      - Attributes:
          menuItems: Object containing menu items and their respective prices.
      - Methods:
          addToMenu(item, price): Adds an item to the menu with its price.
          removeFromMenu(item): Removes an item from the menu.
          getItemPrice(item): Retrieves the price of a specific item from the menu.
          getMenuItems(): Retrieves all menu items with their prices.
  - Relationships:
      The Menu class manages the addition, removal, and retrieval of items and their prices within the menu.
