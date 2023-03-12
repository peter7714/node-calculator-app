const express = require('express');
const app = express();
const HandleError = require('./handleError');
const {stringsToNumArr, mean, findMedian, mode} = require('./helpers');


app.get('/mean', (req, res, next) => {
    if(!req.query.nums){
        throw new HandleError('Pass in a query of nums separated by a comma', 400);
    }

    let numsToStrings = req.query.nums.split(',');
    let numsArr = stringsToNumArr(numsToStrings);
    if (numsArr instanceof Error){
        throw new HandleError(nums.message);
    }

    let result = {
        operation: 'mean',
        result: mean(numsArr)
    }
    return res.send(result);
});

app.get('/median', (req, res, next) => {
    if(!req.query.nums){
        throw new HandleError('Pass in a query of nums separated by a comma', 400);
    }

    let numsToStrings = req.query.nums.split(',');
    let numsArr = stringsToNumArr(numsToStrings);
    console.log(numsArr);

    if (numsArr instanceof Error){
        throw new HandleError(nums.message);
    }

    let result = {
        operation: 'median',
        result: findMedian(numsArr)
    }
    console.log(findMedian(numsArr));
    return res.send(result);

});

app.get('/mode', (req, res, next) => {
    if(!req.query.nums){
        throw new HandleError('Pass in a query of nums separated by a comma', 400);
    }

    let numsToStrings = req.query.nums.split(',');
    let numsArr = stringsToNumArr(numsToStrings);

    if (numsArr instanceof Error){
        throw new HandleError(nums.message);
    }

    let result = {
        operation: 'mode',
        result: mode(numsArr)
    }
    return res.send(result);

});

app.use((req, res, next) =>{
    const err = new HandleError('Not Found', 404);
    return next(err);
});

app.use((err, req, res, next) =>{
    res.status(err.status || 500);
    return res.json({
        error: err,
        message: err.msg
    });
});

app.listen(3000, () => {
    console.log('App on port 3000');
});
