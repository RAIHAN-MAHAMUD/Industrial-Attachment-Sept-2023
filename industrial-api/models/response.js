exports.responseModel = (res, data, messge) => {
    res.status(data ? 200 : 500).json({
        IsSuccess: data ? true : false,
        StatusCode: data ? 200 : 500,
        TotalCount: data?.length,
        ErrorMessage: messge || null,
        Data: data
    });
}