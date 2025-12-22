import GlossaryDetailPage, {
  generateMetadata as generateBaseMetadata,
} from "../[slug]/page";

export async function generateMetadata() {
  return generateBaseMetadata({
    params: {
      slug: "2-and-20-fee-structure",
    },
  });
}

export default function GlossaryTwoAndTwentyPage() {
  return <GlossaryDetailPage params={{ slug: "2-and-20-fee-structure" }} />;
}
