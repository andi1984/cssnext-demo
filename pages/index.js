import Head from 'next/head';
import CSSModuleRendering from '../components/CSSModulesRendering';
import StyledComponent from '../components/StyledRendering';
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
        <CSSModuleRendering />
        <StyledComponent />
      </main>      
    </div>
  )
}
