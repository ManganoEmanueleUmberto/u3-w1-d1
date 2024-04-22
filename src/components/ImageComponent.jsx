const ImageComponent = (props)=>{
    return(

        <>
            <img src={props.src} alt={props.alt} class="img-resize" />
            <p>{props.description}</p>
        </>
    )

} 

export default ImageComponent;