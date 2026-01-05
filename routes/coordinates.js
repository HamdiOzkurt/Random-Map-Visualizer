import { generateRandomCoordinate, generateRandomCoordinates } from "@hamdi_ozkurt/random-coordinate-generator";


export default (router) => {
    router.get('/coordinates', async (req, res) => {
        if (req.query.count) {
            res.json(generateRandomCoordinates(parseInt(req.query.count)));
        }
        else {
            res.json(generateRandomCoordinate());
        }
    })
}

