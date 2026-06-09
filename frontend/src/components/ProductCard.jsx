function ProductCard({
  image,
  name,
  description,
  price,
}) {
  return (
    <div
      className="
      bg-white

      rounded-3xl

      overflow-hidden

      shadow-lg

      hover:-translate-y-2
      hover:shadow-2xl

      transition-all
      duration-300
      "
    >
      {/* Imagem */}

      <img
        src={image}
        alt={name}

        className="
        w-full
        h-64

        object-cover
        "
      />

      {/* Conteúdo */}

      <div className="p-6">

        <h3
          className="
          text-2xl
          font-bold
          text-gray-900
          "
        >
          {name}
        </h3>

        <p
          className="
          mt-3

          text-gray-600
          "
        >
          {description}
        </p>

        <div
          className="
          mt-6

          flex
          items-center
          justify-between
          "
        >
          <span
            className="
            text-xl
            font-bold

            text-pink-600
            "
          >
            {price}
          </span>

          <button
            className="
            px-4
            py-2

            rounded-xl

            bg-pink-500
            text-white

            hover:bg-pink-600

            transition-all
            duration-300
            "
          >
            Ver Mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;