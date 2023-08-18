const videos = [
  {
    type: "video" as const,
    width: 1280,
    height: 720,
    poster: "/assets/images/thumbnail1.png",
    sources: [
      {
        src: "https://www.youtube.com/embed/V4xYylZ5Ers",
        type: "video/mp4",
      },
    ],
  },
  {
    type: "video" as const,
    width: 1280,
    height: 720,
    poster: "/assets/images/thumbnail1.png",
    sources: [
      {
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video/mp4",
      },
    ],
  },
  {
    type: "video" as const,
    width: 1280,
    height: 720,
    poster: "/assets/images/thumbnail1.png",
    sources: [
      {
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video/mp4",
      },
    ],
  },
];

export default videos;
