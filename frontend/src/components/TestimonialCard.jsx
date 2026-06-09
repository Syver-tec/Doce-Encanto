function TestimonialCard({
  name,
  role,
  review,
}) {
  return (
    <div
      className="
      bg-white

      p-8

      rounded-3xl

      shadow-lg

      hover:-translate-y-1
      hover:shadow-xl

      transition-all
      duration-300
      "
    >
      {/* Avaliação */}

      <p
        className="
        text-gray-600
        leading-relaxed
        "
      >
        "{review}"
      </p>

      {/* Cliente */}

      <div className="mt-6">
        <h4
          className="
          font-bold
          text-gray-900
          "
        >
          {name}
        </h4>

        <span
          className="
          text-sm
          text-pink-600
          "
        >
          {role}
        </span>
      </div>
    </div>
  );
}

export default TestimonialCard;