import myphoto from '../images/myphoto.png'

const Body = () => {

    const randomtext = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam laboriosam fugiat perspiciatis aliquid omnis fuga cupiditate impedit voluptatum sit? Consequuntur possimus commodi minus officia beatae nihil aperiam rerum, sunt excepturi';


    return (
        <center>
            <div className="bodyContainer">
                <img className='myphoto' src={myphoto}/>
                <div className='titlename'>HI, IM <strong>JULIAN</strong></div>
                <div className='titleprogram'>BS Computer Engineering</div>
                <div className='biotext'>{randomtext}</div>
                <button className='resumeBtn'><strong>RESUME</strong></button>
            </div>
        </center>
    )
}

export default Body;