import { useState } from "react";
import { toast } from "react-toastify";

const CVDownloadButton: React.FC = () => {
  const [buttonText, setButtonText] = useState<string>(
    "Descargar Hoja de vida"
  );

  const handleDownload = (): void => {
    if (buttonText === "Descargar Hoja de vida") {
      const downloadPromise = new Promise<void>((resolve, reject) => {
        const link = document.createElement("a");
        link.href =
          " https://drive.google.com/uc?export=download&id=12xsAwRJzgBSTUQf_6ZdcxWzoTCNZwRcX";
        link.download = "CV-FULLSTACK-MELVIN-GONZALEZ-2025.pdf";
        document.body.appendChild(link);

        setTimeout(() => {
          try {
            link.click();
            document.body.removeChild(link);
            resolve();
          } catch (error) {
            reject(error);
          }
        }, 2000);
      });

      toast.promise(downloadPromise, {
        pending: "Descargando Hoja de vida...",
        success: "Hoja de vida descargada con éxito.",
        error: "Error al descargar la Hoja de vida.",
      });

      setButtonText("Gracias por descargar la Hoja de vida");
    } else {
      toast.info("Ya has descargado la Hoja de vida. ¡Gracias!");
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="w-2xs transition-all p-3 cursor-pointer bg-cyan-950/50  font-bold rounded-full flex items-center justify-center hover:bg-cyan-600/50 hover:text-white border-4 border-cyan-600 hover:border-white"
    >
      {buttonText}
    </button>
  );
};

export default CVDownloadButton;
