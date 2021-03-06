export function safeTruncate(val: number, places: number): number {
    const mod = Math.pow(10.0, places);
    const rounded = Math.ceil(val * mod);
    return rounded / mod;
  }
  export function safeRound(val: number, places: number): number {
    const mod = Math.pow(10.0, places);
    const rounded = Math.round(val * mod);
    return rounded / mod;
  }
  
  export function enumToArray(enumme: any): any {
    return Object.keys(enumme)
      .map(key => enumme[key]);
  }
  
  export function dateToTimestamp(date: any): number {
    const timestamp = Math.floor(date / 1000);
    return timestamp;
  }
  
  export function CurrentTimestamp(): number {
    const timestamp = Math.floor(Date.now() / 1000);
    return timestamp;
  }
  
  export function CurrentTimestampMilliseconds(): number {
    const d = new Date();
    const n = d.getTime();
    return n;
  }
  
  export function uuidv4(): string {
  
    /* tslint:disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    /* tslint:enable */
  
  }
  
  export function generateRequestId(): string {
    return `req_${uuidv4()}`;
  }
  
  // @ Request id is auto generated by express loader on each request | check express loader
  let requestId: string;
  export function setRequestId(): string {
    requestId = generateRequestId();
    return requestId;
  }
  
  // @ Request id is auto generated by express loader on each request | check express loader
  export function getRequestId(): string {
    return requestId;
  }
  
  export async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }