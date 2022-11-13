import "../style/scan.sass"
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import QrReader from 'react-scan-qr'
import axios from "axios"

export default function ScanQr() {
  const navigateTo = useNavigate();
  const [scanResult, setScanResult] = useState('');
  const [qrTransactionInfo, setQrTransactionInfo] = useState([]);
  const [choosedType, setChoosedType] = useState("");
  const [chooseCard, setChooseCard] = useState(0);
  const [signature, setSignature] = useState("");
  const [isCameraAccessGranted, setIsCameraAccessGranted] = useState("");
  
  

  const API_URL = "https://dtenge.eubank.kz:8000/api/"
  const handleScanError = (error) =>{
    console.log(error)
  }
  const goBack = () => {
    navigateTo('/');
  }
  const handleScan = (result) =>{
    if(result){
      console.log(result);
      setScanResult(result.split('#'));
      console.log(result.split('#'));
    }
  }
  
  const chooseStandart = () =>{
    document.getElementById("standart-wrapper").style.backgroundColor = '#333B47'
    document.getElementById("standart-balance-text").style.color = '#FFFFFF'
    document.getElementById("standart-balance-decs").style.color = '#CACACA'
    document.getElementById("special-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("special-balance-text").style.color = '#000000'
    document.getElementById("special-balance-desc").style.color = '#67707C'
    document.getElementById("coffee-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("coffee-balance-text").style.color = '#000000'
    document.getElementById("coffee-balance-desc").style.color = '#67707C'
    document.getElementById("travel-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("travel-balance-text").style.color = '#000000'
    document.getElementById("travel-balance-desc").style.color = '#67707C'
    document.getElementById("ifdl-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("ifdl-balance-text").style.color = '#000000'
    document.getElementById("ifdl-balance-desc").style.color = '#67707C'
    setChoosedType("standard")
    setChooseCard(1)
  }
  const chooseLunch = () =>{
    document.getElementById("special-wrapper").style.backgroundColor = '#333B47'
    document.getElementById("special-balance-text").style.color = '#FFFFFF'
    document.getElementById("special-balance-desc").style.color = '#CACACA'
    document.getElementById("standart-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("standart-balance-text").style.color = '#000000'
    document.getElementById("standart-balance-decs").style.color = '#67707C'
    document.getElementById("coffee-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("coffee-balance-text").style.color = '#000000'
    document.getElementById("coffee-balance-desc").style.color = '#67707C'
    document.getElementById("travel-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("travel-balance-text").style.color = '#000000'
    document.getElementById("travel-balance-desc").style.color = '#67707C'
    document.getElementById("ifdl-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("ifdl-balance-text").style.color = '#000000'
    document.getElementById("ifdl-balance-desc").style.color = '#67707C'
    setChoosedType("lunch allowance")
    setChooseCard(1)
  }
  const chooseCoffee = () =>{
    document.getElementById("coffee-wrapper").style.backgroundColor = '#333B47'
    document.getElementById("coffee-balance-text").style.color = '#FFFFFF'
    document.getElementById("coffee-balance-desc").style.color = '#CACACA'
    document.getElementById("standart-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("standart-balance-text").style.color = '#000000'
    document.getElementById("standart-balance-decs").style.color = '#67707C'
    document.getElementById("special-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("special-balance-text").style.color = '#000000'
    document.getElementById("special-balance-desc").style.color = '#67707C'
    document.getElementById("travel-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("travel-balance-text").style.color = '#000000'
    document.getElementById("travel-balance-desc").style.color = '#67707C'
    document.getElementById("ifdl-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("ifdl-balance-text").style.color = '#000000'
    document.getElementById("ifdl-balance-desc").style.color = '#67707C'
    setChoosedType("coffee allowance")
    setChooseCard(1)
  }
  const chooseTravel = () =>{
    document.getElementById("travel-wrapper").style.backgroundColor = '#333B47'
    document.getElementById("travel-balance-text").style.color = '#FFFFFF'
    document.getElementById("travel-balance-desc").style.color = '#CACACA'
    document.getElementById("standart-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("standart-balance-text").style.color = '#000000'
    document.getElementById("standart-balance-decs").style.color = '#67707C'
    document.getElementById("coffee-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("coffee-balance-text").style.color = '#000000'
    document.getElementById("coffee-balance-desc").style.color = '#67707C'
    document.getElementById("special-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("special-balance-text").style.color = '#000000'
    document.getElementById("special-balance-desc").style.color = '#67707C'
    document.getElementById("ifdl-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("ifdl-balance-text").style.color = '#000000'
    document.getElementById("ifdl-balance-desc").style.color = '#67707C'
    setChoosedType("travel allowance")
    setChooseCard(1)
  }
  const chooseIfdl = () =>{
    document.getElementById("ifdl-wrapper").style.backgroundColor = '#333B47'
    document.getElementById("ifdl-balance-text").style.color = '#FFFFFF'
    document.getElementById("ifdl-balance-desc").style.color = '#CACACA'
    document.getElementById("standart-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("standart-balance-text").style.color = '#000000'
    document.getElementById("standart-balance-decs").style.color = '#67707C'
    document.getElementById("coffee-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("coffee-balance-text").style.color = '#000000'
    document.getElementById("coffee-balance-desc").style.color = '#67707C'
    document.getElementById("travel-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("travel-balance-text").style.color = '#000000'
    document.getElementById("travel-balance-desc").style.color = '#67707C'
    document.getElementById("special-wrapper").style.backgroundColor = '#F4F6F8'
    document.getElementById("special-balance-text").style.color = '#000000'
    document.getElementById("special-balance-desc").style.color = '#67707C'
    setChoosedType("IFDL")
    setChooseCard(1)
  }
  const previewStyle ={
    height: "88%",
    width: "100%",
  }

  const transfer = () => {
    if(chooseCard == 1){
      window.localStorage.setItem('reciever-name', scanResult[2])
      window.localStorage.setItem('r_public_address', scanResult[0])
      window.localStorage.setItem('r_amount', scanResult[3])
      window.localStorage.setItem('r_signature', scanResult[4])
      window.localStorage.setItem('r_node', scanResult[1])
      window.localStorage.setItem('r_type', choosedType)
      sendDataToKotlin()

    }else{
      setChooseCard(2)
    }
  }
  const sendDataToKotlin = () =>{
    window.JavaScriptMoth.getData("Scan", window.localStorage.getItem("wallet"), window.localStorage.getItem("view"), window.localStorage.getItem("spend"), "O=Eurasian Bank, L=Nur-Sultan, C=KZ", scanResult[0], scanResult[1], scanResult[3] * 100);
  }
  function format(str) {
    const s = str.length;
    const chars = str.split('');
    const strWithSpaces = chars.reduceRight((acc, char, i) => {
        const spaceOrNothing = ((((s - i) % 3) === 0) ? ' ' : '');
        return (spaceOrNothing + char + acc);
    }, '');

    return ((strWithSpaces[0] === ' ') ? strWithSpaces.slice(1) : strWithSpaces);
}
  const goToGenerate = () =>{
    navigateTo('/generate-qr')
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
                <div className="w-1/2 text-center text-white border-b-2 border-[#F4F6F8] h-8">Сканировать</div>
                <div className="w-1/2 text-center text-gray-500" onClick={goToGenerate}>Создать</div>
              </div>
          </div>
        </div>
        
          
            {
                scanResult ? (
                    
                  <div class="flex flex-col items-center">
                    <div class="w-10/12 h-20 rounded-xl mt-5 bg-white"> 
                      <h1 class=" text-blue-600 text-sm ml-4 mt-3">Информация о продавце</h1>
                      <h2 class="mt-2 text-xl ml-4">{scanResult[2]}</h2>
                    </div>
                    <div class="w-10/12 h-28 bg-white mt-3 rounded-xl">
                      <h3 class="ml-4 text-gray-400 mt-2 text-sm">К оплате</h3>
                      <h1 class="ml-4 mt-2 text-3xl font-semibold">{format(scanResult[3])} <span class="text-xl text-gray-500 font-normal">₸</span></h1>
                      <h3 class="ml-4 text-gray-400 mt-2 text-sm">Комиссия <span class="text-black font-bold">0</span> ₸</h3>
                    </div>
                    <div class="w-10/12 bg-white mt-3 h-64 rounded-xl overflow-y-scroll">
                    {
                        chooseCard == 2 ? (<h2 className="text-red-700 text-sm ml-4">Выберите тип ЦТ</h2>) : (null)
                      }
                      <h1 class=" text-blue-600 text-sm ml-4 mt-3 w-full">Способ оплаты</h1>
                      <div className="method_item ml-4 mt-3 rounded-xl flex flex-row" style={{backgroundColor: "#F4F6F8"}} id="standart-wrapper" onClick={chooseStandart}>
                        <div className="left-standart ml-4">
                        </div>
                        <div className="right ml-4 mt-4">
                          <div className="balance text-xl font-semibold" id="standart-balance-text" style={{color: "#000000"}}>{format(window.localStorage.getItem("balance"))} ₸</div>
                          <h2 className="font-medium" id="standart-balance-decs" style={{color: "#67707C"}}>Стандартные ЦТ</h2>
                        </div>
                      </div>
                      <div className="method_item ml-4 mt-3 rounded-xl flex flex-row" id="special-wrapper" style={{backgroundColor: "#F4F6F8"}} onClick={chooseLunch}>
                        <div className="left-special ml-4">
                        </div>
                        <div className="right ml-4 mt-4">
                          <div className="balance text-xl font-semibold" id="special-balance-text" style={{color: "#000000"}}>{format(window.localStorage.getItem("lunch_balance"))} ₸</div>
                          <h2 className="font-medium" id="special-balance-desc" style={{color: "#67707C"}}>Пособие на обед</h2>
                        </div>
                      </div>
                      <div className="method_item ml-4 mt-3 rounded-xl flex flex-row" id="coffee-wrapper" style={{backgroundColor: "#F4F6F8"}} onClick={chooseCoffee}>
                        <div className="left-special ml-4">
                        </div>
                        <div className="right ml-4 mt-4">
                          <div className="balance text-xl font-semibold" id="coffee-balance-text" style={{color: "#000000"}}>{format(window.localStorage.getItem("coffee_balance"))} ₸</div>
                          <h2 className="font-medium" id="coffee-balance-desc" style={{color: "#67707C"}}>Бонусы на кофе</h2>
                        </div>
                      </div>
                      <div className="method_item ml-4 mt-3 rounded-xl flex flex-row" id="travel-wrapper" style={{backgroundColor: "#F4F6F8"}} onClick={chooseTravel}>
                        <div className="left-special ml-4">
                        </div>
                        <div className="right ml-4 mt-4">
                          <div className="balance text-xl font-semibold" id="travel-balance-text" style={{color: "#000000"}}>{format(window.localStorage.getItem("travel_balance"))} ₸</div>
                          <h2 className="font-medium" id="travel-balance-desc" style={{color: "#67707C"}}>Оплата за проезд</h2>
                        </div>
                      </div>
                      <div className="method_item ml-4 mt-3 rounded-xl flex flex-row" id="ifdl-wrapper" style={{backgroundColor: "#F4F6F8"}} onClick={chooseIfdl}>
                        <div className="left-special ml-4">
                        </div>
                        <div className="right ml-4 mt-4">
                          <div className="balance text-xl font-semibold" id="ifdl-balance-text" style={{color: "#000000"}}>{format(window.localStorage.getItem("ifdl_balance"))} ₸</div>
                          <h2 className="font-medium" id="ifdl-balance-desc" style={{color: "#67707C"}}>Беспроцентный займ</h2>
                        </div>
                      </div>
                    </div>
                    <div class="w-10/12 absolute bottom-4">
                      <h3 class="font-light text-gray-500 text-sm">Нажимая кнопку, Я соглашаюсь с <span class="underline"> условиями перевода</span></h3>
                      <button class="mt-6 text-lg p-3 w-full rounded-xl bg-[#333B47] text-white font-bold" onClick={transfer}>Подтвердить</button>
                    </div>
                  </div>
                ) : 
                ( 
                  <div className="flex justify-center flex-col items-center mt-3">
                    <div className="flex justify-center flex-col items-center bg-white p-2" style={{ margin: 'auto', width: 400}}>
                        <QrReader
                        style = {previewStyle}
                        delay= {100}
                        onError={handleScanError}
                        onScan={handleScan}
                        />
                    </div>
                  </div>
                )
            }
      </div>
    </div>
  )
}