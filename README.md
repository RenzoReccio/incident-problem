# Store incidents

Simple program to calculate number of incidents.

## Getting Started

### Dependencies

- NodeJS.
- TypeScript.

### Installing

- Clone the repository
- Open the terminal and run the following command
```
npm i
```
- Note: If you don't have typescript installed globally, install it with the following command
```
npm install typescript -g 
```
### Executing program

- Run the following command

```
npm run dev
```

## How to use it
### Classes
- This folder contains the classes with all the logic inside.
#### Incident.ts
- Contains the logic of the incident.
- When creating an incident, if no name is passed in the constructor, a random name will be given.
- closed_incident: Change the state of an incident to "solved" and the solved_date is set to the current time if no date is passed.

#### Store.ts
- Contains the logic to store incidents.
- When creating an store its possible to pass a number, this will create a number of random incidents.
- incident_status: Calculate the open_cases, closed_cases, average_solution, maximum_solution
- incidents: A list containing all the incidents of the store. Push more incidints as you want.

### app.ts
- This file execute the program, in this example I've initialized the Store class in "store" with 50 random incidents.
