import image from "./assets/pilates-animate.svg"
import { FaRuler, FaWeightHanging } from "react-icons/fa"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [loading, setLoading] = useState(false)
  const [resultado, setResultado] = useState("")
  const [mensagem, setMensagem] = useState("")

  function clickCalcular(){
    if(!peso || !altura){
      toast.error("Preencha todos os campos")
      return
    }

    setLoading(true)
    const ValorImc = peso / (altura * altura)


    setTimeout(
      () => {
        setLoading(false)
        setResultado(ValorImc.toFixed(2))

        if(ValorImc < 18.5){
          setMensagem("Magreza")
        } else if(ValorImc >= 18.5 && ValorImc <= 24.9){
          setMensagem("Normal") 
        } else if(ValorImc >= 25 && ValorImc <= 29.9){
          setMensagem("Sobrepeso")
        } else if(ValorImc >= 30 && ValorImc <= 34.9){
          setMensagem("Obesidade grau 1")
        } else if(ValorImc >= 35 && ValorImc <= 39.9){
          setMensagem("Obesidade grau 2")
        } else{
          setMensagem("Obesidade grau 3")
        }
      }, 1000
    )
  }

  return (
    <div className="w-full h-screen flex bg-black">
      <ToastContainer />
      <div className="w-[50%] h-full flex items-center justify-center">
        <img src={image} alt="" width={500} />
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[60%] h-auto p-[20px] rounded-lg flex flex-col bg-[#1f1f1f]">
          <div className="w-full flex flex-col">
            <h1 className="text-white text-[30px] font-bold">Calculadora - IMC</h1>
            <div className="w-[150px] h-[4px] rounded-lg bg-[#29f529]"></div>
          </div>
          <div className="w-full flex flex-col">
            <div className="mt-4">
              <label htmlFor="" className="text-white text-[18px]">Peso</label>
              <div className="w-full flex bg-[#555555] rounded-md h-[40px]">
                <div className="w-[10%] h-full flex items-center justify-center">
                  <FaWeightHanging size={20} color="#B0B0B0FF"/>
                </div>
                <div className="w-[80%] h-full">
                  <input className="w-full h-full bg-transparent border-none outline-none text-white" type="number" onChange={(event) => setPeso(event.target.value)}/>
                </div>
                <div className="w-[10%] h-full flex items-center justify-center">
                  <p className="text-white">kg</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="" className="text-white text-[18px]">Altura</label>
              <div className="w-full flex bg-[#555555] rounded-md h-[40px]">
                <div className="w-[10%] h-full flex items-center justify-center">
                  <FaRuler size={20} color="#B0B0B0FF"/>
                </div>
                <div className="w-[80%] h-full">
                  <input className="w-full h-full bg-transparent border-none outline-none text-white" type="number" onChange={(event) => setAltura(event.target.value)}/>
                </div>
                <div className="w-[10%] h-full flex items-center justify-center">
                  <p className="text-white">m</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-4">
            <button className="w-full h-[40px] bg-[#29f529] rounded-lg text-white font-bold" onClick={clickCalcular}>
              {
                loading ? (<div className="w-full h-full flex items-center justify-center"><div className="w-[24px] h-[24px] border-2 border-t-[4px] border-white rounded-full animate-spin"></div></div>) : "Calcular"
              }
            </button>
          </div>
          {
            resultado && (
            <div className="w-full flex justify-center flex-col">
              <div className="w-full bg-gray-500 h-[1px] mt-4"></div>
              <div className="w-full py-4 flex">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-[35px] text-[#29f529]">{resultado}</p>
                  <p className="text-[15px] text-white">Seu IMC</p>
                </div>
                  <div className="w-full flex items-center justify-center">
                    <p className="text-[15px] text-white">{mensagem}</p>
                  </div>
              </div>
                    <div className="w-full bg-gray-500 h-[1px] mt-4"></div>
                    <div className="w-full flex items-center justify-center"><a className="decoration-[0] text-[15px] text-[#29f529] mt-4" href="">Mais informações sobre o IMC</a></div>
            </div>
                    )
          }
        </div>
      </div>
    </div>
  )
}

export default App
