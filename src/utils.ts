import * as os from 'os';

const IPv4Address = os.networkInterfaces().en0.find(item => item.family === 'IPv4');
export const IP = IPv4Address ? IPv4Address.address : '';
