import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

export default function GenerateQrCode() {
  const navigateTo = useNavigate();
  const [amount_req, setAmount] = useState(0);
  const API_URL = "https://dtenge.eubank.kz:8000/api/"
 
  const handleAmount = (e) => {
    let value = e.target.value
    if(value) {
        setAmount(value);
    }else{
        setAmount(0);
    }
};
const createQr = () =>{
  window.localStorage.removeItem('qr_amount');
  window.localStorage.setItem('qr_amount', amount_req);
  sendDataToKotlin()
  navigateTo('/show-qr')
}
const sendDataToKotlin = () =>{
  window.JavaScriptMoth.getRecieverSignature("Generate QR", window.localStorage.getItem("wallet"), window.localStorage.getItem("view"), window.localStorage.getItem("spend"), "O=Eurasian Bank, L=Nur-Sultan, C=KZ");
}
const goBack = () => {
  navigateTo('/');
}
const goToScan = () =>{
  navigateTo("/scan-qr");
}
  return (
    <div>
      <div className="h-screen bg-[#F4F6F8]">
      <div className="bg-[#333B47] pt-4 pl-4 pr-4">
          <div>
            <a href="#" className="flex gap-5">
                <i onClick={goBack} className="far fa-long-arrow-left text-2xl text-white"></i>
                <div className="text-lg  font-medium text-white">QR код</div>
            </a>
              <div className="flex mt-4 h-8">
                <div className="w-1/2 text-center text-gray-500" onClick={goToScan}>Сканировать</div>
                <div className="w-1/2 text-center text-white border-b-2 border-[#F4F6F8] h-8">Создать</div>
              </div>
          </div>
      </div>
      <div className="flex justify-center flex-col items-center mt-5">
          <div className="mb-6 w-96">
          <div className="">
              <div className="col-span-3 flex flex-col items-start rounded-xl bg-white p-[14px]">
              <div className="input-div">
                  <input type="number" placeholder="0" onChange={handleAmount} className="mb-3 h-8 input-number border-none bg-transparent p-0 text-4xl outline-none focus:border-transparent focus:outline-none sm:text-sm" />₸
              </div>
              <div className="text-xs text-gray-400">Комиссия <span className="font-semibold">0</span> ₸</div>
              </div>
            
          </div>
          </div>
          <button type="button" onClick={createQr} className="mr-2 w-96 rounded-lg bg-[#29313A] px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Принять оплату {amount_req} ₸</button>
        </div>
      </div>
    </div>
  )
}