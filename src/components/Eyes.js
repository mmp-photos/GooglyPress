import purpleLogo from '../assets/images/purple_logo.jpg';

const Eyes = () => {
    return(
        <div className="face" style={{backgroundColor: "green", backgroundImage: `url(${purpleLogo})`}}>
        <div className="eyes">
            <div className="eye"></div>
            <div className="eye"></div>
        </div>
        </div>
    )
};

export default Eyes;