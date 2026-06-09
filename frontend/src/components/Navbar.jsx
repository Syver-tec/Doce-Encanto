import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useCart } from "../contexts/CartContext";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header
      className="
      sticky
      top-0
      z-50

      bg-white/90
      backdrop-blur-md

      border-b
      border-pink-100
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-6
        py-4

        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}

        <Link
          to="/"
          className="
          text-2xl
          font-bold

          text-pink-600
          "
        >
          Doce Encanto
        </Link>

        {/* Navegação */}

        <nav
          className="
          hidden
          md:flex

          items-center
          gap-8
          "
        >
          <Link to="/">Home</Link>

          <Link to="/menu">Cardápio</Link>

          <Link to="/about">Sobre</Link>

          <Link to="/contact">Contato</Link>
        </nav>

        {/* Ações */}

        <div
          className="
          flex
          items-center
          gap-4
          "
        >
          {/* Carrinho */}

          <Link to="/cart" className="relative">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span
                className="
                absolute
                -top-2
                -right-4

                bg-pink-500
                text-white

                text-xs

                w-5
                h-5

                rounded-full

                flex
                items-center
                justify-center
                "
              >
                {totalItems}
              </span>
            )}
          </Link>

          {/* Login */}

          {user ? (
            <div className="flex items-center gap-4">
              <Link
                to="/profile"
                className="
                font-medium
                text-pink-500
              "
              >
                Olá, {user.name.split(" ")[0]}
              </Link>

              <button
                onClick={handleLogout}
                className="
                bg-red-500
                text-white

                px-4
                py-2

                rounded-lg

                hover:bg-red-600
                "
              >
                Sair
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="
                text-gray-700
                hover:text-pink-500
                mt-2
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                className="
                bg-pink-500
                text-white

                px-4
                py-2

                rounded-lg
                "
              >
                Cadastro
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
