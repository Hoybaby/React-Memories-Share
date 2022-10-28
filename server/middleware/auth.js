import jwt from 'jsonwebtoken';

//next is do something and do the next thing
const auth = async (req,res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];

        const isCustomAuth = token.length <500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.SECRET);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }
    } catch (error) {
        console.log(error);
    }
}