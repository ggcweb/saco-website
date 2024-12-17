import { HydrateClient } from "~/trpc/server";
import { Navbar } from "~/app/_components/navbar";
export default async function Home() {

  return (
    <HydrateClient>
      {/*  Put all the components here */}
      <Navbar />
    </HydrateClient>
  );
}
