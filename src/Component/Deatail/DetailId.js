import { useParams } from "react-router-dom";
import DetailFetch from "../Deatail/DetailFetch"

const DetailId = () => {
    let {id} = useParams()
   
    return ( 
    <div>
<DetailFetch
id={id}
/>

    </div> );
}
 
export default DetailId;