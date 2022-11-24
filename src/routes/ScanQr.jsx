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
  const [amount, setAmount] = useState("");
  const [homeScan, setHomeScan] = useState([])
  const [isHomeScaned, setIsHomeScaned] = useState(false)  
  

  const API_URL = "https://dtenge.eubank.kz:8000/api/"

  const handleAmount = (e) => {
    let value = e.target.value
    if(value) {
        setAmount(value);
    }else{
        setAmount(0);
    }
};
  const handleScanError = (error) =>{
    console.log(error)
  }
  const goBack = () => {
    navigateTo('/');
  }
  const handleScan = (result) =>{
    if(result){
      console.log(result);
      if(result.indexOf('#') >= 1){
        setHomeScan(result.split("#"))
        setIsHomeScaned(true)
        setScanResult(result.split("#"))
      }else{
        let arr = []
        let finish
        let finish2
        let count_lenght3
        let compare_split3
        let count_lenght4
        let compare_split4
        let count_lenght5
        let compare_split5
        let count_lenght6
        let compare_split6
        let count_lenght7
        let compare_split7
        let count_lenght8
        let compare_split8
        let count_lenght9
        let compare_split9
        let count_lenght10
        let compare_split10
        let count_lenght11
        let compare_split11
        let count_lenght13
        let compare_split13
        let count_lenght14
        let compare_split14
        let count_lenght15
        let compare_split15
        finish = (result.substr(0,7))  
        arr.push(finish)
        result = result.replace(finish, '')
        console.log(finish)  

        finish2 = (result.substr(0,5))  
        arr.push(finish2)
        result = result.replace(finish2, '')
        console.log(finish2)   

        count_lenght3 = (result.substr(0,5))    
        result = result.replace(count_lenght3, '')
        compare_split3 = count_lenght3.substr(3) 
        finish = (result.substr(0,compare_split3))  
        result = result.replace(finish,'')
        console.log(compare_split3)
        arr.push(finish) 

        count_lenght4 = (result.substr(0,5))   
        result = result.replace(count_lenght4, '')
        compare_split4 = count_lenght4.substr(2) 
        finish = (result.substr(0,compare_split4))  
        result = result.replace(finish,'')
        console.log(compare_split4)
        arr.push(finish) 

        count_lenght5 = (result.substr(0,5))    
        result = result.replace(count_lenght5, '')
        compare_split5 = count_lenght5.substr(2) 
        finish = (result.substr(0,compare_split5))  
        result = result.replace(finish,'')
        console.log(compare_split5)
        arr.push(finish) 

        count_lenght6 = (result.substr(0,5))    
        result = result.replace(count_lenght6, '')
        compare_split6 = count_lenght6.substr(2) 
        finish = (result.substr(0,compare_split6))  
        result = result.replace(finish,'')
        console.log(compare_split6)
        arr.push(finish) 

        count_lenght7 = (result.substr(0,5))    
        result = result.replace(count_lenght7, '')
        compare_split7 = count_lenght7.substr(2) 
        finish = (result.substr(0,compare_split7))  
        result = result.replace(finish,'')
        console.log(compare_split7)
        arr.push(finish) 

        count_lenght8 = (result.substr(0,5))    
        result = result.replace(count_lenght8, '')
        compare_split8 = count_lenght8.substr(2) 
        finish = (result.substr(0,compare_split8))  
        result = result.replace(finish,'')
        console.log(compare_split8)
        arr.push(finish) 

        count_lenght9 = (result.substr(0,5))    
        result = result.replace(count_lenght9, '')
        compare_split9 = count_lenght9.substr(2) 
        finish = (result.substr(0,compare_split9))  
        result = result.replace(finish,'')
        console.log(compare_split9)
        arr.push(finish) 

        count_lenght10 = (result.substr(0,5))    
        result = result.replace(count_lenght10, '')
        compare_split10 = count_lenght10.substr(2) 
        finish = (result.substr(0,compare_split10))  
        result = result.replace(finish,'')
        console.log(compare_split10)
        arr.push(finish) 

        finish = (result.substr(0,5))   
        let finish_first_value = finish.substr(0,2) 

        if (finish_first_value == 62){
        arr.push(finish)
        result = result.replace(finish, '')
        console.log(finish)
        }  else{ 
            result = result.replace(finish, '') 
            let finish_split = finish.substr(2) 
            let t = result.substr(0,finish_split)  
            result = result.replace(t,'')  
            console.log(finish_split)
            arr.push(finish) 
        }
        count_lenght11 = (result.substr(0,5))    
        result = result.replace(count_lenght11, '') 
        if (count_lenght11.substr(0,2) == 10){
            compare_split11 = count_lenght11.substr(2) 
            finish = (result.substr(0,compare_split11))  
            result = result.replace(finish,'')
            console.log(compare_split11)
            arr.push(finish) 
        }

        count_lenght13 = (result.substr(0,5))  
        result = result.replace(count_lenght13, '')
        compare_split13 = count_lenght13.substr(2) 
        finish = (result.substr(0,compare_split13))  
        result = result.replace(finish,'')
        console.log(compare_split13)
        arr.push(finish)

        count_lenght14 = (result.substr(0,5))  
        result = result.replace(count_lenght14, '')
        compare_split14 = count_lenght14.substr(2) 
        finish = (result.substr(0,compare_split14))  
        result = result.replace(finish,'')
        console.log(compare_split14)
        arr.push(finish)

        count_lenght15 = (result.substr(0,5))  
        result = result.replace(count_lenght15, '')
        compare_split15 = count_lenght15.substr(2) 
        finish = (result.substr(0,compare_split15))  
        result = result.replace(finish,'')
        console.log(compare_split15)
        arr.push(finish)
        console.log(arr) 
        setScanResult(arr);
      }
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
      if(isHomeScaned){
        window.localStorage.setItem('reciever-name', homeScan[2])
        window.localStorage.setItem('r_public_address', homeScan[0])
        window.localStorage.setItem('r_amount', homeScan[3])
        window.localStorage.setItem('r_signature', homeScan[4])
        window.localStorage.setItem('r_node', homeScan[1])
        window.localStorage.setItem('r_type', choosedType)
      }else{
        if(scanResult[7] == "KZ"){
          window.localStorage.setItem('reciever-name', scanResult[8])
          window.localStorage.setItem('r_public_address', scanResult[4])
          window.localStorage.setItem('r_amount', amount)
          window.localStorage.setItem('r_signature', scanResult[12])
          window.localStorage.setItem('r_node', scanResult[3])
          window.localStorage.setItem('r_type', choosedType)
  
        }else{
          window.localStorage.setItem('reciever-name', scanResult[9])
          window.localStorage.setItem('r_public_address', scanResult[4])
          window.localStorage.setItem('r_amount', scanResult[7] / 100)
          window.localStorage.setItem('r_signature', scanResult[12])
          window.localStorage.setItem('r_node', scanResult[3])
          window.localStorage.setItem('r_type', choosedType)
  
        }
      }
      
      sendDataToKotlin()

    }else{
      setChooseCard(2)
    }
  }
  const sendDataToKotlin = () =>{
    if(isHomeScaned){
      window.JavaScriptMoth.getData("Scan", window.localStorage.getItem("wallet"), window.localStorage.getItem("view"), window.localStorage.getItem("spend"), "O=Eurasian Bank, L=Nur-Sultan, C=KZ", scanResult[0], scanResult[1], scanResult[3] * 100);
    }else if(scanResult[7] == "KZ"){
      window.JavaScriptMoth.getData("Scan", window.localStorage.getItem("wallet"), window.localStorage.getItem("view"), window.localStorage.getItem("spend"), "O=Eurasian Bank, L=Nur-Sultan, C=KZ", scanResult[4], scanResult[3], amount * 100);
    }else{
      window.JavaScriptMoth.getData("Scan", window.localStorage.getItem("wallet"), window.localStorage.getItem("view"), window.localStorage.getItem("spend"), "O=Eurasian Bank, L=Nur-Sultan, C=KZ", scanResult[4], scanResult[3], scanResult[7]);
    }
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
                    {isHomeScaned ? (
                      <div class="w-10/12 h-20 rounded-xl mt-5 bg-white"> 
                      <h1 class=" text-blue-600 text-sm ml-4 mt-3">Информация о продавце</h1>
                      <h2 class="mt-2 text-xl ml-4">{homeScan[2]}</h2>
                    </div>
                    ) : (
                      <div class="w-10/12 h-20 rounded-xl mt-5 bg-white"> 
                        <h1 class=" text-blue-600 text-sm ml-4 mt-3">Информация о продавце</h1>
                        <h2 class="mt-2 text-xl ml-4">{scanResult[7] == "KZ" ? (scanResult[8]) : (scanResult[9])}</h2>
                      </div>
                    )}
                    {
                      scanResult[7] == "KZ" ? (
                        <div class="w-10/12 h-28 bg-white mt-3 rounded-xl">
                        <h3 class="ml-4 text-gray-400 mt-2 text-sm">К оплате</h3>
                        <input type="number" placeholder="0" onChange={handleAmount} className="ml-4 mt-2 h-8 input-number border-none bg-transparent p-0 text-2xl outline-none focus:border-transparent focus:outline-none sm:text-sm" />₸
                        <h3 class="ml-4 text-gray-400 mt-2 text-sm">Комиссия <span class="text-black font-bold">0</span> ₸</h3>
                      </div>
                      ): isHomeScaned ? (
                        <div class="w-10/12 h-28 bg-white mt-3 rounded-xl">
                          <h3 class="ml-4 text-gray-400 mt-2 text-sm">К оплате</h3>
                          <h1 class="ml-4 mt-2 text-3xl font-semibold">{format(homeScan[3])} <span class="text-xl text-gray-500 font-normal">₸</span></h1>
                          <h3 class="ml-4 text-gray-400 mt-2 text-sm">Комиссия <span class="text-black font-bold">0</span> ₸</h3>
                        </div>
                      ):(
                        <div class="w-10/12 h-28 bg-white mt-3 rounded-xl">
                          <h3 class="ml-4 text-gray-400 mt-2 text-sm">К оплате</h3>
                          <h1 class="ml-4 mt-2 text-3xl font-semibold">{format((parseInt(scanResult[7]) / 100).toString())} <span class="text-xl text-gray-500 font-normal">₸</span></h1>
                          <h3 class="ml-4 text-gray-400 mt-2 text-sm">Комиссия <span class="text-black font-bold">0</span> ₸</h3>
                        </div>
                      )
                    }
                    <div class="w-10/12 bg-white mt-3 h-64 rounded-xl overflow-y-auto overflow-x-hidden">
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
                      {window.localStorage.getItem("lunch_balance") != 0 ? (
                        <div className="method_item ml-4 mt-3 rounded-xl flex flex-row" id="special-wrapper" style={{backgroundColor: "#F4F6F8"}} onClick={chooseLunch}>
                          <div className="left-special ml-4">
                          </div>
                          <div className="right ml-4 mt-4">
                            <div className="balance text-xl font-semibold" id="special-balance-text" style={{color: "#000000"}}>{format(window.localStorage.getItem("lunch_balance"))} ₸</div>
                            <h2 className="font-medium" id="special-balance-desc" style={{color: "#67707C"}}>Пособие на обед</h2>
                          </div>
                        </div>
                        ) : null}
                      {
                        window.localStorage.getItem("coffee_balance")!= 0 ? (
                          <div className="method_item ml-4 mt-3 rounded-xl flex flex-row" id="coffee-wrapper" style={{backgroundColor: "#F4F6F8"}} onClick={chooseCoffee}>
                            <div className="left-special ml-4">
                            </div>
                            <div className="right ml-4 mt-4">
                              <div className="balance text-xl font-semibold" id="coffee-balance-text" style={{color: "#000000"}}>{format(window.localStorage.getItem("coffee_balance"))} ₸</div>
                              <h2 className="font-medium" id="coffee-balance-desc" style={{color: "#67707C"}}>Бонусы на кофе</h2>
                            </div>
                          </div>
                        ) : null
                      }
                      {
                        window.localStorage.getItem("travel_balance") != 0 ? (
                          <div className="method_item ml-4 mt-3 rounded-xl flex flex-row" id="travel-wrapper" style={{backgroundColor: "#F4F6F8"}} onClick={chooseTravel}>
                            <div className="left-special ml-4">
                            </div>
                            <div className="right ml-4 mt-4">
                              <div className="balance text-xl font-semibold" id="travel-balance-text" style={{color: "#000000"}}>{format(window.localStorage.getItem("travel_balance"))} ₸</div>
                              <h2 className="font-medium" id="travel-balance-desc" style={{color: "#67707C"}}>Оплата за проезд</h2>
                            </div>
                          </div>
                        ) : null
                      }
                      {
                        window.localStorage.getItem("ifdl_balance") != 0 ?(
                          <div className="method_item ml-4 mt-3 rounded-xl flex flex-row" id="ifdl-wrapper" style={{backgroundColor: "#F4F6F8"}} onClick={chooseIfdl}>
                            <div className="left-special ml-4">
                            </div>
                            <div className="right ml-4 mt-4">
                              <div className="balance text-xl font-semibold" id="ifdl-balance-text" style={{color: "#000000"}}>{format(window.localStorage.getItem("ifdl_balance"))} ₸</div>
                              <h2 className="font-medium" id="ifdl-balance-desc" style={{color: "#67707C"}}>Беспроцентный займ</h2>
                            </div>
                          </div>
                        ) : null
                      }
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