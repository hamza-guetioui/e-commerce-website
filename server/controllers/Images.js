




function show (req, res){
    const imageSrc = req.query.imageSrc
    const imagePath = path.resolve('public/images', imageSrc)
    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        res.status(404).send("Image not found");
    }
}

modul.exports = {
    show
}