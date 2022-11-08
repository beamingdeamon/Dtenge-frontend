import { useParams, useSearchParams } from "react-router-dom";
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function GetSignatureRecieverQR() {
  const navigateTo = useNavigate();
  const params = useParams();
  useEffect( ()=>{
    goToMaingPage();
  },[]);
  const goToMaingPage = () =>{
    window.localStorage.removeItem("r_signature")
    window.localStorage.setItem("r_signature", params.signature)
    navigateTo('/show-qr');
  }
  return (
    <div>
    </div>
  )
}