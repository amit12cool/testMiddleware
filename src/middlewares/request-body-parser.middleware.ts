import {
    Injectable,
    NestMiddleware
} from '@nestjs/common';

@Injectable()
export class RequestBodyParserMiddleware implements NestMiddleware {
    async use(req: any, res: any, next: any) {
        console.log('Im here');
        let data = '';
        req.on('data', (chunk) => {
            data+=chunk;
        })
        req.on('end', () => {
            console.log(data);
            next();
        })
    }
}
