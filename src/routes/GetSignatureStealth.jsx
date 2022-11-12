import { useParams, useSearchParams } from "react-router-dom";
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function GetSignatureStealth() {
  const navigateTo = useNavigate();
  const params = useParams();
  useEffect( ()=>{
    goToMaingPage();
  },[]);
  const goToMaingPage = () =>{
    window.localStorage.removeItem("stealth_signature")
    let array = []
    console.log(params.signature)
    array =  params.signature.split(',')
    window.localStorage.setItem("stealth_address", array[0])
    window.localStorage.setItem("stealth_signature", array[1])
    console.log(params.signature.split(','))
    navigateTo('/succes-transfer-anonym');
  }
  return (
    <div>
    </div>
  )
}