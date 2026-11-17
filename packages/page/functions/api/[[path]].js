export async function onRequest(context) {
  const { request } = context;
  const workerUrl = new URL(request.url);
  const targetUrl = "https://worker.jm2kb.workers.dev" + workerUrl.pathname + workerUrl.search;
  return fetch(targetUrl, request);
}
