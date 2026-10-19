import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // The page is hosted at howtodatehumans.com/essentials — build asset URLs and
  // client-side routes under that path.
  vite: { base: "/essentials/" },
  tanstackStart: {
    server: { entry: "server" },
    router: { basepath: "/essentials" },
    pages: [{ path: "/" }],
  },
  // Server build that runs in plain Node; scripts/static-snapshot.mjs renders
  // the home page from it into a fully static folder for hosting.
  nitro: { preset: "node-server" },
});
