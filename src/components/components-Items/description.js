const Description = (props) => {
    return(
        <div className="cardDescription">
            <h3 className="title">
                {props.title}
            </h3>
            <div className="description">
                <span className="descriptionTitle">Descripcion:</span>
                <p className="parrafo">
                    {props.parrafo}
                </p>

            </div>

            <span className="cant">
                cantidad: {props.stock}
            </span>

            <span className="precio">
                ${props.price}
            </span>

        </div>

    )

}

export default Description;