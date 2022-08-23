import { ERROR_NUMBER, MY_STACK_OVERFLOW_ID } from "../library/reusables";
import { getStackOverflowUserData } from "../library/stack-overflow";
import MetricCard from "./MetricCard";
import { StackOverflowModel } from "../library/types";
import useSWR from "swr";

export default function StackOverflow() {
  const { data } = useSWR<StackOverflowModel>(
    MY_STACK_OVERFLOW_ID,
    getStackOverflowUserData
  );

  const reputation: number = data?.reputation || ERROR_NUMBER;

  return (
    <>
      <MetricCard
        header="Stack Overflow"
        link={"N/A"}
        metric={reputation}
        isCurrency={false}
      />
    </>
  );
}
