import { useParams, useSearchParams } from "react-router-dom";
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function GetSignature() {
  const navigateTo = useNavigate();
  const params = useParams();
  useEffect( ()=>{
    goToMaingPage();
  },[]);
  const goToMaingPage = () =>{
    window.localStorage.removeItem("signature")
    window.localStorage.setItem("signature", params.signature)
    navigateTo('/succesqr-transfer');
  }
  return (
    <div>
    </div>
  )
}