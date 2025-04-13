
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <Head>
        <title>GalacticBackslash</title>
        <meta name="description" content="Exploring exponential change" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">GalacticBackslash</h1>
        <p className="text-xl">Placeholder homepage — content coming soon.</p>
      </main>
    </div>
  )
}
