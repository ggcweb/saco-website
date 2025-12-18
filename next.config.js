// /**
//  * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
//  * for Docker builds.
//  */
// import "./src/env.js";
//
// /** @type {import("next").NextConfig} */
// const config = {
//
// };
//
// export default config;


/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // <<< THIS IS THE FIX
  },
}

export default nextConfig;