import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setimages] = useState([])
    const {data: images ,loading} = useFetchGifs( category );

    // useEffect( () => {
    //     getGifs(category)
    //         .then( imgs => setimages(imgs))
    //         // .then(setimages)
    // },[ category ])


    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading...</p>}
        {/* { loading ? 'Carregant...':'Ok.Carregat'} */}
        <div className="card-grid">
            {
                images.map( (img) => (
                    <GifGridItem 
                        key = {img.id}
                        {...img} />
                ))
            }
        </div>
        </>
    )
}
