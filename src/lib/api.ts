import axios from "axios";
import CryptoJS from "crypto-js";

function getAuthHeaders() {
  const username = process.env.NEXT_PUBLIC_KE_USERNAME ?? "";
  const token = process.env.NEXT_PUBLIC_KE_TOKEN ?? "";
  const time = Math.floor(Date.now() / 1000);
  const hash = CryptoJS.HmacSHA256(`${username}::${token}::${time}`, token);
  return {
    "Auth-Id": username,
    "Auth-Token": hash.toString(CryptoJS.enc.Hex),
    Timestamp: String(time),
  };
}

export async function subscribeForm(payload: {
  lists: string;
  email: string;
  full_name: string;
  tags: string;
}) {
  const corsWorker = process.env.NEXT_PUBLIC_CORS_WORKER ?? "";
  const keApi = process.env.NEXT_PUBLIC_KE_API ?? "";
  return axios.post(`${corsWorker}/?${keApi}/subscriber`, payload, {
    headers: getAuthHeaders(),
  });
}
