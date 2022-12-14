import "../style/c2c.sass"
import { useParams, useSearchParams } from "react-router-dom";
import { useRef, useState } from 'react';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function C2C() {
  const navigateTo = useNavigate();
  const [amount_req, setAmount] = useState(0);
  const [note_req, setNote] = useState("");

  const API_URL = "https://dtenge.eubank.kz:8000/api/"

  const handleAmount = (e) => {
    let value = e.target.value
    if(value) {
        setAmount(value);
        console.log(window.localStorage.getItem("signature"))
        window.localStorage.setItem('f_amount', value)
    }else{
        setAmount(0);
    }
};
const handleNote = (e) => {
    let value = e.target.value
    if(value) {
        setNote(value);
        window.localStorage.setItem('f_note', value)
    }else{
        setNote("");
    }
};
    const transfer = () =>{
        sendDataToKotlin()
        navigateTo('/succes-transfer')
    };
    const sendDataToKotlin = () =>{
        window.localStorage.setItem('r_amount', window.localStorage.getItem('f_amount'))
        window.localStorage.setItem('r_note', window.localStorage.getItem('f_note'))
        if(window.localStorage.getItem('is_anonymus') == "true"){
            console.log("anonym handler")
            window.JavaScriptMoth.getStealthAddress(window.localStorage.getItem("wallet"), window.localStorage.getItem("view"), window.localStorage.getItem("spend"), "O=Eurasian Bank, L=Nur-Sultan, C=KZ",window.localStorage.getItem("reciever-address"), window.localStorage.getItem("reciever-node"), amount_req * 100);
        }else{
            window.JavaScriptMoth.getData("showAndroidData", window.localStorage.getItem("wallet"), window.localStorage.getItem("view"), window.localStorage.getItem("spend"), "O=Eurasian Bank, L=Nur-Sultan, C=KZ",window.localStorage.getItem("reciever-address"), window.localStorage.getItem("reciever-node"), amount_req * 100);
        }
        };
    

  return (
    <div>
        <div className="h-screen bg-[#F4F6F8]">
        <div className="bg-[#333B47] p-4">
            <div>
            <a href="#" className="mb-5 flex gap-5">
                <i onClick={() => navigateTo(-1)} className="far fa-long-arrow-left text-2xl text-white"></i>
                <div className="text-base font-medium text-white">????????</div>
            </a>
            <div className="flex items-center">
                <div className="mr-3 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#51819C] text-white">A</div>
                <div>
                <div className="text-sm font-semibold text-white">{window.localStorage.getItem("reciever-name")}</div>
                <div className="text-xs text-gray-400">{window.localStorage.getItem("reciever-phone")}</div>
                </div>
            </div>
            </div>
        </div>
        <div className="flex flex-col justify-between p-4">
            <div className="mb-6">
            <div className="grid grid-cols-4 gap-2">
                <div className="col-span-1 flex flex-col items-center rounded-xl bg-white p-[14px]">
                <div className="mb-3 text-xs font-semibold">????????????</div>
                <div className="mb-3 card"></div>
                <i className="far fa-chevron-down"></i>
                </div>
                <div className="col-span-3 flex flex-col items-start rounded-xl bg-white p-[14px]">
                <div className="mb-3 text-xs">???????????? {window.localStorage.getItem("balance")} ???</div>
                    <div className="input-div">
                        <input type="number" placeholder="0" onChange={handleAmount} className="mb-3 h-8 input-number border-none bg-transparent p-0 text-4xl outline-none focus:border-transparent focus:outline-none sm:text-sm" />???
                    </div>
                    <div className="text-xs text-gray-400">???????????????? <span className="font-semibold">0</span> ???</div>
                </div>
                <label for="UserEmail" className="relative col-span-4 mb-3 block overflow-hidden rounded-md bg-white px-3 pt-3">
                <input type="text" id="UserEmail" onChange={handleNote} placeholder="???????????????? ??????????????????" className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent outline-none focus:border-transparent focus:placeholder-gray-300 focus:outline-none focus:ring-0 sm:text-sm" />
                <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all line-clamp-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">?????????????????? ????????????????????</span>
                </label>
            </div>
            <div className="text-sm text-gray-500">???????????????????? ?????????? ????????????</div>
            </div>
            <button type="button" onClick={transfer} className="mr-2 mb-2 w-full rounded-lg bg-[#29313A] px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">?????????????????? {amount_req} ???</button>
        </div>
        </div>

        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css" />

    </div>
  )
}