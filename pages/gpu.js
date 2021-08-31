import Head from 'next/head'
import axios from 'axios'
import react, {useState, useEffect} from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  SpeakerphoneIcon, 
  XIcon,
} from '@heroicons/react/outline'
import GPUContent from '../components/gpuContent'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function GPU(props) {
const {JAMIEPCRIG, BERTSPC, PROJECTC, data} = props

    
  return (
    <div className=" items-center justify-center min-h-screen py-2">

    <GPUContent rig={data}/>
    {/* <GPUContent rig={BERTSPC}/>
    <GPUContent rig={JAMIEPCRIG}/> */}

    </div>

  )
}

export async function getServerSideProps() {
  const res = await axios.get(`https://api.minerstat.com/v2/stats/vegl2iu7ov3b`)
  const { PROJECTC } = res.data
  const { BERTSPC } = res.data
  const { JAMIEPCRIG } = res.data
  const data = res.data


  // Pass data to the page via props
  return { props: {JAMIEPCRIG, BERTSPC, PROJECTC, data} }
}

