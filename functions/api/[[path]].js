export async function onRequest(context) {
  const workerUrl = "https://worker.jm2kb.workers.dev";
  const { pathname, search } = new URL(context.request.url);
  const target = workerUrl + pathname + search;
  return fetch(target, context.request);
}
