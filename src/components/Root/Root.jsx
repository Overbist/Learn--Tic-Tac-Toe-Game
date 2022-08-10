import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { Board } from '../Board/Board'
import { CreatorName } from '../CreatorName/CreatorName'

export function Root() {
  return (
    <>
      <section className="inner background">
        <Board />
      </section>
      <CreatorName />
      <ToastContainer />
    </>
  )
}
