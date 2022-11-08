import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Home from "./routes/Home"
import "./tailwind.css"
import GetUserData from "./routes/GetUserData"
import GetSignature from "./routes/GetSignature"
import TransferView from "./routes/TransferView"
import C2C from "./routes/C2C"
import QrCodePage from "./routes/QrCodePage"
import SuccessfullTransfer from "./routes/SuccessfullTransfer"
import ShowQrPage from "./routes/ShowQrPage"
import GenerateQrCode from "./routes/GenerateQrCode"
import ScanQr from "./routes/ScanQr"
import SuccesScanQR from "./routes/SuccesScanQR"
import GetSignatureQR from "./routes/GetSignatureQR"
import GetSignatureRecieverQR from "./routes/GetSignatureRecieverQR"

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="" element={<Home />} />
                <Route path="from-kotlin/:phone_number" element={<GetUserData />}></Route>
                <Route path="get-signature/:signature" element={<GetSignature />}></Route>
                <Route path="get-signature-qr/:signature" element={<GetSignatureQR />}></Route>
                <Route path="get-signature-reciever-qr/:signature" element={<GetSignatureRecieverQR />}></Route>
                <Route path="transfer" element={<TransferView />}></Route>
                <Route path="c2c" element={<C2C />}></Route>
                <Route path="succes-transfer" element={<SuccessfullTransfer />}></Route>
                <Route path="succesqr-transfer" element={<SuccesScanQR />}></Route>
                <Route path="qr-transfer" element={<QrCodePage />}></Route>
                <Route path="show-qr" element={<ShowQrPage />}></Route>
                <Route path="generate-qr" element={<GenerateQrCode />}></Route>
                <Route path="scan-qr" element={<ScanQr />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
