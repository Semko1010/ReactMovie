const Details = (props) => {
    
  
    return ( 
        
        <article className="detailsDiv">
            <img src={`https://image.tmdb.org/t/p/w200${props.img}`} alt="" />
            <div className="detailsDivChild">
            <h3>{props.title}</h3>
            <p>{props.overview}</p>
            <iframe className="iFrime" width="560" height="315" src={`https://www.youtube.com/embed/${props.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
            <p>{props.homepage}</p>
            
            </div>
        </article>
    );
}
 
export default Details;