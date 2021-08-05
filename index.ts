/*
* Copyright (c) 2017 Alan Soares
*
* This software is released under the MIT License, see LICENSE.
* https://github.com/alanssoares/aws-gateway-typescript/blob/master/LICENSE
*/
import {apigClientFactory} from './apig-client';
var config = {
    accessKey: '',
    secretKey: '',
    sessionToken: '',
    region: '',
    apiKey: undefined,
    defaultContentType: 'application/json',
    defaultAcceptType: 'application/json'
};
const apigClient = apigClientFactory.newClient(config);
var params = {}
var body = {
    user_id: '123456789'
}
var additionalParams = {}
const response = apigClient.post(params,body,additionalParams);
console.log(response)