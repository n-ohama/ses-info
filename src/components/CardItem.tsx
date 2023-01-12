import { FC } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { HumanType } from "../constants";

type Props = {
  data: HumanType;
};

export const CardItem: FC<Props> = ({ data }) => {
  const picUrl = data.Picture[0].url;
  return (
    <Box bg="gray.100" p={"16px 8px"}>
      {/* <Image src={picUrl} /> */}
      <Text>{data.Name}</Text>
    </Box>
  );
};
