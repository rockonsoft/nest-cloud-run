import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import * as fs from 'fs';

@Injectable()
export class AppService {
  /**
   *
   */
  constructor(private config: ConfigService) {}
  getHello(): string {
    let env = JSON.stringify(this.config.envConfig);
    const files = fs.readdirSync('.');
    env += files.join(',');
    return JSON.stringify(env);
  }
}
