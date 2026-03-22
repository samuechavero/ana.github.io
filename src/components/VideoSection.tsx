import { useEffect, useRef } from "react";
import WhatsAppButton from "./WhatsAppButton";

interface VideoSectionProps {
  shouldAutoPlay?: boolean;
}

export default function VideoSection({ shouldAutoPlay = false }: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (shouldAutoPlay && videoRef.current) {
      videoRef.current.play().catch(err => console.log("Auto-play prevented by browser: ", err));
    }
  }, [shouldAutoPlay]);

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black" style={{ maxWidth: "800px" }}>
          <video
            ref={videoRef}
            src="./IUL.MP4"
            className="w-full h-auto"
            style={{ width: "100%", maxWidth: "800px", display: "block", margin: "0 auto" }}
            controls
            playsInline
            preload="metadata"
          >
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4 mb-8">
          👆 Mira este video importante — podría cambiar el futuro de tu familia.
        </p>

        <div className="flex justify-center w-full max-w-lg mx-auto">
          <WhatsAppButton className="w-full" />
        </div>
      </div>
    </section>
  );
}
