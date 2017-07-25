var PROTO_FILE_PATH = "/Users/yinhao/WebstormProjects/node_grpc/proto/Student.proto";

var grpc = require("grpc");

var grpcService = grpc.load(PROTO_FILE_PATH).com.shengsiyuan.proto;

var server = new grpc.Server();

server.addService(grpcService.StudentService.service,{
    getRealNameByUsername: getRealNameByUsername,
    getStudentByAge:getStudentByAge,
    getStudentWrapper:getStudentWrapper,
    BiTalk:BiTalk
})

server.bind("127.0.0.1:8899",grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUsername(call,callback) {
    console.log('call:' + call.request.username);
    callback(null,{realname:"张三node"})
}

function getStudentByAge() {

}

function getStudentWrapper() {

}

function BiTalk() {

}