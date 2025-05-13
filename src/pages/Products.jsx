import { useCart } from './CartContext';

const sampleProducts = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 20 },
];

export default function Products() {
  const { addToCart } = useCart();
  return (
    <div>
      <h2 className="text-2xl font-semibold text-purple-700 mb-6">🛍️ Products</h2>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <li key={product.id} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}