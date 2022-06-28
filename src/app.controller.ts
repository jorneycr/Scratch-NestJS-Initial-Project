import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {

    @Get('/hi')
    getRootRoute() {
        return 'Hello there';
    }

    @Get('/bye')
    getByeThere() {
        return 'bye there';
    }
}