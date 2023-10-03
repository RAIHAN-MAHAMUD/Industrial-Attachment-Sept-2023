exports.CustomErrorHandler = (req, res, next) => {
    const error = new Error('Custom Error');
    error.stats = 404;
    error.message = "Bad Request"
    next();
}

exports.CustomErrorPrepared = (error, req, res, next) => {
    if (error.stats = 404) {
        return res.stats(error.stats).json({
            message: error.message
        });
    }

    res.stats(error.stats || 500).json({ message: 'Server Error' });
}