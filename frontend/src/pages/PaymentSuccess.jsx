import { Stack, Group, Image } from "@mantine/core";
import { useNavigate, useSearchParams } from "react-router-dom"

import {Flex} from "antd"

import ButtonThree from "../Components/Buttons/ButtonThree";

const PaymentSuccess = () => {

    const navigate = useNavigate();
    const [queryParameter] = useSearchParams();
    const referenceId = queryParameter.get("referenceId")

  return (
    <>
      <Flex justify="center" align="center" className="h-screen">
        <Stack className="w-[500px]">
          <Image src="/Success.jpg" />
          <h1 className="text-4xl font-pop text-[#f5222d] text-center py-4">Paid Successfully</h1>
          <h1 className="text-xl text-center text-[var(--text-color)]">Reference Number : {referenceId}</h1>
          <div className="flex items-center justify-center">
            <ButtonThree firstText="GO HOME" color="gray" onClick={() => navigate("/")} />
          </div>
        </Stack>
      </Flex>
    </>
  );
}

export default PaymentSuccess;