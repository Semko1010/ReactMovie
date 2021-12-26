import { useParams } from "react-router-dom";
import DetailFetch from "../Deatail/DetailFetch"
import HomeRatedFetch from "../HomeRated/HomeRatedFetch"
const DetailId = () => {
    let {id} = useParams()
    console.log(id);
    return ( 
    <div>
<DetailFetch
id={id}
/>

    </div> );
}
 
export default DetailId;