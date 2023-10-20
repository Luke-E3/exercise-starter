import { Button, Container, Title } from "@mantine/core";
import { routes } from "../routes/index";
import { css } from "@emotion/react";

export interface ExerciseCounterData {
  id: number;
  startingValue: number;
  name: string;
}

const breadcrumbs = [
  { title: "Exercises", url: routes.root },
  { title: "Counters" },
];

const counterData: ExerciseCounterData[] = [
  { id: 1, startingValue: 0, name: "Counter α" },
  { id: 2, startingValue: 3, name: "Counter β" },
  { id: 3, startingValue: 100, name: "Counter γ" },
];

export const CountersExercise = () => {
  return (
    <Container>
      <Title order={1}>Counter Data</Title>
      <div className="counter-label">Counter α: 0</div>
      <Button color="green">+</Button>
      <Button color="red">-</Button>
    </Container>
  );
};

const styles = css`
  .counter-label {
    font-size: 12pt;
    color: #333;
  }
`;
