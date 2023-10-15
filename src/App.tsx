import { FC, useState } from 'react'
// eslint-disable-next-line import/no-unresolved
import reactlogo from '../assets/images/react.svg'
// eslint-disable-next-line import/no-unresolved
import '../assets/styles/app.css'
// eslint-disable-next-line import/no-unresolved
import '../assets/styles/app.scss'
import { HOST, APP_NAME } from '@Const/constants'

const App: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fullname, setFullname] = useState('Nguyen Thanh se - Test docker')
  console.log(fullname)
  return (
    <div className='main'>
      <img src={reactlogo} alt='ReactLogo' width={100} height={100} />
      <h1>{fullname}</h1>
      <h2>{HOST}</h2>
      <h2>{APP_NAME}</h2>
    </div>
  )
}

export default App
