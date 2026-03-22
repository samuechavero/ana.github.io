export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-blue-900 font-bold text-lg mb-1">Ana Cordonez</p>
        <p className="text-gray-500 text-sm mb-4">Agente de seguros licenciada · Comunidad hispana en Houston, TX</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span>📱 WhatsApp disponible</span>
          <span>🗣️ Atención en español</span>
          <span>🔒 Información confidencial</span>
        </div>
        <p className="text-gray-300 text-xs mt-6">
          © {new Date().getFullYear()} Ana Cordonez · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
