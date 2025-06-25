import { useEffect, useState } from 'react'
import './App.css'
import LoadingPage from './loadingPage'

const PROD_BASE_URL = 'http://expense-tracking-application.onrender.com'
// const DEV_BASE_URL = 'http://localhost:8000'
async function checkStatus(setReady: (ready:boolean)=>void) {
  try {
    const response = await fetch(`${PROD_BASE_URL}/api/status`);
    const data = await response.json();
    if(data.status == 'ok'){
      setReady(true);
    }

  } catch (error) {
    console.error('Error fetching status:', error);
    return null;
  }
}

function loadPage(){
  window.location.href = PROD_BASE_URL;
  return <></>
}

function App() {
  const [ready, setReady] = useState(false);
  useEffect(()=>{
    checkStatus(setReady);
  },
   [])

  return (
    <>
    <LoadingPage></LoadingPage>
    {ready && loadPage()}
    </>
  )
}

export default App
