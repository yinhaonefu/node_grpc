// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_Student_pb = require('../proto/Student_pb.js');

function serialize_com_shengsiyuan_proto_MyRequest(arg) {
  if (!(arg instanceof proto_Student_pb.MyRequest)) {
    throw new Error('Expected argument of type com.shengsiyuan.proto.MyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_proto_MyRequest(buffer_arg) {
  return proto_Student_pb.MyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_shengsiyuan_proto_MyResponse(arg) {
  if (!(arg instanceof proto_Student_pb.MyResponse)) {
    throw new Error('Expected argument of type com.shengsiyuan.proto.MyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_proto_MyResponse(buffer_arg) {
  return proto_Student_pb.MyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_shengsiyuan_proto_StreamRequest(arg) {
  if (!(arg instanceof proto_Student_pb.StreamRequest)) {
    throw new Error('Expected argument of type com.shengsiyuan.proto.StreamRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_proto_StreamRequest(buffer_arg) {
  return proto_Student_pb.StreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_shengsiyuan_proto_StreamResponse(arg) {
  if (!(arg instanceof proto_Student_pb.StreamResponse)) {
    throw new Error('Expected argument of type com.shengsiyuan.proto.StreamResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_proto_StreamResponse(buffer_arg) {
  return proto_Student_pb.StreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_shengsiyuan_proto_StudentRequest(arg) {
  if (!(arg instanceof proto_Student_pb.StudentRequest)) {
    throw new Error('Expected argument of type com.shengsiyuan.proto.StudentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_proto_StudentRequest(buffer_arg) {
  return proto_Student_pb.StudentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_shengsiyuan_proto_StudentResponse(arg) {
  if (!(arg instanceof proto_Student_pb.StudentResponse)) {
    throw new Error('Expected argument of type com.shengsiyuan.proto.StudentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_proto_StudentResponse(buffer_arg) {
  return proto_Student_pb.StudentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_shengsiyuan_proto_StudentResponseList(arg) {
  if (!(arg instanceof proto_Student_pb.StudentResponseList)) {
    throw new Error('Expected argument of type com.shengsiyuan.proto.StudentResponseList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_proto_StudentResponseList(buffer_arg) {
  return proto_Student_pb.StudentResponseList.deserializeBinary(new Uint8Array(buffer_arg));
}


var StudentServiceService = exports.StudentServiceService = {
  // 第一种通信方式，发送一个简单请求，返回一个简单响应
  getRealNameByUsername: {
    path: '/com.shengsiyuan.proto.StudentService/GetRealNameByUsername',
    requestStream: false,
    responseStream: false,
    requestType: proto_Student_pb.MyRequest,
    responseType: proto_Student_pb.MyResponse,
    requestSerialize: serialize_com_shengsiyuan_proto_MyRequest,
    requestDeserialize: deserialize_com_shengsiyuan_proto_MyRequest,
    responseSerialize: serialize_com_shengsiyuan_proto_MyResponse,
    responseDeserialize: deserialize_com_shengsiyuan_proto_MyResponse,
  },
  // 第二种通信方式，发送一个简单请求，返回一个流式响应
  getStudentByAge: {
    path: '/com.shengsiyuan.proto.StudentService/getStudentByAge',
    requestStream: false,
    responseStream: true,
    requestType: proto_Student_pb.StudentRequest,
    responseType: proto_Student_pb.StudentResponse,
    requestSerialize: serialize_com_shengsiyuan_proto_StudentRequest,
    requestDeserialize: deserialize_com_shengsiyuan_proto_StudentRequest,
    responseSerialize: serialize_com_shengsiyuan_proto_StudentResponse,
    responseDeserialize: deserialize_com_shengsiyuan_proto_StudentResponse,
  },
  // 第三种通信方式，发送一个流式请求，返回一个简单响应
  getStudentWrapper: {
    path: '/com.shengsiyuan.proto.StudentService/getStudentWrapper',
    requestStream: true,
    responseStream: false,
    requestType: proto_Student_pb.StudentRequest,
    responseType: proto_Student_pb.StudentResponseList,
    requestSerialize: serialize_com_shengsiyuan_proto_StudentRequest,
    requestDeserialize: deserialize_com_shengsiyuan_proto_StudentRequest,
    responseSerialize: serialize_com_shengsiyuan_proto_StudentResponseList,
    responseDeserialize: deserialize_com_shengsiyuan_proto_StudentResponseList,
  },
  // 第四种通信方式，发送一个流式请求，返回一个流式响应
  biTalk: {
    path: '/com.shengsiyuan.proto.StudentService/BiTalk',
    requestStream: true,
    responseStream: true,
    requestType: proto_Student_pb.StreamRequest,
    responseType: proto_Student_pb.StreamResponse,
    requestSerialize: serialize_com_shengsiyuan_proto_StreamRequest,
    requestDeserialize: deserialize_com_shengsiyuan_proto_StreamRequest,
    responseSerialize: serialize_com_shengsiyuan_proto_StreamResponse,
    responseDeserialize: deserialize_com_shengsiyuan_proto_StreamResponse,
  },
};

exports.StudentServiceClient = grpc.makeGenericClientConstructor(StudentServiceService);
