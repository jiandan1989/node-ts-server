export interface Iconfig {
  port: string | number;
  prettyLog: boolean;
}

export const config: Iconfig = {
  port: process.env.NODE_PORT || 3000,
  prettyLog: process.env.NODE_ENV === 'development',
};
