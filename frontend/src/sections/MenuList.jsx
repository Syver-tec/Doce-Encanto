import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import toast from "react-hot-toast";
import MenuCard from "../components/MenuCard";

function MenuList() {
  const [category, setCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Red Velvet",
      category: "Bolos",
      description: "Bolo artesanal.",
      price: 18.9,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },

    {
      id: 2,
      name: "Cheesecake",
      category: "Bolos",
      description: "Cheesecake cremoso.",
      price: 16.9,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    },

    {
      id: 3,
      name: "Cappuccino",
      category: "Cafés",
      description: "Café especial.",
      price: 12.9,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },

    {
      id: 4,
      name: "Brownie",
      category: "Doces",
      description: "Brownie artesanal.",
      price: 9.9,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    },
    {
      id: 5,
      name: "Coxinha",
      category: "Salgados",
      description: "Coxinha de frango cremosa.",
      price: 8.9,
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800",
    },

    {
      id: 6,
      name: "Empada",
      category: "Salgados",
      description: "Empada artesanal de frango.",
      price: 7.9,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    },

    {
      id: 7,
      name: "Pastel",
      category: "Salgados",
      description: "Pastel crocante recheado.",
      price: 9.9,
      image:
        "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800",
    },
    {
      id: 8,
      name: "Água Mineral",
      category: "Bebidas",
      description: "Água mineral sem gás 500ml.",
      price: 3.5,
      image:
        "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=800",
    },

    {
      id: 9,
      name: "Pespsi",
      category: "Bebidas",
      description: "Refrigerante Pepsi lata 350ml.",
      price: 6.5,
      image:
        "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800",
    },

    {
      id: 10,
      name: "Schweppes",
      category: "Bebidas",
      description: "Refrigerante Schweppes lata 350ml.",
      price: 6.0,
      image:
        "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800",
    },

    {
      id: 11,
      name: "Suco de Laranja",
      category: "Bebidas",
      description: "Suco natural de laranja 300ml.",
      price: 8.9,
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchCategory = category === "Todos" || product.category === category;

    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section
      className="
      py-20
      px-6

      bg-pink-50

      min-h-screen
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1
            className="
            text-5xl
            font-bold
            "
          >
            Nosso Cardápio
          </h1>

          <p
            className="
            mt-4
            text-gray-600
            "
          >
            Escolha seus doces favoritos
          </p>
        </div>
        {/* Buscar */}
        <div className="mt-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="🔍 Buscar produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            w-full
            p-3

            border
            border-gray-300

            rounded-xl

            focus:outline-none
            focus:border-pink-500
            "
          />
        </div>

        {/* Categorias */}
        <div
          className="
          mt-10

          flex
          flex-wrap

          justify-center

          gap-4
          "
        >
          {["Todos", "Bolos", "Cafés", "Doces", "Salgados", "Bebidas"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`
                px-5
                py-2

                rounded-full

                ${category === item ? "bg-pink-500 text-white" : "bg-white"}
              `}
              >
                {item}
              </button>
            ),
          )}
        </div>
        {/* Produtos */}
        <div
          className="
          mt-16

          grid
          gap-8

          md:grid-cols-2
          lg:grid-cols-3
          "
        >
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center">
              <h3 className="text-2xl font-bold">Nenhum produto encontrado</h3>

              <p className="text-gray-500 mt-2">Tente outro termo de busca.</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <MenuCard
                key={product.id}
                product={product}
                onAddToCart={() => {
                  addToCart(product);

                  toast.success(`${product.name} adicionado ao carrinho!`);
                }}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default MenuList;
