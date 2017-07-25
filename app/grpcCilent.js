var PROTO_FILE_PATH = "/Users/yinhao/WebstormProjects/node_grpc/proto/Student.proto";

var grpc = require("grpc");

var grpcService = grpc.load(PROTO_FILE_PATH).com.shengsiyuan.proto;

var client = new grpcService.StudentService("127.0.0.1:8899", grpc.credentials.createInsecure());

client.getRealNameByUsername({username:"lisi"},function (error,respData) {
    console.log(respData);
})