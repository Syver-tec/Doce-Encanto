import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaBirthdayCake,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div
        className="
        max-w-7xl
        mx-auto

        px-6
        py-16

        grid
        gap-12

        md:grid-cols-3
        "
      >
        {/* Logo */}

        <div>
          <div className="flex items-center gap-3">
            <FaBirthdayCake
              className="text-pink-400"
              size={28}
            />

            <h3 className="text-2xl font-bold">
              Doce Encanto
            </h3>
          </div>

          <p
            className="
            mt-4

            text-gray-400

            leading-relaxed
            "
          >
            Doces artesanais, cafés especiais e
            experiências únicas para adoçar os
            melhores momentos da sua vida.
          </p>
        </div>

        {/* Links */}

        <div>
          <h4
            className="
            text-lg
            font-semibold
            "
          >
            Navegação
          </h4>

          <div
            className="
            mt-4

            flex
            flex-col

            gap-3
            "
          >
            <Link
              to="/"
              className="
              text-gray-400

              hover:text-pink-400

              transition-colors
              "
            >
              Home
            </Link>

            <Link
              to="/menu"
              className="
              text-gray-400

              hover:text-pink-400

              transition-colors
              "
            >
              Cardápio
            </Link>

            <Link
              to="/login"
              className="
              text-gray-400

              hover:text-pink-400

              transition-colors
              "
            >
              Entrar
            </Link>

            <Link
              to="/register"
              className="
              text-gray-400

              hover:text-pink-400

              transition-colors
              "
            >
              Cadastro
            </Link>
          </div>
        </div>

        {/* Contato */}

        <div>
          <h4
            className="
            text-lg
            font-semibold
            "
          >
            Contato
          </h4>

          <div
            className="
            mt-4

            flex
            flex-col

            gap-4
            "
          >
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-pink-400" />

              <span className="text-gray-400">
                (81) 99999-9999
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-pink-400" />

              <span className="text-gray-400">
                contato@doceencanto.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-pink-400" />

              <span className="text-gray-400">
                WhatsApp Comercial
              </span>
            </div>
          </div>

          {/* Redes sociais */}

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="
              p-3

              rounded-xl

              bg-gray-800

              hover:bg-pink-500

              transition-all
              duration-300
              "
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="
              p-3

              rounded-xl

              bg-gray-800

              hover:bg-green-500

              transition-all
              duration-300
              "
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Linha inferior */}

      <div
        className="
        border-t
        border-gray-800

        py-6

        text-center

        text-gray-500
        "
      >
        © 2026 Doce Encanto. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;