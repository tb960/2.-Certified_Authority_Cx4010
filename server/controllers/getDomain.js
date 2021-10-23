const getDomain = async (req, res) => {
    try{
        const body = req.body;

        res.json("Hello World");
    }
    catch(err){
        console.error(err);
        res.status(404).json(err.message);
    }
}

module.exports = getDomain;