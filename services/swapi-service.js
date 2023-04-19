// export default class SwapiService {
//   constructor() {
//     this.keyApi = 'FOe02DwgZIv/Tkdd5O4L1g==AzMFqknEL7kWWp00';
//     this.url = 'https://api.api-ninjas.com/v1/worldtime?city=Moscow';
//   }

//   async getResource() {
//     const res = await fetch(`${this.url}, {
//       headers: ${this.keyApi}
//     }`);

//     if (!res.ok) {
//       throw new Error(`Could not fetch ${this.url}` + `, received ${res.status}`);
//     }
//     const body = await res.json();

//     return body;
//   }  
// }
