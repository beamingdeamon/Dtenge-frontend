import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

export default function SuccesScanQR() {
  const navigateTo = useNavigate();
  const API_URL = "https://dtenge.eubank.kz:8000/api/"
  const [transferResponse, setTransferResponse] = useState({status : 201, message: null})
  const [isRequest, setIsRequest] = useState(true)
  useEffect(() => {
    transfer()
}, [])
    const transfer = () =>{
        axios.post(API_URL + "qr-transfer/", { 
            s_public_address: window.localStorage.getItem("wallet"), 
            s_node_id: "O=Eurasian Bank, L=Nur-Sultan, C=KZ",
            s_signature: window.localStorage.getItem("signature"),
            r_public_address: window.localStorage.getItem('r_public_address'),
            r_signature: window.localStorage.getItem('r_signature'),
            r_node_id: window.localStorage.getItem('r_node'),
            amount: window.localStorage.getItem('r_amount') * 100,
            type: window.localStorage.getItem('r_type'),
            note: "Qr Transaction"
          }).then((res) => {
                setTransferResponse(res)
                setIsRequest(false)
              const response = res.data
              console.log(res.status)
          }).catch(function (error) {
            setTransferResponse(error.response.data)
            setIsRequest(false)
            console.log(error.response.data)
          })
    }
  const goBack = () =>{
    navigateTo('/');
  }

  return (
    <div>
        <div className="h-screen bg-gray-800">
            {
                isRequest ? (
                    <div className="p-4">
                        <div className="mb-5 flex justify-end">
                        <a href="#">
                            <i className="far fa-times text-2xl text-gray-400" onClick={goBack}></i>
                        </a>
                        </div>
                        <div className="mb-8 text-center">
                            <i className="fas fa-spinner mb-6 text-[60px] text-yellow-500"></i>
                            <div className="mb-1 text-center text-2xl font-bold text-white">????????????????</div>
                        </div>
                        <div className="mb-10 rounded-xl bg-gray-700 p-4">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center">
                            <div className="flex grow items-center">
                                <div className="mr-3 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#51819C] text-white">{window.localStorage.getItem("reciever-name").charAt(0)}</div>
                                <div>
                                <div className="text-sm font-semibold text-white">{window.localStorage.getItem("reciever-name")}</div>
                                <div className="text-xs text-gray-400">?????????????????? ?? ??????????????????</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <label for="default-toggle" className="relative inline-flex cursor-pointer items-center">
                                <input type="checkbox" value="" id="default-toggle" className="peer sr-only" />
                                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                                </label>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="rounded-xl bg-gray-700 p-4">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center">
                            <div className="m-2 mr-3">
                                <i className="far fa-redo-alt text-gray-400"></i>
                            </div>
                            <div className="flex grow flex-col">
                                <div className="text-sm font-semibold text-white">?????????????????? ????????????</div>
                            </div>
                            <div className="flex flex-col items-end">
                                <i className="far fa-chevron-right text-gray-400"></i>
                            </div>
                            </div>
                            <div className="flex items-center">
                            <div className="m-2 mr-3">
                                <i className="fas fa-receipt text-gray-400"></i>
                            </div>
                            <div className="flex grow flex-col">
                                <div className="text-sm font-semibold text-white">?????????????????? ??????????????????</div>
                            </div>
                            <div className="flex flex-col items-end">
                                <i className="far fa-chevron-right text-gray-400"></i>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ) : transferResponse.status === 200 ? (
                    <div className="p-4">
                    <div className="mb-5 flex justify-end">
                    <a href="#">
                        <i className="far fa-times text-2xl text-gray-400" onClick={goBack}></i>
                    </a>
                    </div>
                    <div className="mb-8 text-center">
                    <i className="fas fa-check-circle mb-6 text-[60px] text-green-500"></i>
                    <div className="mb-1 text-center text-2xl font-bold text-white">QR ???????????????????? ??????????????????</div>
                    <div className="mb-3 text-center text-3xl font-bold text-white">{window.localStorage.getItem("r_amount")} ???</div>
                    <div className="flex items-center justify-center">
                        <div className="mr-2 h-4 w-6 rounded-md bg-fuchsia-800"></div>
                        <div className="text-gray-400">?????????????? <span className="font-semibold text-white">{window.localStorage.getItem("balance") - window.localStorage.getItem('r_amount')} ???</span></div>
                    </div>
                    <div className="mb-3 text-base text-gray-400"></div>
                    </div>
                    <div className="mb-10 rounded-xl bg-gray-700 p-4">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center">
                        <div className="flex grow items-center">
                            <div className="mr-3 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#51819C] text-white">{window.localStorage.getItem("reciever-name").charAt(0)}</div>
                            <div>
                            <div className="text-sm font-semibold text-white">{window.localStorage.getItem("reciever-name")}</div>
                            <div className="text-xs text-gray-400">?????????????????? ?? ??????????????????</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <label for="default-toggle" className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="default-toggle" className="peer sr-only" />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="rounded-xl bg-gray-700 p-4">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center">
                        <div className="m-2 mr-3">
                            <i className="far fa-redo-alt text-gray-400"></i>
                        </div>
                        <div className="flex grow flex-col">
                            <div className="text-sm font-semibold text-white">?????????????????? ????????????</div>
                        </div>
                        <div className="flex flex-col items-end">
                            <i className="far fa-chevron-right text-gray-400"></i>
                        </div>
                        </div>
                        <div className="flex items-center">
                        <div className="m-2 mr-3">
                            <i className="fas fa-receipt text-gray-400"></i>
                        </div>
                        <div className="flex grow flex-col">
                            <div className="text-sm font-semibold text-white">?????????????????? ??????????????????</div>
                        </div>
                        <div className="flex flex-col items-end">
                            <i className="far fa-chevron-right text-gray-400"></i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                ) : (
                    <div className="p-4">
                        <div className="mb-5 flex justify-end">
                            <a href="#">
                                <i className="far fa-times text-2xl text-gray-400" onClick={goBack}></i>
                            </a>
                        </div>
                        <div className="mb-8 text-center">
                            <i className="fas fa-times-circle mb-6 text-[60px] text-red-500"></i>
                            <div className="mb-1 text-center text-2xl font-bold text-white">QR ???????????????????? ???? ??????????????????</div>
                            <div className="mb-3 text-center text-lg text-white">
                                {transferResponse.message}
                            </div>
                        </div>
                    </div>
                )
            }
            

            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css" />
            </div>

    </div>
  )
}