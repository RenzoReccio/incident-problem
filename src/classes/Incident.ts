export class Incident {
    status: 'Open' | 'Solved' | undefined;
    startDate: Date;
    solvedDate: Date | null;
    name: String | undefined;

    constructor(name?: String) {
        this.name = name ?? ('INC-' + Math.floor((Math.random() * 800) + 1));
        this.startDate = new Date();
        this.solvedDate = null;
        this.status = 'Open';
    }

    close_incident(solvedDate?: Date) {
        this.status = 'Solved';
        this.solvedDate = solvedDate ?? new Date();
    }
}