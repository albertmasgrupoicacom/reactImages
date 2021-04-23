export const getGifs  = async (category) => {
    const url = `https://pixabay.com/api/?q=${ encodeURI(category)}&orientation=horizontal&image_type=photo&key=21285167-5f8b0f52eea43802cc54a6737`;
    const resp = await fetch(url);
    const {hits} = await resp.json();

   

    const gifs = hits.slice(0,19).map( img => {
        return {
            id: img.id,
            title: img.tags,
            url: img.webformatURL
        }
    })

    return gifs;
}