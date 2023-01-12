import { Header } from "./components/Header";
import { Post, PostProps } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

// interface Posts {
//   id: number;
//   author: {
//     avatarUrl: string;
//     name: string;
//     role: string;
//   },
//   content : {
//     type: 'paragraph' | 'link';
//     content: string;
//   }[],
//   publishedAt: Date
// }

interface Post extends PostProps {
  id: number;
}

const posts:Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/emanueljorge3ma.png",
      name: "Emanuel Jorge",
      role: "CTO @ 3MA",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-12-05 08:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/emanueljorge3ma.png",
      name: "3MA",
      role: "CEO @ 3MA",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
