import gql from 'graphql-tag';



// import { Platform } from 'react-native'; 
// import Config from "react-native-config";
// import { request } from "graphql-request";

// const endpoint = Platform.select({
//   ios: Config.API_ENDPOINT_IOS,
//   android: Config.API_ENDPOINT_ANDROID
// })

// export const fetchSummoner = (name: string, region: string) => {
//   const query = `
//     query fetchSummoner($name: String!, $region: String!) {
//     name
//     id
//     accountId
//   }`;
  
//   const variables = {
//     name,
//     region
//   };

//   return request(endpoint || '', query, variables);
// }