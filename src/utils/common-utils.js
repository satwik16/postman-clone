const checkvalidjson = (text) => {
  if (
    /^[\],:{}\s]*$/.test(
      text
        .replace(/\\["\\\/bfnrtu]/g, "@")
        .replace(
          /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          "]"
        )
        .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const checkparams = (
  formdata,
  jsontext,
  paramdata,
  headerdata,
  seterrormessage
) => {
  //    console.log(formdata);
  if (!formdata.url) {
    seterrormessage("url missing");
    return false;
  }
  if (!checkvalidjson(jsontext)) {
    seterrormessage("invalid json format");
    return false;
  }
  return true;
};

export const getheaderandparams = (objarr) => {
  let obj = {};
  objarr.forEach((data) => {
    if (data.hasOwnProperty("check") && data.check ) {
      obj = { ...obj, [data.key]: data.value };
    }
  });

  return obj;
};
