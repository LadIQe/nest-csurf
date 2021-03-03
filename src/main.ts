import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.use(csurf({ cookie: { sameSite: true } }));

  app.use((req: any, res: any, next: any) => {
    console.log(req);
    console.log('csrf');
    const token = req.csrfToken();
    console.log(token);
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;

    next();
  });

  await app.listen(3000);
}
bootstrap();
