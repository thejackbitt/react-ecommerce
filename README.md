# react-ecommerce
An ecommerce mini-project to practice React development and DB interaction

## Instructions
You will be creating an online store. The store will offer three products (create as an array of objects).

  Acme Widget 2000  $10     Qty of 10  id: 1
  Acme Widget 5000  $50     Qty of 20  id: 2
  Acme Widget 8000  $100    Qty of 5   id: 3

The user should see a list of all three on the screen. When the user clicks on an item, it gets added to the cart.

The cart displays all items, and the subtotal for the order. 

Clicking a purchase button asks the user to confirm. If the user clicks a Yes button, the cart is cleared.

Bonus:
  - After a purchase, update the product quantities appropriately
  - Save the product info to localStorage

----------------------------
Create a new React app:
  npm create vite@latest <your-app-name-here> -- --template react
  npm install 
  npm run dev

---------------------------
Components:
   App.jsx 
   Products.jsx 
   Cart.jsx 

---------------------------
Think about what goes in state. Any data which changes while the user is working with the app must go into state.

Use props to pass stateful data and functions where they are needed.

useEffect() can be used to monitor stateful conditions and react to them (no pun intended)