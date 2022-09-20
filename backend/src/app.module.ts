import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

const { MONGO_HOST, MONGO_USER, MONGO_PSWD, MONGO_PORT, MONGO_DTBS, NODE_ENV } = process.env;
let url = "";

if (NODE_ENV) {
  url = `mongodb://${MONGO_USER}:${MONGO_PSWD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DTBS}?authSource=admin`;
} else {
  url = 'mongodb://127.0.0.1:27017/damndb';
}

@Module({
  imports: [MongooseModule.forRoot(url), UserModule],
})
export class AppModule {}

