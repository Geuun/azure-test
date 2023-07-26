/**
 *  MSAL 설정 정보 및 Graph API 환경변수
 */

/**
 * 환경변수
 */
const REDIRECT_URI: string = `${process.env.NEXT_PUBLIC_REDIRECT_URI}`;
const POST_LOGOUT_REDIRECT_URI: string = `${process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI}`;
const NEXT_PUBLIC_GRAPH_API_ENDPOINT: string = `${process.env.NEXT_PUBLIC_GRAPH_API_ENDPOINT}` + "/v1.0/me";

/**
 * MSAL 설정 정보
 */
const msalConfig = {
  auth: {
    clientId: `${process.env.CLIENT_ID}`, // 'Application (client) ID' of app registration in Azure portal - this value is a GUID
    authority: `${process.env.CLOUD_INSTANCE}` + `${process.env.TENANT_ID}`, // Full directory URL, in the form of https://login.microsoftonline.com/<tenant>
    clientSecret: `${process.env.CLIENT_SECRET}`, // Client secret generated from the app registration in Azure portal
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel: any, message: any, containsPii: any) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: 3,
    },
  },
};

export {msalConfig, REDIRECT_URI, POST_LOGOUT_REDIRECT_URI, NEXT_PUBLIC_GRAPH_API_ENDPOINT};
