import Image from 'next/image'
import Link from 'next/link'
import resume from '../assets/revamp.png'
import { saveAs } from 'file-saver'
import { ResumeSection, ResumeHeader } from '../styles/homeStyles'
import { MdArrowBackIos, MdDownload } from 'react-icons/md'

export default function Resume() {
  /*
  saveAs(
    "",
    "sample.txt"
  )
  
  */ 

  function handleDownloadClick() {
    console.log('download started');
    saveAs(
      "https://pdfhost.io/v/W~yuB61HO_Scuba_Diving_Gear",
      "sample.txt"
    )
  }

  return (
    <div style={{flexDirection: 'column'}}>
      <ResumeHeader>
        <Link href="/">
          <a>
            <MdArrowBackIos/>
          </a>
        </Link>
        <button onClick={handleDownloadClick}>
          <MdDownload/>
          <p>Get a copy</p>
        </button>
      </ResumeHeader>
      <ResumeSection>
        <Image src={resume} />
      </ResumeSection>
    </div>
  )
}