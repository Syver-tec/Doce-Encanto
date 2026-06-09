import Navbar from "../components/Navbar";
import { useCart } from "../contexts/CartContext";

import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Cart() {

  const {
    cartItems,
    decreaseQuantity,
    removeFromCart,
    increaseQuantity,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const finalizarPedido = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        await Swal.fire({
          icon: "warning",
          title: "Login necessário",
          text: "Faça login para finalizar o pedido.",
          confirmButtonColor: "#ec4899",
        });

        navigate("/login");
        return;
      }

      await axios.post(
        "http://localhost:5000/orders",
        {
          total,
          items: cartItems,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      clearCart();

      await Swal.fire({
        icon: "success",
        title: "Pedido realizado!",
        text: "Seu pedido foi enviado com sucesso.",
        confirmButtonColor: "#ec4899",
      });

      navigate("/profile");
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não foi possível finalizar o pedido.",
        confirmButtonColor: "#ec4899",
      });
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-pink-50 pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Título */}

          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900">Meu Carrinho</h1>

            <p className="mt-4 text-gray-600">
              Revise seus produtos antes de finalizar o pedido.
            </p>
          </div>

          {/* Conteúdo */}

          <div className="mt-16 grid lg:grid-cols-3 gap-10">
            {/* Produtos */}

            <div className="lg:col-span-2 space-y-6">
              {cartItems.length === 0 ? (
                <div className="bg-white rounded-3xl p-10 text-center shadow">
                  <h2 className="text-2xl font-semibold">
                    Seu carrinho está vazio
                  </h2>

                  <p className="mt-3 text-gray-600">
                    Adicione alguns produtos do cardápio para continuar.
                  </p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="
                    bg-white
                    rounded-3xl
                    shadow-md
                    p-6

                    flex
                    flex-col
                    md:flex-row

                    gap-6
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                      w-full
                      md:w-32

                      h-32

                      rounded-2xl
                      object-cover
                      "
                    />

                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{item.name}</h3>

                      <p className="mt-2 text-pink-600 font-semibold">
                        R$ {item.price.toFixed(2)}
                      </p>

                      <div className="mt-4 flex items-center gap-3">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="
                          w-9
                          h-9

                          rounded-lg

                          bg-gray-200
                          hover:bg-gray-300
                          "
                        >
                          -
                        </button>

                        <span className="font-semibold">{item.quantity}</span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="
                          w-9
                          h-9

                          rounded-lg

                          bg-gray-200
                          hover:bg-gray-300
                          "
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="
                      text-red-500
                      font-medium

                      hover:text-red-700
                      "
                    >
                      Remover
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Resumo */}

            <div
              className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8

              h-fit
              "
            >
              <h2 className="text-2xl font-bold">Resumo do Pedido</h2>

              <div className="mt-6 flex justify-between">
                <span>Subtotal</span>

                <span>R$ {total.toFixed(2)}</span>
              </div>

              <div className="mt-4 flex justify-between">
                <span>Entrega</span>

                <span>Grátis</span>
              </div>

              <hr className="my-6" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>

                <span>R$ {total.toFixed(2)}</span>
              </div>

              <button
                onClick={finalizarPedido}
                disabled={cartItems.length === 0}
                className="
                w-full
                mt-8
                py-3
                rounded-xl

                bg-pink-500
                text-white

                font-medium

                hover:bg-pink-600

                disabled:opacity-50
                disabled:cursor-not-allowed

                transition-all
                duration-300
                "
              >
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;
