import {submit} from "redux-form";

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function SendResults() {
    // await sleep(500); // simulate server latency
    submit('wizard')

    // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
