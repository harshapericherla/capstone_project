const mongoose = require('mongoose');
const Job = mongoose.model('Job');

exports.getJobs = async () => {
    let jobs;
    let errorObj;
    try{
        jobs = await Job.find({}); 
    }
    catch(error){
        errorObj = error;
    }
    return jobs;
}

exports.searchJobs = async (searchText) => {
    let jobs;
    let searchArr = searchText.split(" ");
    try
    {
        jobs = await this.getJobs();
        jobs = jobs.filter( (job) => {
             return checkIfMatches(searchArr,"name",job) || 
                    checkIfMatches(searchArr,"companyName",job);
        });
    }catch(error)
    {
        console.log(error);
    }
    return jobs;
}

const checkIfMatches = (arr,targetProp,srcObj) => {

    for(let txt of arr)
    {
        let propValue = srcObj[targetProp].toLowerCase();
        let searchTxt = txt.toLowerCase();
        if(propValue.includes(searchTxt) || searchTxt.includes(propValue))
        {
            return true;
        }
    }
    return false;
}