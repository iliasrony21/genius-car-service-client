import React from 'react'
import Expert from '../Expert/Expert'
import './Experts.css'

import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'

const Experts = () => {
  const experts = [
    {
      id: 1,
      name: 'kabir singh',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: expert1
    },
    {
      id: 2,
      name: 'rakeesh khan',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: expert2
    },
    {
      id: 3,
      name: 'Rocky',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: expert3
    },
    {
      id: 4,
      name: 'Adheera',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: expert4
    },
    {
      id: 5,
      name: 'Garora',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: expert5
    },
    {
      id: 6,
      name: 'Gabbar',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: expert6
    }
  ]
  return (
    <div id='experts'>
      <h1 className='text-center text-primary m-5 '>Our Experts</h1>
      <div className='expert-container'>
        {experts.map(expert => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  )
}

export default Experts
