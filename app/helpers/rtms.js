import { httpClient } from "./utils";
import { channelKeysUrl } from "./urlHelpers";
import appConfig from 'appConfig';

const {
  getRtmsConnection: getConnection, isRtmsUserOnline: isUserOnline, MessageType, Channels
} = require('tt.rtms_client/dist/rtms-client');

export { MessageType, Channels as RtmsChannels };

export const getRtmsConnection = async ({ userId, channel, loggedInUser = true }) => {
  const { rtmsUrl: url } = appConfig;
  let authKey;

  if (loggedInUser) {
    ({ rtmsAuthKey: authKey } = appConfig);
    if (!authKey) {
      const authKeyUrl = channelKeysUrl({ userId, channel });
      ({
        body: {
          data: {
            config: { auth_key: authKey }
          }
        }
      } = await httpClient("GET", authKeyUrl, { params: { userId } }));
    }
  }
  return getConnection({ userId, authKey, url, channel });
};

export const isRtmsUserOnline = (...args) => {
  return isUserOnline(...args);
};

export function formatChatKeys(chatKeys) {
  if (chatKeys.loaded) {
    return {
      channels: {
        chat: chatKeys.channel
      },
      publish_key: chatKeys.publishKey,
      subscribe_key: chatKeys.subscribeKey
    };
  }

  return null;
}

export async function initializeChatUsingRtms({ userId, agentId: channelId }) {
  let currentSubscription_;
  let rtms_;
  if (channelId) {
    rtms_ = await getRtmsConnection({ userId, channel: Channels.CHAT });
    currentSubscription_ = rtms_.subscribeToChannel({ channelId });
    return { currentSubscription_, rtms_};
  }
  return {};
};
