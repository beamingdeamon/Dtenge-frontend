import { useParams, useSearchParams } from "react-router-dom";
import { useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

export const Transactions = () => {
  const navigateTo = useNavigate();
  const params = useParams();
  const [transactions, setTransactions] = useState([])
  const [clients, setClients] = useState([])
  const [dates, setDates] = useState([])
  const [first_date, setFirstDate] = useState("")

  useEffect(() => {
    setTimeout(getTransactions, 600);
    setTimeout(calcIndexOfDays, 800);
  }, [])

  const API_URL = "https://dtenge.eubank.kz:8000/api/"

  const getTransactions = () =>{
    axios.post(API_URL + "get-transactions/", { public_address: window.localStorage.getItem("wallet") }).then((res) => {
        window.localStorage.removeItem('transactions')
        window.localStorage.setItem('transactions', res.data.transaction_info)
        getClients(res.data.transaction_info)
        if(res.data.transaction_info[0]){
            setFirstDate(new Date(res.data.transaction_info[0].transaction_time))
            setDates([new Date(res.data.transaction_info[0].transaction_time)])
        }
    })
  }
  const getClients = (trans) =>{
    let new_array = []
    console.log(trans)
    for(let i = 0; i < trans.length; i++){
        let item = {
            "public_address": trans[i].public_address,
            "node_id": trans[i].node_id
        }
        new_array.push(item);
    }
    axios.post(API_URL + "get-transactions-clients/", { transactions_clients: new_array }).then((res) => {
        setClients(res.data.transactions_clients)
        let new_trans = []
        let username = "uknown"
        let phone = "uknown"
        for(let i = 0; i < trans.length; i++){
            for(let j = 0; j < res.data.transactions_clients.length; j++){
                if(trans[i].public_address == res.data.transactions_clients[j].public_address){
                    username = res.data.transactions_clients[j].short_name
                    phone = res.data.transactions_clients[j].phone
                }
            }
            let item = {
                "transaction_time": trans[i].transaction_time,
                "in_out": trans[i].in_out,
                "amount": trans[i].amount,
                "username" : username,
                "phone" : phone
            }
            new_trans.push(item);
        }
        
        setTransactions(new_trans)
    })
  }
  const calcIndexOfDays = () => {
    for (let i = 0; i < transactions.length; i++) {
        if(new Date(transactions[i].transaction_time).getDate() != new Date(first_date).getDate() || new Date(transactions[i].transaction_time).getMonth() != new Date(first_date).getMonth()){
            var new_arr = dates;
            setDates(new_arr.push(new Date(transactions[i].transaction_time)));
            setFirstDate(new Date(transactions[i].transaction_time));
            console.log("handler");
        }
        console.log("dadsad");
    } 
    console.log("dadsad");
  }
  function format_str(str) {
    const s = str.length;
    const chars = str.split('');
    const strWithSpaces = chars.reduceRight((acc, char, i) => {
        const spaceOrNothing = ((((s - i) % 3) === 0) ? ' ' : '');
        return (spaceOrNothing + char + acc);
    }, '');

    return ((strWithSpaces[0] === ' ') ? strWithSpaces.slice(1) : strWithSpaces);
}
  const options = { year: 'numeric', month: 'long', day: 'numeric'};

  console.log(first_date)
  console.log(dates)
  return (
    <div className="overflow-y-auto h-96">
        
    {dates.map((date, i) => {     
        return ( 
        
            <div className="rounded-xl bg-white p-4 mt-4">
                <div className="mb-5 text-base font-semibold text-gray-400">{new Date(date).toLocaleDateString("ru-RU", options)}</div>
                <div className="flex flex-col gap-5">
                    {transactions.map((transaction, i) => {     
                    return ( 
                        <div className="flex">
                            <div className="mr-3 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#51819C]">
                                <span className="text-white">{transaction.username[0]}</span>
                            </div>
                            
                            <div className="flex grow flex-col">
                                <div className="text-sm font-semibold">{transaction.username}</div>
                                <div className="mb-1 text-xs text-gray-400">{transaction.phone}</div>
                            </div>
                            <div>
                                <div className="flex flex-col items-end">
                                    <div className="text-end text-sm font-semibold text-gray-400">{transaction.in_out == "out" ? (<span>-</span>): (<span>+</span>)} {format_str((transaction.amount / 100).toString())}.00 ₸</div>
                                    <div className="mb-1 text-sm text-gray-400">{new Date(transaction.transaction_time).getHours()}:{new Date(transaction.transaction_time).getMinutes()}</div>
                                </div>
                            </div>
                        </div>
                         
                    )})
                    }
                    
                </div>
            </div>
            ) 
        })}
                    
    </div>
    
  )
}