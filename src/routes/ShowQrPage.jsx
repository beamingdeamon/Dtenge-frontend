import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import qrCode from 'qrcode';

export default function ShowQrPage() {
  const navigateTo = useNavigate();
  const [qr_image, setQrImage] = useState("");
  useEffect(() => {
    generateQrCode()
}, [])
  const generateQrCode = ()=>{
    qrCode.toDataURL(window.localStorage.getItem('wallet') + "#" + "O=Eurasian Bank, L=Nur-Sultan, C=KZ" + "#" + window.localStorage.getItem('username') +"#" + window.localStorage.getItem('qr_amount') + "#" + window.localStorage.getItem("r_signature"), function (err, url) {
        setQrImage(url);
      console.log(url)
    })
    
  }
  const goBack = () => {
    navigateTo(-1);
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
  return (
    <div>
      <div className="h-screen bg-[#F4F6F8]">
        <div className="bg-[#333B47] p-4">
            <div>
                <a href="#" className="flex gap-5">
                    <i onClick={goBack} className="far fa-long-arrow-left text-2xl text-white"></i>
                  <div className="text-lg  font-medium text-white">Сканируйте Qr-код</div>
                </a>
            </div>
        </div>
        <div className="flex w-full items-center justify-center content-center">
          <div className="mt-5 bg-white w-10/12 h-100 rounded-xl">
            <div className="text-4xl font-semibold w-full text-center mt-5">
              {format(window.localStorage.getItem('qr_amount'))}<span className="text-2xl text-gray-400"> ₸</span>
            </div>
            <img src={qr_image} alt="" className="w-80 ml-3"/>
          </div>
        </div>
      </div>
    </div>
  )
}