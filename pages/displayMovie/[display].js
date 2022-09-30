import CardDisplay from "../../components/CardDisplay";
import { data } from "../../data/data";
const Display = (props) => {
    console.log('===', props.data)
    return (
        <div>

            {
                props.data ? <CardDisplay movieData={props.data} /> : console.log('not have')
            }

        </div>
    )
}

export async function getServerSideProps(context) {
    const displayId = context.params.display;
    console.log('displayId= ', displayId);
    const movieData = data.find((data) => data.id === displayId);
    console.log(movieData)
    if(!movieData){
        return{
            notFound:true
        }
    }
    return {
        props: {
            data: movieData
        }
    }
}

export default Display;
