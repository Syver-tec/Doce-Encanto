import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success("Cadastro realizado com sucesso!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
      navigate("/login");
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.message || "Erro ao criar conta");
    } finally {
      setLoading(false);
    }

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      await axios.post("http://localhost:5000/auth/register", formData);
      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

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
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1974&auto=format&fit=crop"
          alt="Confeitaria"
          className="
          w-full
          h-full

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
              Crie sua conta
            </h1>

            <p
              className="
              mt-4
              text-lg
              "
            >
              Cadastre-se para acompanhar pedidos, salvar favoritos e aproveitar
              novidades.
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
              Cadastro
            </h2>

            <p
              className="
              mt-3

              text-gray-600
              "
            >
              Crie sua conta gratuitamente
            </p>
          </div>

          <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
            {/* NOME */}

            <div>
              <label className="block mb-2 font-medium">Nome Completo</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite seu nome"
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

            {/* EMAIL */}

            <div>
              <label className="block mb-2 font-medium">Email</label>

              <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={handleChange}
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

            <div>
              <label className="block mb-2 font-medium">Senha</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Crie uma senha"
                  required
                  className="
                  w-full

                  px-4
                  py-3
                  pr-12

                  border
                  border-gray-300

                  rounded-xl

                  outline-none

                  focus:border-pink-500
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

                  text-gray-500
                  "
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* CONFIRMAR SENHA */}

            <div>
              <label className="block mb-2 font-medium">Confirmar Senha</label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Digite novamente"
                  required
                  className="
                  w-full

                  px-4
                  py-3
                  pr-12

                  border
                  border-gray-300

                  rounded-xl

                  outline-none

                  focus:border-pink-500
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="
                  absolute
                  right-4
                  top-1/2

                  -translate-y-1/2

                  text-gray-500
                  "
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
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

              hover:bg-pink-600

              transition-all
              duration-300

              disabled:opacity-50
              "
            >
              {loading ? "Criando..." : "Criar Conta"}
            </button>
          </form>

          {/* LOGIN */}

          <p
            className="
            mt-6

            text-center

            text-gray-600
            "
          >
            Já possui uma conta?{" "}
            <Link
              to="/login"
              className="
              text-pink-500
              font-medium

              hover:text-pink-600
              "
            >
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Register;
