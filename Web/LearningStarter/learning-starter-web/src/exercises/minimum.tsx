import { Container, Title } from "@mantine/core";
import _ from "lodash";

export const MinimumExercise = () => {
  return (
    <Container>
      <Title order={1}>Minimum Value</Title>
      <div>
        Write a function that accepts a collection of integers as a parameter
        and returns the minimum value:
      </div>
    </Container>
  );
};

function getRandomNumbers() {
  return _.times(10, () => _.random(1, 100));
}
