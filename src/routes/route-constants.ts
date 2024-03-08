export const RouteConstant = {
  WILD_ROUTE: "/*",
  STATUS_CODES: {
    OK: 200, 
    FORBIDDEN: 403,
    NOT_FOUND: 404, 
    INTERNAL_SERVER_ERROR: 500,
    BAD_REQUEST: 400,
    UN_PROCESSABLE_ENTRY: 422,
  },

  USER_MODULE: {
    FETCH_USER: "/users/:id?",
    DELETE_USER: "/users/:id",
    UPDATE_USER: "/users",
    POST_USER: "/users"
  }
}
