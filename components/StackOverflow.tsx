import MetricCard from "./MetricCard";
import { StackOverflowModel } from "../lib/types";
import fetcher from "../lib/fetcher";
import useSWR from "swr";

export default function StackOverflow() {
  const { data } = useSWR<StackOverflowModel>("/api/stackoverflow", fetcher);

  const link = data?.link;
  const reputation = data?.reputation;

  return (
    <>
      <MetricCard
        header="Stack Overflow Reputation"
        link={link}
        metric={reputation}
        isCurrency={false}
      />
    </>
  );
}
