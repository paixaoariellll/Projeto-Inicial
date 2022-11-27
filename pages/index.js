import Head from 'next/head'
import Image from 'next/image';
import styled from 'styled-components'
import fish from '../public/fish.png';
export default function Home() {
  return (
    <Container>
      <Head>
        <title>FlipDesk 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-1/2 flex flex-col items-center'>
        <Image src={fish} height={250} width={250} className="bg-transparent" />
        <h2 className='text-gray-600 text-4xl'>Mantenha-se conectado</h2>
        <p className='text-gray-400 text-xl'> Seja bem vindo ao FlipDesk!</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  height: 100%;
  width: 100%;
`;
