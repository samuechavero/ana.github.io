export default function AuthoritySection() {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div 
              className="mx-auto md:mx-0 transition-all hover:scale-105"
              style={{ 
                width: '128px', 
                height: '128px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                border: '3px solid #D4AF37',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              <img 
                src="ana-profile.jpg" 
                alt="Ana Cordonez - Agente de Seguros Licenciada" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }}
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-blue-200">
              Agente de seguros licenciada · Houston, TX
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-3">
              Soy Ana Cordonez, mamá y abuela.
            </h2>
            <blockquote className="text-blue-800 text-base md:text-lg leading-relaxed italic border-l-4 border-blue-400 pl-4">
              "Yo crié a mis hijos como mamá soltera y desde los 24 años me aseguré. La familia es una mesa: si falta papá, falta el ingreso y la mesa cojea. Pero si falta mamá, que es la estructura, la mesa se cae por completo. Nosotras somos las que edificamos nuestra casa. Ambos pilares deben estar protegidos."
            </blockquote>
            <div className="flex flex-wrap gap-4 mt-6">
              {["Mamá soltera", "20+ años de experiencia", "Comunidad hispana", "Houston, TX"].map((tag) => (
                <span key={tag} className="bg-white text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200 shadow-sm">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
