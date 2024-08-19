
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/functions/cource.js
var cource_default = async () => {
  const response = await fetch("https://nu.instructure.com/api/v1/courses", {
    headers: {
      authorization: `Bearer ${process.env.CANVAS_LMS_TOKEN}`
    }
  });
  const _data = await response.json();
  const data = {
    cource: _data
  };
  return new Response(JSON.stringify(data));
};
export {
  cource_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvY291cmNlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiB7XG4gIC8vICBub2RlIC0tZW52LWZpbGU9LmVudiBuZXRsaWZ5L2Z1bmN0aW9ucy9jb3VyY2UuanNcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbnUuaW5zdHJ1Y3R1cmUuY29tL2FwaS92MS9jb3Vyc2VzXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuQ0FOVkFTX0xNU19UT0tFTn1gLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBfZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBjb3VyY2U6IF9kYXRhLFxuICB9O1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUEsSUFBTyxpQkFBUSxZQUFZO0FBRXpCLFFBQU0sV0FBVyxNQUFNLE1BQU0sNkNBQTZDO0FBQUEsSUFDeEUsU0FBUztBQUFBLE1BQ1AsZUFBZSxVQUFVLFFBQVEsSUFBSSxnQkFBZ0I7QUFBQSxJQUN2RDtBQUFBLEVBQ0YsQ0FBQztBQUNELFFBQU0sUUFBUSxNQUFNLFNBQVMsS0FBSztBQUNsQyxRQUFNLE9BQU87QUFBQSxJQUNYLFFBQVE7QUFBQSxFQUNWO0FBQ0EsU0FBTyxJQUFJLFNBQVMsS0FBSyxVQUFVLElBQUksQ0FBQztBQUMxQzsiLAogICJuYW1lcyI6IFtdCn0K
