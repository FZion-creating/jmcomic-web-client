export function resolveBackendUrl() {
    return "/api";
}

export function getBackendUrl() {
    return "/api";
}

export function ensureBackendPreconnect(backendUrl = getBackendUrl()) {
    if (!backendUrl || typeof document === "undefined") return;
    let origin: string;
    try {
        origin = new URL(backendUrl, document.baseURI).origin;
    } catch {
        return;
    }
    for (const rel of ["dns-prefetch", "preconnect"] as const) {
        if (document.head.querySelector(`link[rel="${rel}"][href="${origin}"]`)) continue;
        const link = document.createElement("link");
        link.rel = rel;
        link.href = origin;
        if (rel === "preconnect") link.crossOrigin = "anonymous";
        document.head.append(link);
    }
}
