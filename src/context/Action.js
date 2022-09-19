import Swal from "sweetalert2";

export function addCourse(dispatch, state) {
  Swal.fire({
    title: "Sweet!",
    text: "Berhasil Masuk ke Keranjang",
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
    text: "Data  berhasil dihapus",
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
