import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useFavorites } from "../contexts/FavoritesContext";
import axios from "axios";
import Swal from "sweetalert2";

function Profile() {
  const [user, setUser] = useState(null);

  const [activeTab, setActiveTab] = useState("profile");

  const { favorites } = useFavorites();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          window.location.href = "/login";
          return;
        }

        const userResponse = await axios.get("http://localhost:5000/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(userResponse.data);
        setName(userResponse.data.name || "");
        setPhone(userResponse.data.phone || "");
        setCity(userResponse.data.city || "");

        const ordersResponse = await axios.get(
          "http://localhost:5000/orders/my-orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setOrders(ordersResponse.data);
      } catch (error) {
        console.error(error);

        localStorage.removeItem("token");

        window.location.href = "/login";
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  const [orders, setOrders] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:5000/auth/update-profile",
        {
          name,
          phone,
          city,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setUser({
        ...user,
        name,
        phone,
        city,
      });

      await Swal.fire({
        icon: "success",
        title: "Perfil atualizado!",
        text: "Suas informações foram salvas com sucesso.",
        confirmButtonColor: "#ec4899",
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não foi possível atualizar o perfil.",
        confirmButtonColor: "#ec4899",
      });
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    value = value.replace(/^(\d{2})(\d)/, "($1) $2");

    value = value.replace(/(\d{5})(\d)/, "$1-$2");

    setPhone(value);
  };

  const phoneClean = phone.replace(/\D/g, "");

  const handleCancelOrder = async (orderId) => {
    try {
      const result = await Swal.fire({
        title: "Cancelar pedido?",
        text: "Esta ação não poderá ser desfeita.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ef4444",
        cancelButtonColor: "#6b7280",
        confirmButtonText: "Sim, cancelar",
        cancelButtonText: "Voltar",
      });

      if (!result.isConfirmed) return;

      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/orders/cancel/${orderId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setOrders(
        orders.map((order) =>
          order.id === orderId
            ? {
                ...order,
                status: "Cancelado",
              }
            : order,
        ),
      );

      Swal.fire({
        icon: "success",
        title: "Pedido cancelado",
        confirmButtonColor: "#ec4899",
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não foi possível cancelar o pedido.",
      });
    }
  };

  return (
    <>
      <Navbar />

      <main
        className="
        min-h-screen

        bg-pink-50

        px-6
        py-12
        "
      >
        <div
          className="
          max-w-6xl
          mx-auto
          "
        >
          <h1
            className="
            text-5xl
            font-bold

            text-center

            mb-12
            "
          >
            Meu Perfil
          </h1>

          <div
            className="
            grid
            gap-8

            lg:grid-cols-3
            "
          >
            {/* SIDEBAR */}

            <div
              className="
              bg-white

              rounded-3xl
              shadow-md

              p-8
              "
            >
              <div
                className="
                w-28
                h-28

                mx-auto

                rounded-full

                bg-pink-500

                flex
                items-center
                justify-center

                text-white
                text-4xl
                font-bold
                "
              >
                {user?.name?.charAt(0)}
              </div>

              <h2
                className="
                text-2xl
                font-bold

                text-center

                mt-4
                "
              >
                {user?.name}
              </h2>

              <p
                className="
                text-center

                text-gray-500
                "
              >
                {user?.email}
              </p>

              <div
                className="
                mt-8

                flex
                flex-col

                gap-3
                "
              >
                {/* MEU PERFIL */}
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`
                  p-3

                  rounded-xl

                  text-left

                  transition-all

                  ${
                    activeTab === "profile"
                      ? "bg-pink-500 text-white"
                      : "hover:bg-pink-100"
                  }
                  `}
                >
                  Meu Perfil
                </button>

                {/* MEUS PEDIDOS */}

                <button
                  onClick={() => setActiveTab("orders")}
                  className={`
                  p-3

                  rounded-xl

                  text-left

                  transition-all

                  ${
                    activeTab === "orders"
                      ? "bg-pink-500 text-white"
                      : "hover:bg-pink-100"
                  }
                  `}
                >
                  Meus Pedidos
                </button>

                {/* FAVORITOS */}

                <button
                  onClick={() => setActiveTab("favorites")}
                  className={`
                  p-3
                  rounded-xl
                  text-left
                  transition-all

                  ${activeTab === "favorites" ? "bg-pink-500 text-white" : "hover:bg-pink-100"}
                  `}
                >
                  Favoritos
                </button>

                <button
                  onClick={() => setActiveTab("settings")}
                  className={`
                  p-3

                  rounded-xl

                  text-left

                  transition-all

                  ${
                    activeTab === "settings"
                      ? "bg-pink-500 text-white"
                      : "hover:bg-pink-100"
                  }
                  `}
                >
                  Configurações
                </button>
              </div>
            </div>

            {/* CONTEÚDO */}

            <div
              className="
              lg:col-span-2

              bg-white

              rounded-3xl
              shadow-md

              p-8
              "
            >
              {/* PERFIL */}

              {activeTab === "profile" && (
                <>
                  <h3
                    className="
                    text-3xl
                    font-bold

                    mb-8
                    "
                  >
                    Informações da Conta
                  </h3>

                  <div
                    className="
                    grid
                    gap-6

                    md:grid-cols-2
                    "
                  >
                    <div>
                      <p
                        className="
                        text-gray-500
                        "
                      >
                        Nome
                      </p>

                      <p
                        className="
                        font-semibold
                        text-lg
                        "
                      >
                        {user?.name}
                      </p>
                    </div>

                    <div>
                      <p
                        className="
                        text-gray-500
                        "
                      >
                        Email
                      </p>

                      <p
                        className="
                        font-semibold
                        text-lg
                        "
                      >
                        {user?.email}
                      </p>
                    </div>

                    <div>
                      <p
                        className="
                        text-gray-500
                        "
                      >
                        Cidade
                      </p>

                      <p
                        className="
                        font-semibold
                        text-lg
                        "
                      >
                        {user?.city}
                      </p>
                    </div>

                    <div>
                      <p
                        className="
                        text-gray-500
                        "
                      >
                        Telefone
                      </p>

                      <p
                        className="
                        font-semibold
                        text-lg
                        "
                      >
                        {user?.phone}
                      </p>
                    </div>

                    <div>
                      <p
                        className="
                        text-gray-500
                        "
                      >
                        Tipo de Conta
                      </p>

                      <p
                        className="
                        font-semibold
                        text-lg
                        "
                      >
                        Cliente
                      </p>
                    </div>

                    <div>
                      <p
                        className="
                        text-gray-500
                        "
                      >
                        Status
                      </p>

                      <p
                        className="
                        font-semibold
                        text-green-600
                        "
                      >
                        Ativa
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* PEDIDOS */}

              {activeTab === "orders" && (
                <>
                  <h3
                    className="
                  text-3xl
                  font-bold
                  mb-8
                  "
                  >
                    Meus Pedidos
                  </h3>

                  <div className="space-y-4">
                    {orders.length === 0 ? (
                      <div
                        className="
                      bg-pink-50
                      p-6
                      rounded-2xl
                      "
                      >
                        Nenhum pedido encontrado.
                      </div>
                    ) : (
                      orders.map((order) => (
                        <div
                          key={order.id}
                          className="
                        border
                        rounded-2xl
                        p-5
                        "
                        >
                          <h4
                            className="
                          font-bold
                          text-lg
                          "
                          >
                            Pedido #{order.id}
                          </h4>

                          <p
                            className={`
                            font-semibold
                            ${
                              order.status === "Cancelado"
                                ? "text-red-500"
                                : order.status === "Concluído"
                                  ? "text-green-600"
                                  : "text-yellow-600"
                            }
                          `}
                          >
                            Status: {order.status}
                          </p>

                          <div className="mt-3">
                            <p className="font-semibold mb-2">
                              Itens do Pedido:
                            </p>

                            {order.items?.length > 0 ? (
                              <ul className="space-y-1">
                                {order.items.map((item, index) => (
                                  <li key={index} className="text-gray-700">
                                    • {item.quantity}x {item.product_name}
                                    {" - "}
                                    R$ {Number(item.price).toFixed(2)}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-gray-500">
                                Nenhum item encontrado.
                              </p>
                            )}
                          </div>

                          <p className="mt-3 font-semibold">
                            Total: R$ {Number(order.total).toFixed(2)}
                          </p>

                          <p>
                            Data:{" "}
                            {new Date(order.created_at).toLocaleDateString(
                              "pt-BR",
                            )}
                          </p>
                          {order.status !== "Cancelado" && (
                            <button
                              onClick={() => handleCancelOrder(order.id)}
                              className="
                              mt-4

                              bg-red-500
                              text-white

                              px-4
                              py-2

                              rounded-xl

                              hover:bg-red-600
                              "
                            >
                              Cancelar Pedido
                            </button>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </>
              )}

              {/* FAVORITOS */}

              {activeTab === "favorites" && (
                <>
                  <h3
                    className="
                    text-3xl
                    font-bold
                    mb-8
                    "
                  >
                    Produtos Favoritos
                  </h3>

                  {favorites.length === 0 ? (
                    <div
                      className="
                      bg-pink-50
                      p-6
                      rounded-2xl
                      "
                    >
                      Você ainda não possui produtos favoritos.
                    </div>
                  ) : (
                    <div
                      className="
                      grid
                      gap-6
                      md:grid-cols-2
                      "
                    >
                      {favorites.map((product) => (
                        <div
                          key={product.id}
                          className="
                          border
                          rounded-2xl
                          p-4
                          flex
                          gap-4
                          "
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="
                            w-24
                            h-24
                            rounded-xl
                            object-cover
                            "
                          />

                          <div>
                            <h4 className="font-bold">{product.name}</h4>

                            <p className="text-gray-500">
                              {product.description}
                            </p>

                            <p
                              className="
                              mt-2
                              font-semibold
                              text-pink-600
                              "
                            >
                              R$ {product.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* CONFIGURAÇÕES */}

              {activeTab === "settings" && (
                <>
                  <h3
                    className="
                    text-3xl
                    font-bold
                    mb-8
                    "
                  >
                    Configurações
                  </h3>

                  <div className="space-y-5">
                    <div>
                      <label className="block mb-2 font-medium">Nome</label>

                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="
                        w-full
                        border
                        rounded-xl
                        p-3
                        "
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium">Telefone</label>

                      <input
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                        maxLength={15}
                        placeholder="(99) 99999-9999"
                        className="
                        w-full
                        border
                        rounded-xl
                        p-3
                        "
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium">Cidade</label>

                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="
                        w-full
                        border
                        rounded-xl
                        p-3
                        "
                      />
                    </div>

                    <button
                      onClick={handleUpdateProfile}
                      className="
                      bg-pink-500
                      text-white
                      px-6
                      py-3
                      rounded-xl
                      hover:bg-pink-600
                      "
                    >
                      Salvar Alterações
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
