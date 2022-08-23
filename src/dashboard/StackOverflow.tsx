import { ERROR_NUMBER, MY_STACK_OVERFLOW_ID } from "../library/reusables";
import { getStackOverflowUserData } from "../library/stack-overflow";
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
      <div className="text-lg font-medium text-sky-500">StackOverflow</div>
      <p>Reputation: {reputation}</p>
    </>
  );
}
