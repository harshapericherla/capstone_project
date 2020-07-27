const {getJobs, createJob, createUserJob, checkIfJobApplied, getUserAppliedJobs} = require('../resolvers/jobResolver');
const {getUserById} = require('../resolvers/userResolver');
const fs = require("fs");

exports.Job = `
    
    extend type Query
    {
        jobs(searchInput:JobInput): JobResult
        jobApplied(jobId: String!): JobAppliedResponse
        getAppliedJobs: JobResult
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
    }
`;

const writeFile = (readStream,user,filename,jobId) => {
    const writable = fs.createWriteStream(`files/${user._id}/${filename}`);
    readStream.pipe(writable);
    readStream.on("end", async function(){
        await userAppliedJob(`files/${user._id}/${filename}`,user,jobId);
        return {"success":true};
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
        getAppliedJobs: async (_,__,{user}) => {
            let userAppliedJobs = await getUserAppliedJobs(user._id);
            console.log(userAppliedJobs);
            return {};
        }
    },
    Mutation:{
        createJob: async(_,{createJobInput},{user}) => {
            await createJob(createJobInput,user);
            return {"success":true};
        },
        applyJob: async(_,{file,jobId},{user}) => {

            const { createReadStream, filename, mimetype, encoding } = await file;
            const readStream = createReadStream();
            fs.access(`files/${user._id}`, function(err) {
                if (err && err.code === 'ENOENT') {
                  fs.mkdir(`files/${user._id}`, function(){
                     writeFile(readStream,user,filename,jobId);
                  });
                }
                else
                {
                    writeFile(readStream,user,filename,jobId);
                }
            });
        }
    },
    Job : {
        posted_by: async({_postedBy},__) => {
            return await getUserById(_postedBy);
        }
    }
} 