import Head from 'next/head'
import Main from '../components/main'
import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function Home(props) {

  const {JAMIEPCRIG, BERTSPC, PROJECTC, data} = props
  console.log(data);

  useEffect(() => {
    setMinerHardwareStatus()
  }, [])

  const setMinerHardwareStatus = () => {
    const onlineHardwareData = []
    const offlineHardwareData = []
    if (PROJECTC.info.status == 'online'){
      onlineHardwareData.push(...PROJECTC.hardware)
    }else {
      offlineHardwareData.push({PROJECTC : 'offline', ...PROJECTC.info})
    }
    if (BERTSPC.info.status === 'online'){
      onlineHardwareData.push(...BERTSPC.hardware)
    }else {
      offlineHardwareData.push({BERTSPC : 'offline', ...BERTSPC.info})
    }
    if (JAMIEPCRIG.info.status === 'online'){
      onlineHardwareData.push(...JAMIEPCRIG.hardware)
    }else {
      offlineHardwareData.push({JAMIEPCRIG : 'offline', ...JAMIEPCRIG.info})
    }
  
    return {online: onlineHardwareData, offline: offlineHardwareData}
  }


  return (
    <div>
      <Head>
        <title>Project C</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main data={data} hardware={setMinerHardwareStatus()}/>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(`https://api.minerstat.com/v2/stats/vegl2iu7ov3b`)
  const { PROJECTC } = res.data
  const { BERTSPC } = res.data
  const { JAMIEPCRIG } = res.data
  const data = res.data


  // const hardwareData = [...PROJECTC.hardware, ...BERTSPC.hardware, ...JAMIEPCRIG.hardware]
  



  // Pass data to the page via props
  return { props: {JAMIEPCRIG, BERTSPC, PROJECTC, data} }
}
