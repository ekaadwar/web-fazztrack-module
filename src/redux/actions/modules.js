import http from "../../helpers/http";

export const getModules = () => {
  return async (dispatch) => {
    const { data } = await http().get(
      `https://fazz-course.herokuapp.com/videos?search=`
    );
    dispatch({
      type: "GET_MODULES",
      payload: data.data,
    });
  };
};
