import Image from 'next/image'
import Link from 'next/link'
import resume from '../assets/revamp.png'
import { ResumeSection, ResumeHeader } from '../styles/homeStyles'
import { MdArrowBackIos, MdDownload } from 'react-icons/md'

export default function Resume() {
  return (
    <div style={{flexDirection: 'column'}}>
      <ResumeHeader>
        <Link href="/">
          <a>
            <MdArrowBackIos/>
          </a>
        </Link>
        <button type='button'>
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