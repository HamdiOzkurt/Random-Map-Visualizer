import { generateRandomCoordinate, generateRandomCoordinates } from "@hamdi_ozkurt/random-coordinate-generator";

export default (router) => {
    router.get("/map", async (req, res) => {
        const coordinates = generateRandomCoordinate();
        console.log(coordinates);
        res.render("map", { coordinates })

    })
    router.get('/maps', async (req, res) => {
        let count = 10;
        if (req.query.count) {
            count = parseInt(req.query.count);
        }
        const coordinates = generateRandomCoordinates(count);
        console.log(coordinates);
        res.render("maps", { coordinates });
    });
};