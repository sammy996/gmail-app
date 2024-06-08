export type EmailDataProps = (typeof EMAILS)[0];

export const EMAILS = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://mighty.tools/mockmind-api/content/human/57.jpg",
    marker: "importante",
    subject: "What is Lorem Ipsum",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    star: false,
    date: "13 de fev",
  },
  {
    id: "2",
    name: "Mary Chamber",
    avatar: "https://mighty.tools/mockmind-api/content/human/44.jpg",
    subject: "Where does it come from",
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    star: false,
    date: "15 de fev",
  },
  {
    id: "3",
    name: "Cho",
    avatar: "https://mighty.tools/mockmind-api/content/human/7.jpg",
    subject: "Why do we use it",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    star: true,
    date: "15 de fev",
  },
];
