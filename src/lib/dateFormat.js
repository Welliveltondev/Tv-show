const dateFormat = (date) => {
  return new Date(date).toDateString("pt-BR", {
    weekday: "short",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};

export default dateFormat