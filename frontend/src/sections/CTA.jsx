import { Link } from "react-router-dom";

function CTA() {
  return (
    <section
      className="
      py-24
      px-6

      bg-gradient-to-r
      from-pink-500
      to-pink-600
      "
    >
      <div
        className="
        max-w-4xl
        mx-auto

        text-center
        "
      >
        {/* Título */}

        <h2
          className="
          text-4xl
          md:text-5xl

          font-bold

          text-white
          "
        >
          Pronto para adoçar seu dia?
        </h2>

        {/* Descrição */}

        <p
          className="
          mt-6

          text-lg

          text-pink-100

          max-w-2xl
          mx-auto
          "
        >
          Explore nosso cardápio completo e descubra
          sabores únicos preparados com ingredientes
          selecionados e muito carinho.
        </p>

        {/* Botões */}

        <div
          className="
          mt-10

          flex
          flex-wrap

          justify-center

          gap-4
          "
        >
          <Link
            to="/menu"
            className="
            px-8
            py-4

            rounded-2xl

            bg-white

            text-pink-600

            font-semibold

            hover:scale-105

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
            border-white

            text-white

            font-semibold

            hover:bg-white
            hover:text-pink-600

            transition-all
            duration-300
            "
          >
            Criar Conta
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;