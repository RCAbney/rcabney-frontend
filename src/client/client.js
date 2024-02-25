import { createClient } from "@sanity/client";

const config = {
    apiVersion: "2024-02-24",
    projectId: "win0gjqa",
    dataset: "production"
}

export const client = createClient(config);