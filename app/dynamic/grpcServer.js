var PROTO_FILE_PATH = "/Users/yinhao/WebstormProjects/node_grpc/proto/Student.proto";
// 动态生成桩代码服务端示例 可以右键执行，也可以在命令行使用 node grpcServer.js执行

var grpc = require("grpc");

var grpcService = grpc.load(PROTO_FILE_PATH).com.shengsiyuan.proto;

var server = new grpc.Server();

server.addService(grpcService.StudentService.service,{
    //方法的映射 客户端调用冒号前的方法名，会使用冒号后的具体方法处理
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
