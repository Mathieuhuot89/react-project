import './WelcomeStyles.css';

function Welcome(props) {
  return (
    <>
    {/* Rendre les components dynamiques */}
    <div className={props.cName}>
        <img src={props.welcomeImg} alt='HerpImg'/>
        <div className='welcome-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
                {props.buttonText}
            </a>
        </div>
    
    </div>
    </>
  )
}

export default Welcome
