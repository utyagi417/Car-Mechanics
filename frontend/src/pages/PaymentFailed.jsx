import { Flex } from "antd" 
import { Stack, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import ButtonThree from "../Components/Buttons/ButtonThree";

const PaymentFailed = () => {

    const navigate = useNavigate();
  return (
    <>
      <Flex justify="center" align="center" className="h-screen">
        <Stack className="w-[500px]">
          <Image src="/Failed.jpg" />
          <h1 className="text-4xl font-pop text-[#f5222d] text-center py-4">
            Payment Failed
          </h1>
          <div className="flex items-center justify-center">
            <ButtonThree  firstText="GO HOME" color="gray" onClick={() => navigate("/")} />
          </div>
        </Stack>
      </Flex>
    </>
  );
}

export default PaymentFailed
