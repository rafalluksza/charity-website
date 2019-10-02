import {submit} from "redux-form";
import {withFirebase} from "../../Firebase/context";



// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//
// export default (async function showResults(values) {
//     await sleep(500); // simulate server latency
//     window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
// });

const SendResults = (values) => {
    console.log(values);
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    submit('wizard');
    props.firebase.user(props.uid).push({
        what: props.what,
        bags: props.bags,
        cities: props.cities,
        phone: props.phone,
        street: props.street,
        city: props.city,
        cityCode: props.cityCode,
        time: props.time,
    });

}
// export default (async function SendResults() {
//     // await sleep(500); // simulate server latency
//     submit('wizard')
//
//     // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
// });

const mapState = state => {
    console.log(state)
    return {
        uid: state.userData.uid,
        email: state.userData.email,
        what: state.form.wizard.values.what,
        bags: state.form.wizard.values.bags,
        cities: state.form.wizard.values.cities,
        phone: state.form.wizard.values.phone,
        street: state.form.wizard.values.street,
        city: state.form.wizard.values.city,
        cityCode: state.form.wizard.values.cityCode,
        time: state.form.wizard.values.time,
    }
}

export default compose(
    withFirebase,
    connect(mapState, null))(SendResults);

