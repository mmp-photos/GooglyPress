const BuyButton = ( {bookID} ) => {

    const handleClick = () =>{
        console.log(bookID + 'From the button component')
        console.log(`Open link for ${bookID}`)
        window.open(`https://www.amazon.com/dp/${bookID}`)
    };

    return(
        <button className="buy" onClick={handleClick}>
        Buy Now!
        </button>
    )
}

export default BuyButton;