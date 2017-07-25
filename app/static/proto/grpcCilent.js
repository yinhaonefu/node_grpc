// 静态生成桩代码客户端示例 可以右键执行，也可以在命令行使用 node grpcServer.js执行
var service = require("./Student_grpc_pb");
var messages = require("./Student_pb");

var grpc = require("grpc");

var client = new service.StudentServiceClient("127.0.0.1:8899", grpc.credentials.createInsecure());

var request = new messages.MyRequest();
request.setUsername("wangwu");

client.getRealNameByUsername(request,function (error,respData) {
    console.log(respData.getRealname());
})