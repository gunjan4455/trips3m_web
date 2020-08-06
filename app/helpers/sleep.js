const args = process.argv.slice(2);
const delay = args[0];

setTimeout(
    () => { process.exit(0); },
    delay
);
