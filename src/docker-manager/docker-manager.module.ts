import { Module } from '@nestjs/common';
import { DockerManagerController } from './docker-manager.controller';
import { DockerManagerService } from './docker-manager.service';

@Module({
  controllers: [DockerManagerController],
  providers: [DockerManagerService],
})
export class DockerManagerModule {}
