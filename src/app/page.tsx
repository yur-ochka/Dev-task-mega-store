import QueryProvider from "@/utils/QueryProvider";
import MainComponent from "@/components/MainComponent";
export default function Home() {
  return (
    <QueryProvider>
      <MainComponent></MainComponent>
    </QueryProvider>
  );
}
