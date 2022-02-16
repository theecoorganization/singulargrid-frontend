import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home = () => {
  const routes = useRouter();

  useEffect(() => {
    routes.push("/explore");
  },[]); 

  return null;
}

export default Home;
