import { useLoaderData } from 'react-router-dom'

function Home() {
  const inititalData: any = useLoaderData()
  console.log(inititalData)

  return <div style={{ height: '150vh' }}>Home</div>
}

export default Home
