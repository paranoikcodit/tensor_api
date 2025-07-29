import dts from "bun-plugin-dts";

await Bun.build({
    entrypoints: ["./src/index.ts", "./src/queries/index.ts"],
    outdir: "dist",
    format: "esm",
    target: "bun",
    plugins: [dts()]
})