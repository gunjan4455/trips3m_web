import { getRtmsConnection, RtmsChannels } from "helpers/rtms";

async function subscribeToRtms(options) {
  console.debug("subscribeToRtms: Creating connection for options: ", options);
  try {
    const { userId } = options;
    // TODO: find a better solution
    window.rtms_ = await getRtmsConnection({
      userId,
      channel: RtmsChannels.EVENTS,
      loggedInUser: false
    });
  } catch (error) {
    console.error(`Unable to create connection: ${error}`);
  }
}

//TODO; chamge code for better communication between external scripts and react
const init = async options => {
  if (typeof window !== "undefined") {
    await subscribeToRtms(options);
    window.rtms_.on(options.eventType, message => {
      const {
        payload: [{ content }]
      } = JSON.parse(message);
      content.experiments.map(exp => {
        if (exp.type === "js") {
          try {
            eval(exp.value);
          } catch (e) {
            console.log("Error: ", e);
          }
        }
      });
    });
  } else {
    console.error("No window object found");
  }
};

export { init };
