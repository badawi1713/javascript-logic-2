// No 4. Library App

const library = [
  { title: "One Punch Man", author: "ONE", status: false },
  { title: "Kimetsu no Yaiba", author: "Koyoharu Gotōge", status: true },
  { title: "Fairy Tail", author: "Hiro MashimaE", status: false }
];

// Soal A
function findBookStatus(bookTitle) {
  if (bookTitle == undefined) {
    let book = library.find(book => book.title == bookTitle);
    if (book.status == true) {
      return console.log("Book of " + book.title + " is AVAILABLE");
    } else {
      return console.log("Book of " + book.title + " is NOT AVAILABLE");
    }
  }
  // if the book's title is not found
  return console.log("The book that you have searched is not found!");
}

findBookStatus("One Punch");

// Soal B
function findBooksAvailability(boolean) {
  for (const props of library) {
    if (props.status == boolean) console.log(props);
  }
}

findBooksAvailability(true);
