export default function Home() {
  return (
      <div className="bg-white grid h-screen place-items-center">
        <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <p className="block">Welcome to <span className="spotify-green">Spotify Top</span> !</p>
            <p className="block">Get your top artists and top tracks.</p>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200">
                Top tracks
              </button>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200">
                Top tracks
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}
