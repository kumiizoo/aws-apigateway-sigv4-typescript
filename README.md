# Getting started

## Step1:Input the temporary security credentials and region

#### index.ts

example

```
    accessKey: 'xxx',
    secretKey: 'yyy',
    sessionToken: 'zzz=',
    region: 'ap-northeast-1',    
```

## Step2:Input API Gateway stage url

#### apig-client.ts

example

```
L57      var invokeUrl = 'https://xxxx.execute-api.ap-northeast-1.amazonaws.com/Stage'; // add url stage api-gateway
```

## Step3:Build typescript

```
tsc index.js
```