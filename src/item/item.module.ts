import { ItemResolver } from './item.resolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [ItemResolver],
})
export class ItemModule {}
