export default function PainSection() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 md:p-8">
          <p className="text-blue-900 text-xl md:text-2xl font-semibold leading-relaxed italic text-center">
            "Dicen que es mejor llorar en un Ferrari que en un Toyota. No es lo mismo enfrentar una pérdida sin un centavo, que tener la certeza financiera para resolverlo."
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: "😢", label: "Sin seguro", desc: "Tu familia queda desprotegida y endeudada." },
            { icon: "⚡", label: "El caos no avisa", desc: "Un accidente o enfermedad puede cambiar todo en segundos." },
            { icon: "🛡️", label: "Con protección", desc: "Paz mental, estabilidad y un futuro asegurado para tus hijos." },
          ].map((item) => (
            <div key={item.label} className="bg-gray-50 rounded-2xl p-6">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-blue-900 mb-2">{item.label}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
