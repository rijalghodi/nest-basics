import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GqlContextType } from '@nestjs/graphql';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    /**
     * ExecutionContext adalah objek yang mengandung konteks dari sebuah eksekusi. Terdiri dari dua hal:
     * 1. Konteks Eksekusi, terdiri dari
     *      - .getClass: Kelas controller tempat interceptor ini diekskusi
     *      - .getHandler: Handler tempat interceptor ini diekskusi
     * 2. ArgumentHost, terdiri dari
     *      - Protokol ekskusi aplikasi, seperti http, graphql, websocket: .getType() atau .getArgByIndex()
     *      - Fungsi untuk mengubah eksekusi aplikasi: .switchToRpc, .switchToHttp, .switchToWs
     *      - Argumen Handler .getArgs() berisi request, response, next
     */

    // Mengambil Konteks Ekskusi
    const controller = context.getClass();
    const handler = context.getHandler();

    console.log(
      'controller',
      controller,
      'console from /job/interceptor/logging.interceptor',
    );
    console.log(
      'handler',
      handler,
      'console from /job/interceptor/logging.interceptor',
    );

    /**
     * Mengekstrak Protokol Eksekusi Aplikasi
     */
    if (context.getType() === 'http') {
      // do something that is only important in the context of regular HTTP requests (REST)
    } else if (context.getType() === 'rpc') {
      // do something that is only important in the context of Microservice requests
    } else if (context.getType<GqlContextType>() === 'graphql') {
      // do something that is only important in the context of GraphQL requests
    }

    /** Mengekstral Argumen Handler  */
    const [req, res, n] = context.getArgs();
    /** Atau bisa menggunakan getArgByIndex() */

    // const request = host.getArgByIndex(0);
    // const response = host.getArgByIndex(1);
    // console.log('request', req);
    // console.log('response', res);
    // console.log('next', n);

    /**
     * Mengubah Konteks Aplikasi
     * Ini adalah cara yang paling robust, karena memastikan bahwa konteks aplikasi itu adalah http
     * Kemudian mengekstrak method2 di dalamnya
     */
    const { body, method, url, params, query } = context
      .switchToHttp()
      .getRequest();
    const response = context.switchToHttp().getResponse();
    const nextMethod = context.switchToHttp().getNext();

    console.log(
      'request',
      { body, method, url, params, query },
      'console from /job/interceptor/logging.interceptor',
    );
    response.status(234);

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}
