import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstallerModule } from './installer/installer.module';
import { DockerManagerModule } from './docker-manager/docker-manager.module';

@Module({
  imports: [InstallerModule, DockerManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
