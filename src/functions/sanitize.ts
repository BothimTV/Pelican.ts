export function checkApiKey(apiKey: string, requestedType: "APPLICATION" | "USER") {
    if (apiKey.length !== 48) throw new Error("Invalid API key length")
    if (requestedType === "APPLICATION" && !apiKey.startsWith("peli_")) throw new Error("Invalid API key format")
    if (requestedType === "USER" && !apiKey.startsWith("plcn_")) throw new Error("Invalid API key format")    
}