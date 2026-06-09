function MenuCard({
  product,
  onAddToCart,
}) {

  return (
    <div
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      shadow-lg

      hover:-translate-y-2
      hover:shadow-xl

      transition-all
      duration-300
      "
    >
      <img
        src={product.image}
        alt={product.name}
        className="
        w-full
        h-56
        object-cover
        "
      />

      <div className="p-6">
        <h3
          className="
          text-xl
          font-bold
          "
        >
          {product.name}
        </h3>

        <p
          className="
          mt-2
          text-gray-600
          "
        >
          {product.description}
        </p>

        <div
          className="
          mt-6

          flex
          justify-between
          items-center
          "
        >
          <span
            className="
            text-pink-600
            font-bold
            text-xl
            "
          >
            R$ {product.price.toFixed(2)}
          </span>

          <button
            onClick={onAddToCart}
            className="
            px-4
            py-2

            rounded-xl

            bg-pink-500
            text-white

            hover:bg-pink-600
            "
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;