import {
    Injectable,
    NestMiddleware
} from '@nestjs/common';

@Injectable()
export class RequestBodyParserMiddleware implements NestMiddleware {
    async use(req: any, res: any, next: any) {
        console.log('<<<<<===Start===>>>>>');
        await this.testfn(req);
        next();
        console.log('Next called');
        console.log('<<<<<===End===>>>>>');
    }

    async testfn(req) {
        return new Promise((resolve, reject) => {
            let data = '';
        req.on('data', (chunk) => {
            data+=chunk;
        })
        req.on('end', async () => {
            console.log('Promise resolved')
            resolve();
        })
        })
    }
}
