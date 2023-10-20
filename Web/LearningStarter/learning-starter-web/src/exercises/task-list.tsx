import { Container, Title } from "@mantine/core";

const taskData = [
  {
    id: 1,
    name: "Clone the Repository",
    progressPercentage: 100,
    dueDate: "07/01/2021",
  },
  {
    id: 2,
    name: "Install Dependencies",
    progressPercentage: 50,
    dueDate: "07/04/2021",
  },
  {
    id: 3,
    name: "Set up the Database",
    progressPercentage: 77,
    dueDate: "07/10/2021",
  },
  {
    id: 4,
    name: "Set Up Database",
    progressPercentage: 44,
    dueDate: "07/17/2021",
  },
  {
    id: 5,
    name: "Write Code for New Features",
    progressPercentage: 12,
    dueDate: "07/20/2021",
  },
  {
    id: 6,
    name: "Commit and Push your Changes",
    progressPercentage: 27,
    dueDate: "07/21/2021",
  },
  {
    id: 7,
    name: "Create a Pull Request",
    progressPercentage: 0,
    dueDate: "07/25/2021",
  },
  {
    id: 8,
    name: "Test your Features",
    progressPercentage: 75,
    dueDate: "07/30/2021",
  },
];

export const TaskListExercise = () => {
  return (
    <Container>
      <Title order={1}>Task List</Title>
      <div className="list-container">
        <ol>
          <li>Clone the Repository</li>
        </ol>
      </div>
    </Container>
  );
};
