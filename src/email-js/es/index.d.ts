import type { EmailJSResponseStatus } from './models/EmailJSResponseStatus';
import { init } from './methods/init/init';
import { send } from './methods/send/send';
export type { EmailJSResponseStatus };
export { init, send };
declare const _default: {
    init: (userID: string, origin?: string) => void;
    send: (serviceID: string, templateID: string, templatePrams?: Record<string, unknown> | undefined, userID?: string | undefined) => Promise<EmailJSResponseStatus>;
};
export default _default;
