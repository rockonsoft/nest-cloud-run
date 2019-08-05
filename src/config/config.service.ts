import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  get(key: string): string {
    //reads from Node
    const value = process.env[key];
    return value ? value : '';
  }
}
