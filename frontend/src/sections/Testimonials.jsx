import TestimonialCard from "../components/TestimonialCard";

function Testimonials() {
  const testimonials = [
    {
      name: "Ana Paula",
      role: "Cliente fiel",
      review:
        "Os bolos são simplesmente incríveis. Sempre encomendo para aniversários e eventos especiais.",
    },
    {
      name: "Carlos Henrique",
      role: "Cliente",
      review:
        "O cappuccino é excelente e o atendimento é impecável. Ambiente muito agradável.",
    },
    {
      name: "Mariana Silva",
      role: "Cliente",
      review:
        "Os doces artesanais são deliciosos. Dá para perceber o cuidado em cada detalhe.",
    },
  ];

  return (
    <section
      className="
      py-20
      px-6

      bg-pink-50
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center">

          <span
            className="
            inline-block

            px-4
            py-2

            rounded-full

            bg-white

            text-pink-600

            text-sm
            "
          >
            Avaliações
          </span>

          <h2
            className="
            mt-6

            text-4xl
            md:text-5xl

            font-bold
            "
          >
            O que nossos clientes dizem
          </h2>

          <p
            className="
            mt-6

            text-gray-600

            max-w-2xl
            mx-auto
            "
          >
            A satisfação dos nossos clientes é o ingrediente mais importante.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
          mt-16

          grid
          gap-8

          md:grid-cols-2
          lg:grid-cols-3
          "
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;