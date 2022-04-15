import { Store } from './classes/Store'

function main(){
    let store = new Store(50);
    console.log(store.incident_status());
}

main();

