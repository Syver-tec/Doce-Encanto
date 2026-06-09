import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/auth/login",
        formData,
      );

      localStorage.setItem("token", response.data.token);

      localStorage.setItem("user", JSON.stringify(response.data.user));

      toast.success("Login realizado!");

      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (error) {
      setError(error.response?.data?.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  return (
    <main
      className="
      min-h-screen

      grid

      lg:grid-cols-2
      "
    >
      {/* LADO ESQUERDO */}

      <div
        className="
        hidden
        lg:block

        relative
        "
      >
        <img
          src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?q=80&w=1974&auto=format&fit=crop"
          alt="Doces"
          className="
          w-500
          h-182

          object-cover
          "
        />

        <div
          className="
          absolute
          inset-0

          bg-black/40
          "
        />

        <div
          className="
          absolute
          inset-0

          flex
          items-center
          justify-center
          "
        >
          <div className="text-center text-white px-8">
            <h1
              className="
              text-5xl
              font-bold
              "
            >
              Bem-vindo de volta
            </h1>

            <p
              className="
              mt-4
              text-lg
              "
            >
              Faça login para acompanhar seus pedidos e aproveitar nossas
              delícias.
            </p>
          </div>
        </div>
      </div>

      {/* LADO DIREITO */}

      <div
        className="
        flex
        items-center
        justify-center

        px-6
        py-12
        "
      >
        <div
          className="
          w-full
          max-w-md
          "
        >
          <div className="text-center">
            <h2
              className="
              text-4xl
              font-bold

              text-gray-900
              "
            >
              Entrar
            </h2>

            <p
              className="
              mt-3

              text-gray-600
              "
            >
              Acesse sua conta
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* EMAIL */}

            <div>
              <label
                className="
                block

                mb-2

                font-medium
                "
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu email"
                required
                className="
                w-full

                px-4
                py-3

                border
                border-gray-300

                rounded-xl

                outline-none

                focus:border-pink-500
                "
              />
            </div>

            {/* SENHA */}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Digite sua senha"
                className="
                w-full
                px-4
                py-3
                pr-12
                border
                border-gray-300
                rounded-xl
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                "
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* ERRO */}

            {error && (
              <div
                className="
                bg-red-100
                text-red-600
                p-3
                rounded-lg
                "
              >
                {error}
              </div>
            )}

            {/* BOTÃO */}

            <button
              type="submit"
              disabled={loading}
              className="
            w-full
            py-3
            rounded-xl

            bg-pink-500
            text-white

            font-medium

            disabled:opacity-50
            "
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          {/* LINK CADASTRO */}

          <p
            className="
            mt-6

            text-center

            text-gray-600
            "
          >
            Não possui uma conta?{" "}
            <Link
              to="/register"
              className="
              text-pink-500
              font-medium

              hover:text-pink-600
              "
            >
              Cadastre-se
            </Link>
          </p>

          {/* LINK HOME */}

          <p
            className="
            mt-1

            text-center

            text-gray-600
            "
          >
            Deseja continuar sem conta?{" "}
            <Link
              to="/"
              className="
              text-pink-500
              font-medium

              hover:text-pink-600
              "
            >
              Continuar como visitante
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
