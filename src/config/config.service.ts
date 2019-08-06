import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  public readonly envConfig: { [key: string]: string } = {};

  constructor() {
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
      dotenv.config();
    }
    for (const e in process.env) {
      this.envConfig[e] = process.env[e];
    }
  }

  isDevelopment() {
    return (
      this.envConfig['NODE_ENV'] && this.envConfig['NODE_ENV'] === 'development'
    );
  }

  get(key: string): string {
    //reads from Node
    const value = this.envConfig[key];
    return value ? value : '';
  }
}
