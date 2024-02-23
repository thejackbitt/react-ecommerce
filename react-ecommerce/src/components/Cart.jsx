export default function Cart(props){


    function addToCart(e){
        e.preventDefault()
        props.setCart([...props.cart, props.newCart])
    }
    return(
        <>
        
        </>
    )
}