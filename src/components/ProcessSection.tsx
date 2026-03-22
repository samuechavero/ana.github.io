const steps = [
  {
    number: "01",
    title: "Infórmate sin compromiso",
    desc: "Habla con Ana y resuelve todas tus dudas. Sin presión, sin letra chica, en tu idioma.",
  },
  {
    number: "02",
    title: "Analiza las opciones con tu pareja",
    desc: "Revisa juntos las coberturas disponibles y elige la que mejor se adapte a su situación económica.",
  },
  {
    number: "03",
    title: "Edifica un búnker financiero para tus hijos",
    desc: "Activa tu póliza y construye la seguridad que tu familia merece. Un paso simple que cambia todo.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-3">
            ¿Cómo funciona? Solo 3 pasos.
          </h2>
          <p className="text-gray-500">Simple, rápido y sin papeleo complicado.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-blue-100 z-0" style={{ width: "calc(100% - 2rem)", left: "calc(50% + 2.5rem)" }} />
              )}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative z-10">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-blue-900 font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
