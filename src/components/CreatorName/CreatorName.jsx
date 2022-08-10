import { BsHeartFill } from 'react-icons/bs'

import './CreatorName.scss'

export function CreatorName() {
  return (
    <div className="creatorName">
      Created with{' '}
      <BsHeartFill className="creatorName__icon" size={14} color="#ff0000" /> by
      Ihor K.
    </div>
  )
}
