const AWS = require("aws-sdk");

// Set the region for AWS SDK
AWS.config.update({ region: "us-east-2" }); // Replace 'your-region' with your desired AWS region

// Create S3 service object
const s3 = new AWS.S3();

// Define the parameters for listing objects in the bucket
const bucketParams = {
  Bucket: "cmpe282", // Replace 'your-bucket-name' with your S3 bucket name
  MaxKeys: 10, // Optionally, specify the maximum number of objects to return
};

s3.listObjects(bucketParams, (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Objects in bucket:", data.Contents.length);
    data.Contents.forEach((obj) => console.log(obj.Key));
  }
});
