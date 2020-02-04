import {
    Injectable,
    NestMiddleware
} from '@nestjs/common';
import * as getRawBody from 'raw-body';

@Injectable()
export class RequestBodyParserMiddleware implements NestMiddleware {
    async use(req: any, res: any, next: any) {
        console.log('Im here');
        const body = await getRawBody(req);
        next();
    }
}
