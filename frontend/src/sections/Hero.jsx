import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="
      bg-gradient-to-b
      from-pink-50
      to-white
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-6

        py-20

        grid
        gap-16

        lg:grid-cols-2
        items-center
        "
      >
        {/* ================= TEXTO ================= */}

        <div>

          {/* Badge */}

          <span
            className="
            inline-block

            px-4
            py-2

            rounded-full

            bg-pink-100
            text-pink-700

            text-sm
            font-medium
            "
          >
            ✨ Doces artesanais feitos com amor
          </span>

          {/* Título */}

          <h1
            className="
            mt-8

            text-5xl
            md:text-6xl

            font-bold

            leading-tight

            text-gray-900
            "
          >
            A doçura que transforma
            <span className="text-pink-600">
              {" "}
              momentos especiais
            </span>
          </h1>

          {/* Descrição */}

          <p
            className="
            mt-8

            text-lg

            text-gray-600

            leading-relaxed

            max-w-xl
            "
          >
            Descubra uma experiência única com
            bolos, doces artesanais, sobremesas
            irresistíveis e cafés selecionados,
            preparados para tornar cada visita
            inesquecível.
          </p>

          {/* Botões */}

          <div
            className="
            mt-10

            flex
            flex-wrap

            gap-4
            "
          >
            <Link
              to="/menu"
              className="
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
              Ver Cardápio
            </Link>

            <Link
              to="/register"
              className="
              px-8
              py-4

              rounded-2xl

              border
              border-pink-200

              bg-white

              font-medium

              hover:bg-pink-50

              transition-all
              duration-300
              "
            >
              Criar Conta
            </Link>
          </div>
        </div>

        {/* ================= IMAGEM ================= */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b"
            alt="Doces e café"

            className="
            w-full

            rounded-[32px]

            shadow-2xl

            object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;