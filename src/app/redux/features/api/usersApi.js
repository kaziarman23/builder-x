import baseApi from "./baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/api/users",
      providesTags: ["Users"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/api/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    updateUserProfile: builder.mutation({
      query: (userInfo) => ({
        url: "/api/users",
        method: "PATCH",
        body: userInfo,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/api/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserProfileMutation,
  useDeleteUserMutation,
} = usersApi;

export default usersApi;
