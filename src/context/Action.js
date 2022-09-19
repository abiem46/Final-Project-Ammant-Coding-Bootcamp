import Swal from "sweetalert2";

export function addCourse(dispatch, state) {
  Swal.fire({
    title: "OK",
    text: "Successfully Entered Card Tutor to Payment Page",
    icon: "success",
    confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
  });
  console.log(state);
  console.log("ini add");
  return dispatch({
    type: "ADD_COURSE",
    addCourse: state,
  });
}

export function delCourse(dispatch, state) {
  Swal.fire({
    title: "OK",
    text: "Data deleted successfully",
    icon: "success",
    confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
  });
  console.log(state);
  return dispatch({
    type: "DEL_COURSE",
    delCart: state,
  });
}
export function delstate(dispatch, state) {
  console.log(dispatch, state);
  return dispatch({
    type: "DEL_STATE",
    delstate: state,
  });
}
