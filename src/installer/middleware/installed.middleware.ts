import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class InstalledMiddleware implements NestMiddleware {
  use(req: FastifyRequest['raw'], res: FastifyReply['raw'], next: () => void) {
    if (!process.env.INSTALLED) {
      res.setHeader('Location', '/install');
      res.statusCode = 302;
      res.end();
      return;
    }

    next();
  }
}
