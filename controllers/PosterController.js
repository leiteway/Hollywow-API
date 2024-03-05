import Poster from "../models/PosterModel.js"


export const getAllPosters = async (request, response) => {
   
    try {
    const posters = await Poster.findAll()
    response.status(200).json(posters);
}
catch(error){
    response.json({message: error.message})
}

}