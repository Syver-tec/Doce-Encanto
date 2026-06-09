import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function FeaturedProducts() {

  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587",

      name: "Red Velvet",

      description:
        "Bolo artesanal com massa macia e cobertura especial.",

      price: "R$ 18,90",
    },

    {
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777",

      name: "Cheesecake",

      description:
        "Cheesecake cremoso com cobertura de frutas vermelhas.",

      price: "R$ 16,90",
    },

    {
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93",

      name: "Cappuccino Especial",

      description:
        "Café premium preparado com grãos selecionados.",

      price: "R$ 12,90",
    },
  ];

  return (
    <section
      className="
      py-20
      px-6

      bg-white
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center">

          <span
            className="
            inline-block

            px-4
            py-2

            rounded-full

            bg-pink-100
            text-pink-700

            text-sm
            "
          >
            Destaques
          </span>

          <h2
            className="
            mt-6

            text-4xl
            md:text-5xl

            font-bold
            "
          >
            Nossos Produtos Favoritos
          </h2>

          <p
            className="
            mt-6

            text-gray-600

            max-w-2xl
            mx-auto
            "
          >
            Conheça alguns dos produtos mais amados pelos nossos clientes.
          </p>
        </div>

        {/* Grid */}

        <div
          className="
          mt-16

          grid
          gap-8

          md:grid-cols-2
          lg:grid-cols-3
          "
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>

        {/* CTA */}

        <div className="mt-16 text-center">

          <Link
            to="/menu"
            className="
            inline-block

            px-8
            py-4

            rounded-2xl

            bg-pink-500
            text-white

            font-medium

            hover:bg-pink-600

            transition-all
            duration-300
            "
          >
            Ver Cardápio Completo
          </Link>

        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;    