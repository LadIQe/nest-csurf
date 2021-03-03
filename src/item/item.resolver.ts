import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ItemResolver {
  @Query(() => String)
  hello() {
    return 'hello';
  }
}
