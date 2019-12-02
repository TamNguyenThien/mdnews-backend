import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common'
import { PORT, PRIMARY_COLOR, END_POINT } from './environments'
import chalk from 'chalk';
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as rateLimit from 'express-rate-limit'
import { EmailResolver } from './resolvers/email.resolver'

declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT || 3000);
  const emailResolver = app.get(EmailResolver)

		// mail tracking
		app.use(`/${END_POINT}/:id`, (req, res, next) => {
			const { id } = req.params
			// console.log(req)

			if (id) {
				emailResolver.openEmail(id)
			}

			next()
		})
  Logger.log(
    `🚀  Server is listening on port ${chalk
      .hex(PRIMARY_COLOR!)
      .bold(`${PORT!}`)}`,
    'Bootstrap'
  )
}
bootstrap();
