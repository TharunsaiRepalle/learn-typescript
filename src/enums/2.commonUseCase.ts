/*
const app = express();
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

//200,401,411, 500
app.get("/",(req,res) => {
    if(!req.query.userId) {
        res.status(ResponseStatus.Error).json({})
    }

    //and soon
    res.status(ResponseStatus.Success).json({})
})
*/
