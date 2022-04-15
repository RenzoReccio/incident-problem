import { Incident } from "./Incident";

export class Store {
    incidents: Incident[] = [];

    constructor(number_of_inc: number) {
        for (let index = 0; index < number_of_inc; index++) {
            let inc = new Incident();
            let random = Math.random();

            this.set_date(inc.startDate, Math.floor(random * 50) + 1, false);
            //Closed the incident
            if (random < 0.5) {
                let actualDate = new Date();
                this.set_date(actualDate, Math.floor(random * 80) + 1, true);

                inc.close_incident(actualDate);
            }

            this.incidents.push(inc);
        }
    }

    incident_status(): { open_cases: number; closed_cases: number; average_solution: number; maximum_solution: number; } {
        let open_cases = 0, closed_cases = 0, average_solution = 0, maximum_solution = 0;

        for (const inc of this.incidents) {
            if (inc.status == 'Open') {
                open_cases++;
            }
            let solution_time = this.days_between(inc.solvedDate ?? new Date(), inc.startDate);

            if (inc.status == 'Solved') {
                closed_cases++;
                average_solution += (solution_time / this.incidents.length)
            }

            if (maximum_solution < solution_time) {
                maximum_solution = solution_time;
            }
        }

        return {
            open_cases: open_cases,
            closed_cases: closed_cases,
            average_solution: Math.floor(average_solution),
            maximum_solution: maximum_solution
        }
    }

    days_between(first_date: Date, second_date: Date) {
        const ONE_DAY = 1000 * 60 * 60 * 24;
        const differenceMs = Math.abs(+first_date - +second_date);

        return Math.round(differenceMs / ONE_DAY);
    }

    set_date(date: Date, number_days: number, is_sum: boolean) {
        let days = 0;
        if (is_sum) {
            days = date.getDate() + number_days;
        } else {
            days = date.getDate() - number_days;
        }

        date.setDate(days);
    }
}