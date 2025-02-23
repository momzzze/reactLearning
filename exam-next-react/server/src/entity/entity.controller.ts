import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { EntityService } from './entity.service';

@Controller('entity')
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @Get()
  async findAll() {
    return await this.entityService.getEntities();
  }
}
