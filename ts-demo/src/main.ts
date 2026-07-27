import { z} from 'zod';

const bookSchema = z.object({
    id: z.number(),
    title: z.string(),
    author: z.string(),
    category: z.string(),
    price: z.number(),
});

const booksSchema = z.array( bookSchema );
type Book = z.infer<typeof bookSchema>;

const btn = document.getElementById('btn') as HTMLButtonElement;
const heading = document.getElementById('heading') as HTMLHeadElement;

let data = [];
btn.addEventListener("click", async () => {
     const response = await fetch("https://tsapidemo.lwhh.org/api/v1/books");
    const books = await response.json();

    const result = booksSchema.safeParse( books );

    if( !result.success ) {
      console.error( result.error.issues);
      return;
    }
    data = books;
    printBookDetails( books[1] );

});

function printBookDetails( book: Book ) {
  console.log("id", book.id );
}