import { TopType } from '../lib/topTypes'

type Props = {
  fetchData: (topType: TopType) => void
}

export const TopButtons = ({ fetchData }: Props) => {
  return (
    <div className="mt-8 flex justify-center">
      <div className="inline-flex rounded-md shadow">
        <button
          onClick={() => fetchData(TopType.Artists)}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200"
        >
          Top artists
        </button>
      </div>
      <div className="ml-3 inline-flex rounded-md shadow">
        <button
          onClick={() => fetchData(TopType.Tracks)}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200"
        >
          Top tracks
        </button>
      </div>
    </div>
  )
}
