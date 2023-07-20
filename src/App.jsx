
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faTumblrSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import './App.scss'
import { Quotes } from './data/quotes'

function App() {
  
  const [actualQuote, setActualQuote] = useState( () => {
    let random = Math.floor(Math.random() * 102)
    return Quotes[random]
  })

  const [color, setColor] = useState("#747474")

  const getNewQuote = () => {
    let random = Math.floor(Math.random() * 102)
    useGenerateRandomColor();
    setActualQuote( Quotes[random] )
  }

  const useGenerateRandomColor = () => {
        setColor("#" + Math.floor(Math.random()*16777215).toString(16));
        console.log(color)
};

  return (
    <>
    <div className="index" style={{backgroundColor: color}}>
     <div id="quote-box" >
        
        <div id="text-box" style={{color: color}}>
          <span id="text">
            <FontAwesomeIcon className='quote-icon' icon={faQuoteLeft} />
            {actualQuote.quote}
          </span>
        </div>

        <div id="author-box" style={{color: color}}>
          <span id="author">- {actualQuote.author}</span>
        </div>
        
        <div id="buttons">
          <div className="links">
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${actualQuote.quote}`} target='_blank' style={{color: color}}>
          <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
          <a href='https://tumbler.com' target='_blank' style={{color: color}}>
              <FontAwesomeIcon icon={faTumblrSquare} />  
          </a>
          </div>
          <button id='new-quote' onClick={getNewQuote} style={{backgroundColor: color}}>New Quote</button>
        </div>
     </div>
     </div>
    </>
  )
}

export default App
