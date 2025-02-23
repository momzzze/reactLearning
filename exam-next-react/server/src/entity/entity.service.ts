import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { readFile } from 'fs/promises'; // Use promise-based readFile
import { join } from 'path';

@Injectable()
export class EntityService {
  async getEntities(): Promise<any> {
    try {
      const filePath = join(__dirname, '../../db/entities.json');
      const data = await readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException('Failed to read data');
    }
  }
}
