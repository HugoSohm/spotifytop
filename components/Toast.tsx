import { Toast as ReactToast } from 'react-hot-toast'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

type Props = {
  toast: ReactToast
  message: string
  dismiss: () => void
}

export const Toast = ({ toast, message, dismiss }: Props) => {
  return (
    <div
      className={`${
        toast.visible ? 'animate-enter' : 'animate-leave'
      } rounded-md bg-red-50 p-4`}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className={'h-5 w-5 text-red-400'}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className={'text-sm font-medium text-red-800'}>{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              onClick={dismiss}
              className={
                'inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-green-50'
              }
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toast
