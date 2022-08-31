import http from "../../helpers/http";

export const getModules = (search = null) => {
  let url = `https://fazz-course.herokuapp.com/videos?search=`;
  if (search) {
    url += search;
  }
  return async (dispatch) => {
    const { data } = await http().get(url);
    dispatch({
      type: "GET_MODULES",
      payload: data.data,
    });
  };
};
