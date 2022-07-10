import { qrcode } from "https://deno.land/x/qrcode@v2.0.0/mod.ts";

async function qrgen(uri: string) {
  return await qrcode(uri, { size: 256 });
}

export { qrgen };
