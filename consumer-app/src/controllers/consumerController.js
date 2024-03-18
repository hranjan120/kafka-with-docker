/*
*------------------------------
*/
export const sampleRoute = async (req, res, next) => {
    try {
        res.status(200).json({
            statusText: 'OK',
            statusValue: 200,
            message: 'Sample route executed successfully 😐',
            payload: {},
        });
    } catch (error) {
        next();
    }
};
