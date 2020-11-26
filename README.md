# Shopping Cart

Shopping Cart app with react and redux.

# Demo

https://redux-shopping-basket.netlify.app/

Gist...

* [x] - Bootstrap react app.
* [x] - Install Dependencies.
* [x] - Create redux store and root reducer.
* [x] - Create ShoppingCartApp container component and connect to redux store.
* [x] - Create app layout
  * [x] - Add global styles.
  * [x] - Split view into 2 columns.
  * [x] - Create Header component.
* [x] - List all products.
  * [x] - Create ProductItem component and pass product as prop.
* [x] - Add product to cart.
  * [x] - Create action, action creator and modify state to add product to cart.
  * [x] - On button click, dispatch add to cart action.
* [x] - Display all cart items
  * [x] Create CartItem component and pass product as prop.
  * [x] Display total price.
* [x] - Increase/Decrease quantity.
  * [x] - Add <code>+</code> and <code>-</code> buttons in CartItem component
  * [x] - Create action, action creator and modify state to increase/decrease quantity.
  * [x] - On <code>+</code> / <code>-</code> buttons click, dispatch action to increase/decrease quantity of a product.
* [x] - Remove product from cart.
  * [x] - Add remove button on CartItem component.
  * [x] - Create action, action creator and modify state to remove product to cart.
  * [x] - On button click, dispatch remove from cart action.

Connect to backend.

* [x] - Install redux-thunk and add thunk middleware to store.
* [x] - Fetch products from backend.
* [x] - Get cart details from backend.
* [x] - Add item to cart and save in database.
* [x] - Increase/decrease item quantity.
* [x] - Remove item from cart.

# License

The project is licensed under the MIT license. Read [license](./LICENSE) for more information.