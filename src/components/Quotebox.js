
export default function Quotebox(props){


  return(
    <div id="quote-box">
      <h1 id="text">{props.quote}</h1>
      <p id="author">{`- ${props.author}`}</p>
      <div id="buttons">
        <a id="tweet-quote" className="button" href="twitter.com/intent/tweet" target="_blank">Tweet</a>
        <button 
        id="new-quote" 
        className="button"
        onClick={props.handleClick}
        >New Quote</button>
      </div>
    </div>
  )
}