import { createClient } from "@astrajs/collections";

// Initialize AstraDB client
const astraClient = await createClient({
    astraDatabaseId: "05da0712-36ec-4769-ac89-687bcc9b662e-us-east-2",
    applicationToken: "AstraCS:pZdhGspXxCIisGSjLGwRBfsr:9189ff506378fe4143ea36ba6d293935c7e8010c35eb095b2e30d3c42d17a490",
    baseApiPath: "/api/rest/v2/"
});

// Get collection
const collection = astraClient.namespace("dummyone").collection("dummy");

// Example function to test connection
const testConnection = async () => {
    try {
        const collections = await collection.find({});
        console.log("Connected to AstraDB:", collections);
        return collections;
    } catch (error) {
        console.error("Connection error:", error);
        throw error;
    }
};

export { collection, testConnection };