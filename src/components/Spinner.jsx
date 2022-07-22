import { RefreshIcon } from '@heroicons/react/outline'

const Spinner = () => {
  return (
    <div className="max-w-6xl mx-auto px-3 mb-3">
      <div className="flex justify-center items-center">
        <RefreshIcon className="animate-spin h-5 w-5 mr-3" />
      </div>
    </div>
  )
}

export default Spinner
