import { useCart } from './CartContext';

export default function Checkout() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-purple-700 mb-6">💳 Checkout</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
          ))}
          <h3 className="text-xl font-bold text-gray-800">Total: ${total}</h3>
          <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700">
            Confirm Purchase
          </button>
        </div>
      )}
    </div>
  );
}
