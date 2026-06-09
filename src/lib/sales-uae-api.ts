export type SalesUaeApiConfig = {
  baseUrl: string;
  apiKey: string;
};

export function getSalesUaeApiConfig(): SalesUaeApiConfig | null {
  const baseUrl = process.env.SALES_UAE_API_BASE_URL;
  const apiKey = process.env.SALES_UAE_API_KEY;

  if (!baseUrl || !apiKey) {
    return null;
  }

  return { baseUrl, apiKey };
}
