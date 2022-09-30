import Card from '../../components/Card';
import {data} from '../../data/data';
const Home = (props) => {
    console.log(props)
    return(
        <div>
            <Card data = {props.data}/>

        </div>
    )
}

export default Home;

export async function getStaticProps(){
    return{ 
        props:{
            data
        },
        revalidate:1,
    }
}

