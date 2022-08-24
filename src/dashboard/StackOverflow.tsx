import {
  ERROR_NUMBER,
  MY_STACK_OVERFLOW_ID,
  MY_STACK_OVERFLOW_LINK,
} from "../library/reusables";
import { getStackOverflowUserData } from "../library/stack-overflow";
import MetricCard from "./MetricCard";
import { StackOverflowModel } from "../library/types";
import useSWR from "swr";

export default function StackOverflow() {
  const { data } = useSWR<StackOverflowModel>(
    MY_STACK_OVERFLOW_ID,
    getStackOverflowUserData
  );

  const link: string = data?.link ?? MY_STACK_OVERFLOW_LINK;
  const reputation: number = data?.reputation ?? ERROR_NUMBER;

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
