// 静态生成桩代码服务端示例 可以右键执行，也可以在命令行使用 node grpcServer.js执行
var service = require("./Student_grpc_pb");
var messages = require("./Student_pb");
var grpc = require("grpc");
var server = new grpc.Server();

server.addService(service.StudentServiceService,{
    getRealNameByUsername: getRealNameByUsername,
    getStudentByAge:getStudentByAge,
    getStudentWrapper:getStudentWrapper,
    biTalk:biTalk
})

server.bind("127.0.0.1:8899",grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUsername(call,callback) {
    console.log('call:' + call.request.getUsername());
    var myResponse = new messages.MyResponse();
    myResponse.setRealname("赵六");
    callback(null,myResponse)
}

function getStudentByAge() {

}

function getStudentWrapper() {

}

function biTalk() {

}