import baseApi from "./baseApi";

const configApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserConfig: builder.query({
      query: (userEmail) => `/api/config/get?user=${userEmail}`,
      providesTags: ["Config"],
    }),

    saveUserConfig: builder.mutation({
      query: ({ userEmail, config }) => ({
        url: "/api/config/save",
        method: "POST",
        body: { user: userEmail, config },
      }),
      invalidatesTags: ["Config"],
    }),
  }),
});

export const { useGetUserConfigQuery, useSaveUserConfigMutation } = configApi;

export default configApi;
