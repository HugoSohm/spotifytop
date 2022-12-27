import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

export const LoginWithSpotify = () => {
  return (
    <div className="mt-8 flex justify-center">
      <div className="inline-flex rounded-full shadow">
        <a href="http://localhost:8080/login">
          <button className="inline-flex items-center justify-center rounded-full border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200">
            Login with Spotify
            <ArrowTopRightOnSquareIcon
              className="ml-3 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </a>
      </div>
    </div>
  )
}
