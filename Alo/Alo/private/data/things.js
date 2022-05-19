let menu = "<ul><li>Lemon Grilled Chick À La Mode ... GF, NOv, DF, kF</li><li>Kiwi Sautéed Mushroom Head ... GF, v, DF, kF</li>"
            + "<li>Crinkle Steamed Swordfish ... GF, NOv, DF, NOkF</li><li>Loaded Bell Pepper ... NOGF, v, NODF, kF</li>"
            + "<li>Mango Meringue Quiche ... GF, v, DF, kF</li><li>Deep Crusted Raddish Pie ... NOGF, NOv, DF, NOkF</li>"
            + "<li>Patate damaraque ... GF, v, NODF, NOkF</li><li>Roasted Swiss Manian Meat ... NOGF, NOv, NODF, NOkF</li>"
            + "<li>Pink Twisted Hagus ... GF, NOv, NODF, NOkF</li><li>Pink Maramalde Sparkies ... GF, v, DF, kF</li>"
            + "<li></li><li>GF - Gluten Free</li><li>v - Vegetarian</li><li>DF - Dairy Free</li><li>kF - Keto Friendly</li>"
            + "<li>NO - Not Friendly</li></ul>";

let availableRes = [
    {Date: "December 2 (W),", Time: "7:30PM,", Table: "Table 8,", Guests: "Guests 4,", Expense: "$130/guest"},
    {Date: "December 3 (T),", Time: "5:30PM,", Table: "Table 4,", Guests: "Guests 4,", Expense: "$130/guest"},
    {Date: "December 3 (T),", Time: "8:30PM,", Table: "Table 7,", Guests: "Guests 6,", Expense: "$130/guest"},
    {Date: "December 4 (F),", Time: "9:30PM,", Table: "Table 2,", Guests: "Guests 4,", Expense: "$165/guest"},
    {Date: "December 5 (S),", Time: "9:00PM,", Table: "Table 4,", Guests: "Guests 2,", Expense: "$165/guest"},
    {Date: "December 7 (M),", Time: "4:30PM,", Table: "Table 9,", Guests: "Guests 4,", Expense: "$130/guest"},
    {Date: "December 7 (M),", Time: "5:30PM,", Table: "Table 7,", Guests: "Guests 4,", Expense: "$130/guest"},
    {Date: "December 8 (T),", Time: "7:30PM,", Table: "Table 1,", Guests: "Guests 2,", Expense: "$130/guest"},
    {Date: "December 8 (T),", Time: "8:00PM,", Table: "Table 8,", Guests: "Guests 6,", Expense: "$130/guest"},
    {Date: "December 8 (T),", Time: "8:30PM,", Table: "Table 5,", Guests: "Guests 6,", Expense: "$130/guest"}
];

module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return menu;
  },
    
  getJSON: function() {
      console.log("called: getJSON");
      return availableRes;
  }
};

