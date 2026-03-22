import { useState } from "react";

const faqs = [
  {
    question: "¿Qué pasa si me enfermo de gravedad?",
    answer: "Si sufres una enfermedad crónica o terminal como cáncer, infarto o derrame cerebral, puedes acceder a los beneficios en vida de tu póliza. Esto significa que puedes usar una parte del valor de tu seguro mientras aún estás vivo, para cubrir gastos médicos, deudas u otras necesidades urgentes. No tienes que faltar para que tu familia reciba ayuda.",
  },
  {
    question: "¿Es costoso para familias latinas?",
    answer: "¡Para nada! Tenemos planes desde $50 al mes, diseñados específicamente para familias de la comunidad hispana. Con coberturas de $100,000 a $200,000, es una inversión mínima para una protección máxima. Ana trabajará contigo para encontrar el plan que se ajuste a tu presupuesto real.",
  },
  {
    question: "¿Puedo asegurar a mis nietos o hijos?",
    answer: "Sí. Existen pólizas especiales para niños y jóvenes que ofrecen cobertura a muy bajo costo y que se mantienen por toda la vida. Asegurar a tus hijos o nietos desde pequeños es uno de los mejores regalos que puedes darles — garantizas que siempre estarán protegidos sin importar lo que pase en el futuro.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-3">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-500">Resolvemos tus dudas más comunes.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-blue-900 font-semibold text-base pr-4">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-200" style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 bg-white">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
