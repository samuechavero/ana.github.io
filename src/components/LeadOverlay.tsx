import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface LeadOverlayProps {
  visible: boolean;
  onSuccess: () => void;
}

export default function LeadOverlay({ visible, onSuccess }: LeadOverlayProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!visible) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validación básica
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!name.trim()) {
      setError("El nombre es requerido.");
      setLoading(false);
      return;
    }
    if (cleanPhone.length < 10) {
      setError("Ingresa un número de teléfono válido (mínimo 10 dígitos).");
      setLoading(false);
      return;
    }

    try {
      const { error: supabaseError } = await supabase
        .from("leads")
        .insert([{ name: name.trim(), phone: cleanPhone }]);

      if (supabaseError) {
        throw supabaseError;
      }

      setSuccess(true);
      setLoading(false);

      // Flujo del funnel: Mostrar mensaje de éxito brevemente y ocultar
      setTimeout(() => {
        onSuccess();
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Resetear el estado para la próxima vez
        setSuccess(false);
        setName("");
        setPhone("");
      }, 2000);
    } catch (err) {
      console.error("Supabase Error:", err);
      setError("Hubo un problema al guardar tus datos. Intenta de nuevo.");
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      style={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(30, 58, 138, 0.7)",
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-in fade-in zoom-in duration-300">
        {!success ? (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
                <svg
                  className="w-7 h-7 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-1">
                Atención Exclusiva
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Deja tus datos para descubrir cómo proteger el futuro de tu
                familia.
              </p>
            </div>

            <form id="leadForm" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Tu nombre completo
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. María González"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  disabled={loading}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Tu número de teléfono
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. (713) 555-0123"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg text-center border border-red-100">
                  {error}
                </div>
              )}

              <button
                id="submitBtn"
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 text-lg shadow-lg shadow-blue-200 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Cargando...</span>
                  </>
                ) : (
                  <span>Ver el Video Ahora →</span>
                )}
              </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center">
              <span className="mr-1">🔒</span> Tu información es 100% confidencial y segura.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ¡Datos guardados con éxito!
            </h3>
            <p className="text-gray-500">
              Redirigiendo al video...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
