import baseApi from "./baseApi";

const configApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserConfig: builder.query({
      query: (userEmail) => `/api/config/get?user=${userEmail}`,
      providesTags: ["Config"],
    }),

    saveUserConfig: builder.mutation({
      query: ({ userEmail, config, siteId }) => ({
        url: "/api/config/save",
        method: "POST",
        body: { userEmail, config, siteId },
      }),
      invalidatesTags: ["Config"],
    }),

    deleteUserConfig: builder.mutation({
      query: ({ userEmail, siteId }) => ({
        url: "/api/config/delete",
        method: "DELETE",
        body: { userEmail, siteId },
      }),
      invalidatesTags: ["Config"],
    }),
  }),
});

export const {
  useGetUserConfigQuery,
  useSaveUserConfigMutation,
  useDeleteUserConfigMutation,
} = configApi;

export default configApi;
