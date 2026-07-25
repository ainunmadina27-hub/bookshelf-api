const Hapi = require("@hapi/hapi");
const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
} = require("./bookshelf");

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: "localhost",
    });

    await server.register(require("@hapi/inert"));

    server.route([
        {
            method: "POST",
            path: "/books",
            handler: addBookHandler,
        },
        {
            method: "GET",
            path: "/books",
            handler: getAllBooksHandler,
        },
        {
            method: "GET",
            path: "/books/{bookId}",
            handler: getBookByIdHandler,
        },
        {
            method: "PUT",
            path: "/books/{bookId}",
            handler: editBookByIdHandler,
        },
        {
            method: "DELETE",
            path: "/books/{bookId}",
            handler: deleteBookByIdHandler,
        }
    ]);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();