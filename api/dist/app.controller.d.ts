import { AppService } from './app.service';
import { MathService } from './services/math.services';
export declare class AppController {
    private readonly appService;
    private readonly mathService;
    constructor(appService: AppService, mathService: MathService);
    getHello(): string;
    Summation(data: Array<number>): Promise<import("rxjs").Observable<number>>;
}
