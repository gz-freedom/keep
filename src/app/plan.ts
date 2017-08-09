export class Plan {
    id: number;
    name: string;
    days: number;
    startDate: string;

    constructor(obj: Object = {}) {
        Object.assign(this, obj);
    }
}
