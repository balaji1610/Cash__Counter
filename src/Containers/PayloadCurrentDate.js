const PayloadCurrentDate = {
  time: () => {
    const day = new Date();
    const options1 = {
      dateStyle: "long",
      timeStyle: "short",

      hour12: true,
    };

    const currentTime = new Intl.DateTimeFormat("en-GB", options1).format(day);

    return currentTime;
  },
};

export default PayloadCurrentDate;
