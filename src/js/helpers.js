import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`Request took too long. Timeout after ${s} seconds.`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

    if (!response.ok)
      throw new Error(
        `Error: response ${response.statusText} (${response.status})`
      );

    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json"))
      throw new Error(`Error: data not in JSON format.`);

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const getImage = function (name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};
