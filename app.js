const aws =  require("aws-sdk");
var config = {
    accessKeyId: "dalongapp",
    secretAccessKey: "dalongapp",
    endpoint: "localhost:9000",
    sslEnabled: false,
    s3ForcePathStyle: true
  };
aws.config.update(config);
s3 = new aws.S3();
s3.listBuckets((err,data)=>{
    
    if(err) {
        console.log("some error",err);
    }
    else {
        console.log(JSON.stringify(data))
    }
})

