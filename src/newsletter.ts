// const button = document.getElementById("subscribe_button") as HTMLButtonElement;
// const emailInput = document.getElementById("subscribe_email_id") as HTMLInputElement;

const input = document.querySelector<HTMLInputElement>("#subscribe_email_id");
const button = document.querySelector<HTMLButtonElement>("#subscribe_button");

if( !input || !button) {
    throw new Error("Could not find input or button element");
}   
button.addEventListener("click", (event) => {
    event.preventDefault();
    const email = input.value; 
    console.log(`Subscribed with email: ${email}`);
});