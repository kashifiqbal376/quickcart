function CartPage({ cart, onUpdateQuantity, onRemoveItem }) {

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  
    return (
  
      <div>
  
        <h2>Your Cart</h2>
  
        {cart.length === 0 ? (
  
          <p>Your cart is empty.</p>
  
        ) : (
  
          cart.map(item => (
  
            <div key={item.id} style={{
              display: "flex",
              gap: "15px",
              marginBottom: "15px",
              alignItems: "center"
            }}>
  
              <img
                src={item.image}
                alt={item.name}
                width="80"
              />
  
              <div>
  
                <h4>{item.name}</h4>
  
                <p>${item.price}</p>
  
                <button
                  onClick={() =>
                    onUpdateQuantity(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
  
                <span style={{ margin: "0 10px" }}>
                  {item.quantity}
                </span>
  
                <button
                  onClick={() =>
                    onUpdateQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
  
                <button
                  onClick={() => onRemoveItem(item.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Remove
                </button>
  
              </div>
  
            </div>
  
          ))
  
        )}
  
        <h3>Total: ${total.toFixed(2)}</h3>
  
      </div>
  
    );
  }
  
  export default CartPage;