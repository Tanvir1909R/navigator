import './footer.scss'

const Footer = () => {
  return (
    <div className="container">
        <div className="footer_wrapper">
            <div>
                <img src="./logo.png" alt="logo" />
            </div>
            <div>
                <h3>Um okkur</h3>
                <p>info@alphaonline.is</p>
                <p>Alpha Agency ehf.</p>
            </div>
            <div>
                <h3>Skemmtilegir linkar</h3>
                <p>Hafa samband</p>
                <p>Skilmálar</p>
            </div>
            <div>
                <h3>Skráðu þig á póstlistann!</h3>
                <div className='footer_input'>
                    <input type="email" placeholder='Netfang' />
                    <button>Skrá mig!</button>
                </div>
                <p>Ég lofa að spamma þig ekki 😅</p>
            </div>
        </div>
    </div>
  )
}

export default Footer