export class TimezoneInfo {
    timezone:string;
    isCurrent: boolean;
    
    constructor(timezone : string, isCurrent : boolean){
        this.timezone = timezone;
        this.isCurrent = isCurrent;
    }
}
