import WhatsAppButton from "./WhatsAppButton";

export default function FinalCta() {
  return (
    <section className="bg-blue-900 py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          No dejes el futuro de tu familia al azar.
        </h2>
        <p className="text-blue-200 text-lg mb-10">
          Un solo mensaje puede cambiar todo. Habla ahora con Ana, en español, sin costo y sin compromiso.
        </p>
        
        <div className="max-w-md mx-auto mb-6">
          <WhatsAppButton className="w-full" />
        </div>

        <p className="text-blue-300 text-sm">
          🔒 Tu información es 100% confidencial.
        </p>
      </div>
    </section>
  );
}
