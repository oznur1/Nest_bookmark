
import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client/extension";




@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            Datasource:{
                db:{
                    url:process.env.DATABASE_URL,
                }
            }
        })
    }

    cleanDb(){
        return this.$transaction([
            this.bookmark.deleteMany(),
            this.user.deleteMany()
        ])
    }
}