import "../style/main_transfer_page.sass"
import { useNavigate } from "react-router-dom"
import { InputPhone } from '../components';
import React, {useState,useEffect} from 'react';

export default function TransferView() {
    const navigateTo = useNavigate()
    const goBack = (e) => {
        navigateTo(-1)
    }
    useEffect( ()=>{
        deleteChooseBank();
      },[]);
    const deleteChooseBank = () =>{
       window.localStorage.removeItem("choosed_bank");
      }
    return (
        <div className="h-screen bg-[#F4F6F8]">
            <div className="bg-[#333B47] p-4">
                <div>
                <a href="#" className=" flex gap-5">
                    <i onClick={goBack} className="far fa-long-arrow-left text-2xl text-white"></i>
                    <div className="text-base font-medium text-white">Назад</div>
                </a>
                </div>
            </div>
            <div className="p-4">
                {/* NAV */}
            
                {/* INPUT */}
                <div class="mb-6">
                    <div className="mb-3 text-2xl font-bold">По номеру телефона</div>
                        <InputPhone />
                </div>
            </div>
        </div>
    )
}
