import tracer from "dd-trace";
tracer.init();// initialized in a different file to avoid hoisting.
tracer.use('express', {
    service: 'production-browsing-fe-ms'
})
export default tracer;