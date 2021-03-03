import { GraphQLModule } from '@nestjs/graphql';
import { ItemModule } from './item/item.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: {
        settings: {
          'request.credentials': 'same-origin',
        },
      },
    }),
    ItemModule,
  ],
})
export class AppModule {}
