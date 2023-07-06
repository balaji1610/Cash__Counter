import ImageSwitch from "../Containers/ImageSwitch";
import { Grid } from "@mui/material";
import Input__Card from "../Containers/Input__Card";
import InputField from "../Reusable_compoents/InputField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "@mui/material";

import { useImmer } from "use-immer";
import { useState, useEffect } from "react";

//Notes Images
import Note_500 from "../assests/Images/Notes/Notes_500.png";
import Note_200 from "../assests/Images/Notes/Note_200.jpg";
import Note_100 from "../assests/Images/Notes/Note_100.jpg";
import Note_50 from "../assests/Images/Notes/Note_50.jpg";
import Note_20 from "../assests/Images/Notes/Note_20.jpg";

//Coins Images

import Coin_10 from "../assests/Images/Coins/Coin_10.jpg";
import Coin_5 from "../assests/Images/Coins/Coin_5.jpg";
import Coin_2 from "../assests/Images/Coins/Coin_2.jpg";
import Coin_1 from "../assests/Images/Coins/Coin_1.jpg";

import PayloadCurrentDate from "../Containers/PayloadCurrentDate";
import Services from "../Services/ServicesAxios";

//
import { useSelector, useDispatch } from "react-redux";
import { callUsereffect } from "../features/cashcounter/CashCounterSlice";
import { postApithunk } from "../features/cashcounter/ThunkApi";

const numWords = require("num-words");

export default function CashCounterPage() {
  const countRedux = useSelector((state) => state.cashCounter.value);
  const dispatch = useDispatch();

  console.log(countRedux, "value");
  const mobile = useMediaQuery("(min-width:600px)");
  const CashCounter_Payload = {
    notes: {
      fivehundered: {
        numberofnotes: 0,
        value: 0,
      },
      twohundered: {
        numberofnotes: 0,
        value: 0,
      },
      onehundered: {
        numberofnotes: 0,
        value: 0,
      },
      fifty: {
        numberofnotes: 0,
        value: 0,
      },
      twenty: {
        numberofnotes: 0,
        value: 0,
      },
    },
    coins: {
      ten: {
        numberofnotes: 0,
        value: 0,
      },
      five: {
        numberofnotes: 0,
        value: 0,
      },
      two: {
        numberofnotes: 0,
        value: 0,
      },
      one: {
        numberofnotes: 0,
        value: 0,
      },
    },
    total: {
      sumoftotal: 0,
      notes: 0,
      coins: 0,
    },
  };
  const [nestedObjct, setNestedObject] = useImmer(CashCounter_Payload);
  const [counter, setCounter] = useState(0);

  //--------------------------->Images<------------------
  const imgeListAll = [
    " https://img.icons8.com/fluency/48/rupee.png",
    Note_500,
    Note_200,
    Note_100,
    Note_50,
    Note_20,
  ];

  const CoinsImage = [Coin_10, Coin_5, Coin_2, Coin_1];

  const Image_ClassNames = [
    "ImageList__default__style",
    "ImageList_Notes__style",
    "ImageList__Coins__style",
  ];
  const DefaultImage = {
    ImageURL: imgeListAll[0],
    alt: "Defalut Indian Symbol",
    ClassName: Image_ClassNames[0],
  };
  const [OnchangeImage, SetOnChangeImage] = useState(DefaultImage);
  //------------------->Onchange----------------->
  const handleNumberChange = (e, argument) => {
    const inputValue = Number(e.target.value.slice(0, 3));
    const insertObject = {
      //Notes
      500: () => {
        setNestedObject((draft) => {
          draft.notes.fivehundered.numberofnotes = inputValue;
          draft.notes.fivehundered.value = inputValue * 500;
        });

        SetOnChangeImage({
          ...OnchangeImage,
          ImageURL: imgeListAll[1],
          alt: "500 Ruppee",
          ClassName: Image_ClassNames[1],
        });
      },
      200: () => {
        setNestedObject((draft) => {
          draft.notes.twohundered.numberofnotes = inputValue;
          draft.notes.twohundered.value = inputValue * 200;
        });
        SetOnChangeImage({
          ...OnchangeImage,
          ImageURL: imgeListAll[2],
          alt: "200 Ruppee",
          ClassName: Image_ClassNames[1],
        });
      },
      100: () => {
        setNestedObject((draft) => {
          draft.notes.onehundered.numberofnotes = inputValue;
          draft.notes.onehundered.value = inputValue * 100;
        });
        SetOnChangeImage({
          ...OnchangeImage,
          ImageURL: imgeListAll[3],
          alt: "100 Ruppee",
          ClassName: Image_ClassNames[1],
        });
      },
      50: () => {
        setNestedObject((draft) => {
          draft.notes.fifty.numberofnotes = inputValue;
          draft.notes.fifty.value = inputValue * 50;
        });
        SetOnChangeImage({
          ...OnchangeImage,
          ImageURL: imgeListAll[4],
          alt: "50 Ruppee",
          ClassName: Image_ClassNames[1],
        });
      },
      20: () => {
        setNestedObject((draft) => {
          draft.notes.twenty.numberofnotes = inputValue;
          draft.notes.twenty.value = inputValue * 20;
        });
        SetOnChangeImage({
          ...OnchangeImage,
          ImageURL: imgeListAll[5],
          alt: "20 Ruppee",
          ClassName: Image_ClassNames[1],
        });
      },
      //Coins
      10: () => {
        setNestedObject((draft) => {
          draft.coins.ten.numberofnotes = inputValue;
          draft.coins.ten.value = inputValue * 10;
        });

        SetOnChangeImage({
          ...OnchangeImage,
          ImageURL: CoinsImage[0],
          alt: "10 Coin",
          ClassName: Image_ClassNames[2],
        });
      },
      5: () => {
        setNestedObject((draft) => {
          draft.coins.five.numberofnotes = inputValue;
          draft.coins.five.value = inputValue * 5;
        });
        SetOnChangeImage({
          ...OnchangeImage,
          ImageURL: CoinsImage[1],
          alt: "5 Coin",
          ClassName: Image_ClassNames[2],
        });
      },
      2: () => {
        setNestedObject((draft) => {
          draft.coins.two.numberofnotes = inputValue;
          draft.coins.two.value = inputValue * 2;
        });
        SetOnChangeImage({
          ...OnchangeImage,
          ImageURL: CoinsImage[2],
          alt: "2 Coin",
          ClassName: Image_ClassNames[2],
        });
      },
      1: () => {
        setNestedObject((draft) => {
          draft.coins.one.numberofnotes = inputValue;
          draft.coins.one.value = inputValue * 1;
        });
        SetOnChangeImage({
          ...OnchangeImage,
          ImageURL: CoinsImage[3],
          alt: "1 Coin",
          ClassName: Image_ClassNames[2],
        });
      },
    };

    //TotalSum

    return insertObject[argument]();
  };

  //------------------->POST API ----------------->

  const CurrentTime = PayloadCurrentDate.time();
  async function PostSendPayload() {
    const PayloadData = {
      id: "",
      date: `${CurrentTime}`,
      ...nestedObjct,
    };
    const SendToPayload = dispatch(postApithunk(PayloadData));
    console.log(SendToPayload, "SendToPayload");
  }

  useEffect(() => {
    if (counter > 0) {
      PostSendPayload();
    }
  }, [counter]);
  //--------------------------->HandleSubmit<-----------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(callUsereffect());
    SetOnChangeImage(DefaultImage);
    //All currency value
    const fivehundered = nestedObjct.notes.fivehundered.value;
    const twohundered = nestedObjct.notes.twohundered.value;
    const onehundered = nestedObjct.notes.onehundered.value;
    const fifty = nestedObjct.notes.fifty.value;
    const twenty = nestedObjct.notes.twenty.value;
    const ten = nestedObjct.coins.ten.value;
    const five = nestedObjct.coins.five.value;
    const two = nestedObjct.coins.two.value;
    const one = nestedObjct.coins.one.value;

    //Only Notes

    const Note_fivehundered = nestedObjct.notes.fivehundered.numberofnotes;
    const Note_twohundered = nestedObjct.notes.twohundered.numberofnotes;

    const Note_onehundered = nestedObjct.notes.onehundered.numberofnotes;

    const Note_fifty = nestedObjct.notes.fifty.numberofnotes;
    const Note_twenty = nestedObjct.notes.twenty.numberofnotes;
    //coins
    const Coin_Ten = nestedObjct.coins.ten.numberofnotes;
    const Coin_Five = nestedObjct.coins.five.numberofnotes;
    const Coin_Two = nestedObjct.coins.two.numberofnotes;
    const Coin_One = nestedObjct.coins.one.numberofnotes;

    //Array
    const ArrayofTotalSum = [
      fivehundered,
      twohundered,
      onehundered,
      fifty,
      twenty,
      ten,
      five,
      two,
      one,
    ];

    const ArrayNumberofNotes = [
      Note_fivehundered,
      Note_twohundered,
      Note_onehundered,
      Note_fifty,
      Note_twenty,
    ];

    const ArrayNumberofCoins = [Coin_Ten, Coin_Five, Coin_Two, Coin_One];

    //operations
    const SumofArrayofTotalSum = ArrayofTotalSum.reduce((a, b) => {
      return a + b;
    }, 0);

    const SumofArrayNumberofNotes = ArrayNumberofNotes.reduce((a, b) => {
      return a + b;
    }, 0);

    const SumofArrayNumberofCoins = ArrayNumberofCoins.reduce((a, b) => {
      return a + b;
    }, 0);

    console.log(
      SumofArrayofTotalSum,
      SumofArrayNumberofNotes,
      SumofArrayNumberofCoins
    );

    setCounter((counter) => counter + 1);

    setNestedObject((draft) => {
      draft.total.sumoftotal = SumofArrayofTotalSum;
      // draft.total.notes = SumofArrayNumberofNotes;
      // draft.total.coins = SumofArrayNumberofCoins;
    });

    // setNestedObject((prevState) => ({
    //   ...prevState,
    //   total: {
    //     ...nestedObjct.total,
    //     sumoftotal: SumofArrayofTotalSum,
    //   },
    // }));

    {
      /*  //React: Expected an assignment or function call and instead saw an expression implentet self exeuting fn */
    }

    (() => {
      setNestedObject((draft) => {
        draft.total.sumoftotal = SumofArrayofTotalSum;
        draft.total.notes = SumofArrayNumberofNotes;
        draft.total.coins = SumofArrayNumberofCoins;
      });
    })();

    // const PayloadData = {
    //   id: "",
    //   date: "04 July 2023 at 11:37 am",
    //   ...nestedObjct,
    // };

    // const PostData = await Services.postApi(PayloadData)

    // console.log(PostData, "PostData");
    // console.log(nestedObjct, "nestedObjct");
  };

  //--------------------------->Numofwords<------------------
  const amountInWords = numWords(nestedObjct.total.sumoftotal);

  const captial = amountInWords.split(" ").map((el) => {
    return el.replace(el[0], el[0].toUpperCase());
  });

  const captialNumber = captial.join(" ");

  //----------------->Button Disabled<----------------------
  //Submit Validation

  const submitValidation = [
    nestedObjct.notes.fivehundered.numberofnotes,
    nestedObjct.notes.twohundered.numberofnotes,
    nestedObjct.notes.onehundered.numberofnotes,
    nestedObjct.notes.fifty.numberofnotes,
    nestedObjct.notes.twenty.numberofnotes,
    nestedObjct.coins.ten.numberofnotes,
    nestedObjct.coins.five.numberofnotes,
    nestedObjct.coins.two.numberofnotes,
    nestedObjct.coins.one.numberofnotes,
  ];

  const listsubmit = submitValidation.some((el) => el >= 1);

  const handleClearClick = () => {
    setNestedObject((draft) => {
      //500
      draft.notes.fivehundered.numberofnotes = 0;
      draft.notes.fivehundered.value = 0;
      //200
      draft.notes.twohundered.numberofnotes = 0;
      draft.notes.twohundered.value = 0;
      //100
      draft.notes.onehundered.numberofnotes = 0;
      draft.notes.onehundered.value = 0;
      //50
      draft.notes.fifty.numberofnotes = 0;
      draft.notes.fifty.value = 0;
      //20
      draft.notes.twenty.numberofnotes = 0;
      draft.notes.twenty.value = 0;
      //10
      draft.coins.ten.numberofnotes = 0;
      draft.coins.ten.value = 0;
      //5
      draft.coins.five.numberofnotes = 0;
      draft.coins.five.value = 0;
      //2
      draft.coins.two.numberofnotes = 0;
      draft.coins.two.value = 0;
      //1
      draft.coins.one.numberofnotes = 0;
      draft.coins.one.value = 0;
      //total
      draft.total.sumoftotal = 0;
      draft.total.notes = 0;
      draft.total.coins = 0;
    });
  };

  //NumberOfNotes

  const Input_NumberOfNotes = [
    nestedObjct.notes.fivehundered.numberofnotes,
    nestedObjct.notes.twohundered.numberofnotes,
    nestedObjct.notes.onehundered.numberofnotes,
    nestedObjct.notes.fifty.numberofnotes,
    nestedObjct.notes.twenty.numberofnotes,
    nestedObjct.coins.ten.numberofnotes,
    nestedObjct.coins.five.numberofnotes,
    nestedObjct.coins.two.numberofnotes,
    nestedObjct.coins.one.numberofnotes,
  ];

  const result_Input_NumberOfNotes = Input_NumberOfNotes.map((el) => {
    return el === 0 ? "" : el;
  });

  const [
    Number_fivehundered,
    Number_twohundered,
    Number_onehundered,
    Number_fifty,
    Number_twenty,
    Number_ten,
    Number_five,
    Number_two,
    Number_one,
  ] = result_Input_NumberOfNotes;

  //Getvalue_Currency

  const GetValue_Notes = [
    nestedObjct.notes.fivehundered.value,
    nestedObjct.notes.twohundered.value,
    nestedObjct.notes.onehundered.value,
    nestedObjct.notes.fifty.value,
    nestedObjct.notes.twenty.value,
    nestedObjct.coins.ten.value,
    nestedObjct.coins.five.value,
    nestedObjct.coins.two.value,
    nestedObjct.coins.one.value,
  ];

  const result_GetValue_Notes = GetValue_Notes.map((el) => {
    return el === 0 ? "" : el.toLocaleString();
  });

  const [
    GetValue_fivehundered,
    GetValue_twohundered,
    GetValue_onehundered,
    GetValue_fifty,
    GetValue_twenty,
    GetValue_ten,
    GetValue_five,
    GetValue_two,
    GetValue_one,
  ] = result_GetValue_Notes;

  return (
    <div className="Bg__CashCounter">
      <ImageSwitch OnchangeImage={OnchangeImage} />

      <div>
        <div>
          <Grid container>
            <Grid item xs={12} sm={1}></Grid> {/* Notes */}
            <Grid item xs={12} sm={5}>
              <div
                className={
                  mobile
                    ? "Notes__Module__layout"
                    : "Mobile__Notes__Module__layout"
                }
              >
                <div className="spacing"></div>
                <Input__Card
                  label="500"
                  inputField={
                    <InputField
                      onChange={(e) => handleNumberChange(e, 500)}
                      value={Number_fivehundered}
                    />
                  }
                  getvalue={GetValue_fivehundered}
                />
                <div className="spacing"></div>
                <Input__Card
                  label="200"
                  inputField={
                    <InputField
                      onChange={(e) => handleNumberChange(e, 200)}
                      value={Number_twohundered}
                    />
                  }
                  getvalue={GetValue_twohundered}
                />
                <div className="spacing"></div>
                <Input__Card
                  label="100"
                  inputField={
                    <InputField
                      onChange={(e) => handleNumberChange(e, 100)}
                      value={Number_onehundered}
                    />
                  }
                  getvalue={GetValue_onehundered}
                />
                <div className="spacing"></div>
                <Input__Card
                  label="50"
                  inputField={
                    <InputField
                      onChange={(e) => handleNumberChange(e, 50)}
                      value={Number_fifty}
                    />
                  }
                  getvalue={GetValue_fifty}
                />
                <div className="spacing"></div>
                <Input__Card
                  label="20"
                  inputField={
                    <InputField
                      onChange={(e) => handleNumberChange(e, 20)}
                      value={Number_twenty}
                    />
                  }
                  getvalue={GetValue_twenty}
                />
              </div>
            </Grid>
            {/* Coins */}
            <Grid item xs={12} sm={5}>
              <div
                className={
                  mobile
                    ? "Coins__Module__layout"
                    : "Mobile__Coins__Module__layout"
                }
              >
                <div className="spacing"></div>
                <Input__Card
                  label="10"
                  inputField={
                    <InputField
                      onChange={(e) => handleNumberChange(e, 10)}
                      value={Number_ten}
                    />
                  }
                  getvalue={GetValue_ten}
                />
                <div className="spacing"></div>
                <Input__Card
                  label="5"
                  inputField={
                    <InputField
                      onChange={(e) => handleNumberChange(e, 5)}
                      value={Number_five}
                    />
                  }
                  getvalue={GetValue_five}
                />
                <div className="spacing"></div>
                <Input__Card
                  label="2"
                  inputField={
                    <InputField
                      onChange={(e) => handleNumberChange(e, 2)}
                      value={Number_two}
                    />
                  }
                  getvalue={GetValue_two}
                />
                <div className="spacing"></div>
                <Input__Card
                  label="1"
                  inputField={
                    <InputField
                      onChange={(e) => handleNumberChange(e, 1)}
                      value={Number_one}
                    />
                  }
                  getvalue={GetValue_one}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12}>
              <div className="Submit__clear__btn_layout">
                <div
                  style={{
                    cursor: listsubmit === false ? "not-allowed" : "pointer",
                  }}
                >
                  <Button
                    disabled={listsubmit === false ? true : false}
                    variant="contained"
                    color="error"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
                <div>
                  {" "}
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClearClick}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </Grid>{" "}
          </Grid>

          {/* Total Sum */}
          <Grid container direction="row" spacing={1}>
            <Grid item xs={12} sm={2}></Grid>

            <Grid item xs={12} sm={3}>
              <div className="Total__Notes">
                <div>
                  <h2
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Total Notes
                  </h2>
                </div>
                <div className="total_notes_flex">
                  <div>
                    {" "}
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency/48/money-bag-rupee.png"
                      alt="money-bag-rupee"
                    />
                  </div>
                  <div>
                    <h1>{nestedObjct.total.notes}</h1>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="Total__sum__Card">
                <div>
                  <h1
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Total Amount
                  </h1>
                </div>
                <div className="total_sum_flex">
                  <div>
                    {" "}
                    <img
                      width="45"
                      height="45"
                      src="https://img.icons8.com/material-sharp/48/rupee.png"
                      alt="rupee"
                    />
                  </div>
                  <div>
                    <h1>{nestedObjct.total.sumoftotal.toLocaleString()}</h1>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="Total__Coins">
                <div>
                  <h2
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Total Coins
                  </h2>
                </div>
                <div className="total_coins_flex">
                  <div>
                    {" "}
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/coins.png"
                      alt="coins"
                    />
                  </div>
                  <div>
                    <h1>{nestedObjct.total.coins}</h1>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container xs={12} direction="row" justifyContent="center">
            <Grid item>
              <h1
                ClassName="Num__words_Font"
                style={{
                  textAlign: "center",
                  color: "#FFC107",
                }}
              >
                {captialNumber} Ruppes Only{" "}
                <span style={{ color: "#ffffff" }}>! ! !</span>
              </h1>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
