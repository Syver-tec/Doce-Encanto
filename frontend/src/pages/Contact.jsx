import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <main>
      <Navbar />
      {/* HERO */}

      <section className="bg-pink-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

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
            Contato
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
            Fale Conosco
          </h1>

          <p
            className="
            mt-6

            text-lg

            text-gray-600

            max-w-2xl
            mx-auto
            "
          >
            Tem alguma dúvida, sugestão ou deseja fazer
            um pedido especial? Nossa equipe está pronta
            para ajudar.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}

      <section className="py-24 px-6 bg-white">
        <div
          className="
          max-w-6xl
          mx-auto

          grid
          gap-16

          lg:grid-cols-2
          "
        >
          {/* INFORMAÇÕES */}

          <div>
            <h2
              className="
              text-3xl
              font-bold
              text-gray-900
              "
            >
              Informações de Contato
            </h2>

            <p className="mt-4 text-gray-600">
              Entre em contato pelos nossos canais de
              atendimento ou envie uma mensagem pelo
              formulário.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <FaPhoneAlt
                  size={20}
                  className="text-pink-500"
                />

                <div>
                  <h3 className="font-semibold">
                    Telefone
                  </h3>

                  <p className="text-gray-600">
                    (81) 99999-9999
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope
                  size={20}
                  className="text-pink-500"
                />

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    contato@doceencanto.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt
                  size={20}
                  className="text-pink-500"
                />

                <div>
                  <h3 className="font-semibold">
                    Endereço
                  </h3>

                  <p className="text-gray-600">
                    Recife - PE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORMULÁRIO */}

          <div
            className="
            bg-white

            p-8

            rounded-3xl

            shadow-xl
            "
          >
            <h2
              className="
              text-2xl
              font-bold
              "
            >
              Envie uma mensagem
            </h2>

            <form className="mt-8 space-y-6">

              <div>
                <label className="block mb-2 font-medium">
                  Nome
                </label>

                <input
                  type="text"

                  className="
                  w-full

                  border
                  border-gray-300

                  rounded-xl

                  px-4
                  py-3

                  outline-none

                  focus:border-pink-500
                  "
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"

                  className="
                  w-full

                  border
                  border-gray-300

                  rounded-xl

                  px-4
                  py-3

                  outline-none

                  focus:border-pink-500
                  "
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Mensagem
                </label>

                <textarea
                  rows="5"

                  className="
                  w-full

                  border
                  border-gray-300

                  rounded-xl

                  px-4
                  py-3

                  outline-none

                  resize-none

                  focus:border-pink-500
                  "
                />
              </div>

              <button
                type="submit"

                className="
                w-full

                bg-pink-500
                text-white

                py-3

                rounded-xl

                font-medium

                hover:bg-pink-600

                transition-all
                duration-300
                "
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

export default Contact;