export const getRules = (): object => {
  return [
    // Emphasis
    {
      scope: ["emphasis"],
      settings: {
        fontStyle: "italic",
      },
    },
    // Strong
    {
      scope: ["strong"],
      settings: {
        fontStyle: "bold",
      },
    },
    // Deleted
    {
      scope: ["deleted"],
      settings: {
        fontStyle: "strikethrough",
      },
    },
  ];
};
