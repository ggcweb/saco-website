// import { HydrateClient } from "~/trpc/server";
import MainPage from "~/app/MainPage/MainPage"
export default async function Home() {

  return (
    // <HydrateClient>
      <MainPage />
    // </HydrateClient>
  );
}
