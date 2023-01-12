import { SimpleGrid, Box, Text, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { CardItem } from "./components/CardItem";
import { HumanType } from "./constants";

const App = () => {
  const [page, setPage] = useState(1);
  const [infoData, setInfoData] = useState<HumanType[]>([]);
  useEffect(() => {
    axios
      .post("https://gsslab-website-api.vercel.app/api/get_all_resume")
      // .get("https://n-ohama.github.io/jsons-dir/humanInfo.json")
      .then((res) => {
        const responseData: HumanType[] = res.data.data;
        setInfoData(responseData);
      });
  }, []);

  const dataByPage = useMemo(
    () =>
      infoData
        .filter((item) => item.Card_Display)
        .slice((page - 1) * 12, page * 12),
    [infoData, page]
  );

  const pageLength = Math.ceil(
    infoData.filter((item) => item.Card_Display).length / 12
  );

  return (
    <div className="App">
      <SimpleGrid
        columns={[2, null, 3]}
        spacing="40px"
        maxWidth={"70%"}
        m={"120px auto"}
      >
        {dataByPage.map((item) => (
          <CardItem data={item} />
        ))}
      </SimpleGrid>
      <Flex align={"center"} justify="center" gap={2}>
        {[...Array(pageLength)]
          .map((_, i) => i + 1)
          .map((item) => (
            <Box
              p={4}
              bg={item === page ? "blue.200" : "gray.100"}
              display={"inline-block"}
              color={item === page ? "white" : "gray.500"}
              borderRadius={"md"}
              onClick={() => setPage(item)}
            >
              {item.toString()}
            </Box>
          ))}
      </Flex>
    </div>
  );
};

export default App;
