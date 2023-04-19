import { Controller, Get, Render } from '@nestjs/common';
import { InstallerService } from './installer.service';

@Controller('install')
export class InstallerController {
  constructor(private readonly installerService: InstallerService) {}

  @Get('/')
  @Render('install.hbs')
  getInstall(): object {
    return {};
  }
}
