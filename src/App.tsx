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
  const [fullname, setFullname] = useState('Thanh se')
  console.log(fullname)
  return (
    <div>
      <img src={reactlogo} alt='ReactLogo' width={100} height={100} />
      <h1>{fullname}</h1>
      <h2>Bài viết được viết tại blog {HOST}</h2>
      <h2>Tên App {APP_NAME}</h2>
    </div>
  )
}

export default App