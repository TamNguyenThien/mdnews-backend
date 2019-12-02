import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlService, TypeormService } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as Resolvers from './resolvers'

@Module({
  imports: [
		GraphQLModule.forRootAsync({
			useClass: GraphqlService
		}),
		TypeOrmModule.forRootAsync({
			useClass: TypeormService
		}),
	],
  controllers: [AppController],
  providers: [AppService, ...Object.values(Resolvers)]
})
export class AppModule {}
