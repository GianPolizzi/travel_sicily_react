import React, { useState } from 'react'
import MyContext from '../../../MyContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './scrollingImg.css'

function ScrollingImg() {
	const contesto = React.useContext(MyContext);
	const [indexCurrent, setIndexCurrent] = useState(0)
	const changeImg = (e) => {

		if (e.currentTarget.id === 'right') {
			if (indexCurrent === contesto.length - 1) {
				setIndexCurrent(0)
			} else {

				setIndexCurrent(indexCurrent + 1)
			}


		}
		if (e.currentTarget.id === 'left') {
			if (indexCurrent === 0) {
				setIndexCurrent(contesto.length - 1)
			} else {

				setIndexCurrent(indexCurrent - 1)
			}

		}

	}
	return (
		<>
			<div className="row w-100 mx-0 mt-1 mb-1">
				<div className="col-10 offset-1 p-0">
					<div className="img-scroller d-flex" style={{ backgroundImage: `url(${contesto[indexCurrent].image}` }}>
						<div id='left' className=" mr-auto my-auto " onClick={changeImg}>
							<FontAwesomeIcon className=" arrow" icon={faArrowLeft} />
						</div>

						<div id='right' onClick={changeImg} className="ml-auto my-auto ">
							<FontAwesomeIcon className=" arrow" icon={faArrowRight} />
						</div>
					</div>
				</div>

			</div>
			<div className="row w-100 m-0 nomobile">
				<div className="col-10 offset-1 riga-miniatures mb-1">
					{
						contesto.map((ele, i) => {
							return (<div key={i}>
								<img className={`miniatura ${((i === 0) && 'ml-0 ')} ${((indexCurrent === i) && 'border-selected')}`}
									onClick={() => setIndexCurrent(i)} src={ele.image} alt='img'></img>
							</div>)
						})
					}
				</div>
			</div>
		</>
	)
}

export default ScrollingImg
