import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

export default function QrCodePage() {
  const navigateTo = useNavigate();
  
  useEffect(() => {
    goNext()
}, [])
const goNext = () =>{
  navigateTo('/generate-qr')
}
  return (
    <div>
    </div>
  )
}