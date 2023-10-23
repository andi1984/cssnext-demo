import Head from 'next/head';
import TailwindRendering from '../components/TailwindRendering';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TailwindRendering />
      </main>      
    </div>
  )
}
