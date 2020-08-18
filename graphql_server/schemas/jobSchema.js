const {getJobs, createJob, createUserJob, checkIfJobApplied, getUserAppliedJobs, getJobById, getUserPostedJobs, getPostedJobUsers} = require('../resolvers/jobResolver');
const {getUserById} = require('../resolvers/userResolver');
const fs = require("fs");
const path = require("path");

exports.Job = `
    
    extend type Query
    {
        jobs(searchInput:JobInput): JobResult
        jobApplied(jobId: String!): JobAppliedResponse
        appliedJobs: JobApplyResult
        jobsPosted: JobResult
        postedJobsUsers(jobId: String!): PostedJobUsersResult
    }

    extend type Mutation
    {
        createJob(createJobInput: CreateJobInput): JobMutationResponse
        applyJob(file: Upload!, jobId: String!):JobMutationResponse
    } 


    input CreateJobInput
    {
        name: String
        location:String
        type:String
        description:String
        companyName:String
        roles:String
        responsibilities:String
    }

    input JobInput
    {
        pageNum:Int
        pageLimit:Int
        searchTxt: String
        searchLocation: String
    }

    type JobMutationResponse
    {
        success: Boolean
    }

    type JobAppliedResponse
    {
        isApplied: Boolean
    }

    type JobResult
    {
        jobs: [Job]!
        pages: Int
    }

    type JobApplyResult
    {
        jobs: [ApplyJob]!
    }


    type PostedJobUsersResult
    {
        users: [PostedJobUser]
    }

    type PostedJobUser
    {
        userID: String
        user: User
        resumeLink: String
    }

    type PostedJob
    {
        _id: ID!
        jobID: String
        job: Job
    }

    type ApplyJob
    {
        _id: ID!
        userID: String
        jobID: String
        resumeLink: String
        job: Job
        appliedDate:String
    }

    type Job
    {
        _id: ID!
        name: String
        posted_by: User
        location:String
        type:String
        description:String
        companyName:String
        roles:[String]
        responsibilities:[String]
        postedDate:String
    }
`;

const getDir = () => {
    let pathName = "files";
    return pathName;
}

const writeFile = (readStream,user,filename,jobId) => {
    const writable = fs.createWriteStream(`${getDir()}/${user._id}/${filename}`);
    readStream.pipe(writable);
    readStream.on("end", async function(){
        await userAppliedJob(`${getDir()}/${user._id}/${filename}`,user,jobId);
    });
}

const userAppliedJob = async (dir,user,jobId) => {
    await createUserJob(dir,user._id,jobId);
}

exports.JobResolver = {
    Query:{
        jobs: async (_,{searchInput},{user}) => { 
            let {pageNum,pageLimit,searchTxt,searchLocation} = searchInput;
            return await getJobs(pageNum,pageLimit,searchTxt,searchLocation);
        },
        jobApplied: async (_,{jobId},{user}) => {
            let userJobArr = await checkIfJobApplied(user._id,jobId);
            if(userJobArr && userJobArr.length > 0) return {isApplied:true};
            else return {isApplied:false};
        },
        appliedJobs: async (_,__,{user}) => {
            let userAppliedJobs = await getUserAppliedJobs(user._id);
            let userJobs = {jobs:userAppliedJobs};
            return userJobs;
        },
        jobsPosted : async (_,__,{user}) => {
            let postedJobs = await getUserPostedJobs(user._id);
            let jobs = {jobs:postedJobs};
            console.log(jobs);
            return jobs;
        },
        postedJobsUsers: async (_,{jobId},{user}) => {
            let postedJobUsers = await getPostedJobUsers(jobId);
            return {users:postedJobUsers};
        }
    },
    Mutation:{
        createJob: async(_,{createJobInput},{user}) => {
            await createJob(createJobInput,user);
            return {"success":true};
        },
        applyJob: async(_,{file,jobId},{user}) => {
            try
            {
                if(user && user._id)
                {
                    const { createReadStream, filename, mimetype, encoding } = await file;
                    const readStream = createReadStream();
                    fs.access(`${getDir()}/${user._id}`, function(err) {
                        if (err && err.code === 'ENOENT') {
                          fs.mkdir(`${getDir()}/${user._id}`, function(){
                             writeFile(readStream,user,filename,jobId);
                          });
                        }
                        else
                        {
                            writeFile(readStream,user,filename,jobId);
                        }
                    });
                }
            }
            catch(error)
            {
                console.log(error);
            }
            return {"success":false};
        }
    },
    Job : {
        posted_by: async({_postedBy},__) => {
            return await getUserById(_postedBy);
        }
    },
    ApplyJob: {
        job : async({jobID}) => {
            return await getJobById(jobID);
        }
    },
    PostedJobUser: {
        user: async({userID}) => {
            return await getUserById(userID);
        }
    }
} 