import toast, { Toaster } from 'react-hot-toast'
import Toast from '../components/Toast'
import { GetServerSidePropsContext } from 'next'
import { useRef, useState } from 'react'
import { Modal } from '../components/Modal'
import { LoginWithSpotify } from '../components/LoginWithSpotify'
import { TopButtons } from '../components/TopButtons'
import { TopType } from '../lib/topTypes'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const jwt = context.req.cookies.spotifytop_jwt

  return {
    props: {
      jwt: jwt ? jwt : null,
    },
  }
}

export default function Home(props: { jwt: string }) {
  const [pictureUrl, setPictureUrl] = useState<string>(
    null as unknown as string
  )
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  const fetchData = async (topType: TopType) => {
    if (!props.jwt) {
      toast.custom((tst) =>
        Toast({
          toast: tst,
          message: 'Please login to Spotify',
          dismiss: () => toast.remove(tst.id),
        })
      )
      return
    }

    try {
      const res = await fetch(
        `http://localhost:8080/top/${topType}?access_token=${props.jwt}`
      )
      setPictureUrl(res.url)
      setOpen(true)
    } catch (e) {
      toast.custom((tst) =>
        Toast({
          toast: tst,
          message: 'Error fetching data, try to reconnect to Spotify',
          dismiss: () => toast.remove(tst.id),
        })
      )
    }
  }

  return (
    <div className="bg-white grid h-screen place-items-center">
      <Toaster position="top-right" />
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <p className="block">
            Welcome to <span className="spotify-green">Spotify Top</span> !
          </p>
          <p className="block">Get your top artists and top tracks.</p>
        </h2>
        {props.jwt ? (
          <TopButtons fetchData={fetchData} />
        ) : (
          <LoginWithSpotify />
        )}
        <Modal
          cancelButtonRef={cancelButtonRef}
          pictureUrl={pictureUrl}
          setOpen={setOpen}
          show={open}
        ></Modal>
      </div>
    </div>
  )
}
