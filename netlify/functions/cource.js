export default async () => {
  //  node --env-file=.env netlify/functions/cource.js
  const response = await fetch("https://nu.instructure.com/api/v1/courses", {
    headers: {
      authorization: `Bearer ${process.env.CANVAS_LMS_TOKEN}`,
    },
  });
  const _data = await response.json();
  const data = {
    cource: _data,
  };
  return new Response(JSON.stringify(data));
};
