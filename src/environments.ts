import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.join(__dirname, "..", ".env") });

export const NODE_ENV = process.env.NODE_ENV ?? "production";

export const NOTION_INTEGRATION_TOKEN = process.env.NOTION_INTEGRATION_TOKEN;
export const NOTION_PERSONAL_DATABASE_ID =
    process.env.NOTION_PERSONAL_DATABASE_ID ?? "";
export const NOTION_WORKLOG_DATABASE_ID =
    process.env.NOTION_WORKLOG_DATABASE_ID ?? "";

export const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL ?? "";

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ?? "";
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET ?? "";
export const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN ?? "";
export const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI ?? "";

export const CLICKUP_API_KEY = process.env.CLICKUP_API_KEY ?? "";
export const CLICKUP_LIST_ID = Number(process.env.CLICKUP_LIST_ID ?? "");
export const CLICKUP_USER_ID = Number(process.env.CLICKUP_USER_ID ?? "");
export const GOOGLE_EMAIL = process.env.GOOGLE_EMAIL ?? "";
export const GOOGLE_SUBJECT = process.env.GOOGLE_SUBJECT ?? "";

export const MRBILIT_URL = process.env.MRBILIT_URL ?? "";

export const KAVENEGAR_API_KEY = process.env.KAVENEGAR_API_KEY ?? "";

export const TELEGRAM_BOT_TOKEN =
    (NODE_ENV === "development"
        ? process.env.TELEGRAM_BOT_TOKEN_LOCAL
        : process.env.TELEGRAM_BOT_TOKEN) ?? "";
export const TELEGRAM_GROUP_ID = Number(process.env.TELEGRAM_GROUP_ID ?? "");
export const MY_TELEGRAM_USER_ID = Number(
    process.env.MY_TELEGRAM_USER_ID ?? ""
);
export const TELEGRAM_NOTES_FROM_A_DEVELOPER_CHANNEL_ID =
    Number(
        NODE_ENV === "development"
            ? process.env.TELEGRAM_NOTES_FROM_A_DEVELOPER_CHANNEL_ID_LOCAL
            : process.env.TELEGRAM_NOTES_FROM_A_DEVELOPER_CHANNEL_ID
    ) ?? "";
export const TELEGRAM_API_ID = process.env.TELEGRAM_API_ID ?? "";
export const TELEGRAM_API_HASH = process.env.TELEGRAM_API_HASH ?? "";
export const TELEGRAM_STRING_SESSION =
    process.env.TELEGRAM_STRING_SESSION ?? "";

console.log(TELEGRAM_API_ID, TELEGRAM_API_HASH, TELEGRAM_STRING_SESSION);
