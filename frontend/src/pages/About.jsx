import { FaHeart, FaAward, FaUsers } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (

    <main>
      <Navbar />
      
      {/* HERO */}

      <section className="bg-pink-50 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span
            className="
            inline-block

            px-4
            py-2

            rounded-full

            bg-pink-100
            text-pink-600

            text-sm
            font-medium
            "
          >
            Sobre Nós
          </span>

          <h1
            className="
            mt-6

            text-5xl
            md:text-6xl

            font-bold

            text-gray-900
            "
          >
            Mais do que doces,
            criamos experiências.
          </h1>

          <p
            className="
            mt-6

            text-lg

            text-gray-600

            max-w-3xl
            mx-auto
            "
          >
            A Doce Encanto nasceu com a missão de
            transformar momentos simples em memórias
            especiais através de doces artesanais,
            cafés selecionados e atendimento acolhedor.
          </p>
        </div>
      </section>

      {/* HISTÓRIA */}

      <section className="py-24 px-6 bg-white">
        <div
          className="
          max-w-6xl
          mx-auto

          grid
          gap-12

          lg:grid-cols-2

          items-center
          "
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt="Confeitaria"

              className="
              w-full

              rounded-3xl

              shadow-xl
              "
            />
          </div>

          <div>
            <h2
              className="
              text-4xl

              font-bold

              text-gray-900
              "
            >
              Nossa História
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Fundada em 2015, a Doce Encanto começou
              como uma pequena confeitaria familiar.
              Com dedicação, ingredientes selecionados
              e paixão pela confeitaria artesanal,
              conquistamos a confiança de centenas de
              clientes.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Hoje continuamos com o mesmo propósito:
              oferecer produtos de qualidade e tornar
              cada visita uma experiência especial.
            </p>
          </div>
        </div>
      </section>

      {/* MISSÃO VISÃO VALORES */}

      <section className="py-24 px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center">
            <h2
              className="
              text-4xl
              font-bold
              "
            >
              Nossos Valores
            </h2>
          </div>

          <div
            className="
            mt-16

            grid
            gap-8

            md:grid-cols-3
            "
          >
            {/* Missão */}

            <div
              className="
              bg-white

              p-8

              rounded-3xl

              shadow-lg
              "
            >
              <FaHeart
                size={35}
                className="text-pink-500"
              />

              <h3
                className="
                mt-6

                text-2xl
                font-bold
                "
              >
                Missão
              </h3>

              <p className="mt-4 text-gray-600">
                Levar felicidade através de produtos
                artesanais preparados com carinho.
              </p>
            </div>

            {/* Visão */}

            <div
              className="
              bg-white

              p-8

              rounded-3xl

              shadow-lg
              "
            >
              <FaAward
                size={35}
                className="text-pink-500"
              />

              <h3
                className="
                mt-6

                text-2xl
                font-bold
                "
              >
                Visão
              </h3>

              <p className="mt-4 text-gray-600">
                Ser referência em confeitaria e cafés
                especiais na região.
              </p>
            </div>

            {/* Valores */}

            <div
              className="
              bg-white

              p-8

              rounded-3xl

              shadow-lg
              "
            >
              <FaUsers
                size={35}
                className="text-pink-500"
              />

              <h3
                className="
                mt-6

                text-2xl
                font-bold
                "
              >
                Valores
              </h3>

              <p className="mt-4 text-gray-600">
                Qualidade, transparência, respeito e
                compromisso com nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}

      <section className="py-24 px-6 bg-white">
        <div
          className="
          max-w-5xl
          mx-auto

          grid
          gap-8

          text-center

          md:grid-cols-3
          "
        >
          <div>
            <h3 className="text-5xl font-bold text-pink-500">
              5.000+
            </h3>

            <p className="mt-3 text-gray-600">
              Clientes Atendidos
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-pink-500">
              30+
            </h3>

            <p className="mt-3 text-gray-600">
              Produtos Artesanais
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-pink-500">
              10+
            </h3>

            <p className="mt-3 text-gray-600">
              Anos de História
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    
  );
}

export default About;