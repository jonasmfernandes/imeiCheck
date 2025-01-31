import "./App.css";
import { useState } from "react";
import { Copy } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

function App() {
 
  const [imeiValue, setImeiValue] = useState("");

  const imeiVerifier = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    if (inputValue.length <= 15) {
      setImeiValue(inputValue);
    }
  };

  const copyToClipboard = () => {
    if (imeiValue.length === 15) {
      navigator.clipboard.writeText(imeiValue);
    }
  };

  const notify = () => toast("IMEI copiado.")

  const allBtn = () => {
    copyToClipboard();
    notify();
  }

  return (
    <>
      <div className="h-screen bg-[#1F1F1F] flex justify-center items-center">
        <div className="  p-10 bg-[#252525] inline-flex flex-col justify-center items-center gap-2 rounded-lg shadow-2xl">
          <h1 className="text-white text-xl">IMEI CHECK</h1>
          <input
            className={`rounded-sm border p-1 transition-colors duration-200 ${
              imeiValue.length === 0
                ? "border-white"
                : imeiValue.length === 15
                ? "border-green-500 text-green-600"
                : "border-red-500 text-red-600"
            }`}
            type="text"
            inputMode="numeric"
            value={imeiValue}
            onInput={imeiVerifier}
            maxLength={15}
            placeholder="Digite o IMEI"
          />
          <button
            className={`flex items-center gap-1 py-2 px-5 rounded-md mt-2 duration-200 ${
              imeiValue.length === 15
                ? "bg-[#1F1F1F] text-white cursor-pointer hover:bg-[#111111]"
                : "bg-[#3e3e3e5e] text-[#aaaaaa] cursor-not-allowed"
            }`}
            onClick={allBtn}
            disabled={imeiValue.length !== 15}
          >
            <ToastContainer
            
            position="top-center"
            autoClose={1500}
            hideProgressBar={true}
            closeOnClick={true}
            theme="dark"
            />
            <Copy size={16} />
            Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
