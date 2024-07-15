const URL_BACKEND_TOP = window.location.hostname.includes("localhost")
  ? "http://localhost:3000"
  : "https://aluraflix-topaz.vercel.app/";

export default {
  URL_BACKEND_TOP,
};
