export default function validate(input){
    const errors = { red: false }
    /////////////////
    if(!input.name){
      errors.name = "Name field required";
      errors.red = true;
    }else if(!/\w{3,}/.test(input.name)){
      errors.name = "Invalid name";
      errors.red = true;
    }
    ///////////////////////
    if(!input.description){
      errors.description = "Description field required";
      errors.red = true;
    }else if(!/\w{3,}/.test(input.description)){
      errors.description = "Invalid description";
      errors.red = true;
    }
    //////////////////////
    if(!input.platforms){
      errors.platforms = "Platforms field required";
      errors.red = true;
    }else if(input.platforms.split(", ").join("").split(" ").length > 2){
      errors.platforms = "Platform names must be separated by `,`";
      errors.red = true;
    }
    ////////////////////////////////////////////
    if(typeof(Number(input.rating))!=="number"){
      errors.rating = "Rating must be a number";
      errors.red = true;
    }else if(Number(input.rating) < 0 || Number(input.rating) > 5.0){
      errors.rating = "Rating must be a value between 0 and 5";
      errors.red = true;
    }else if(input.rating && input.rating.split(".").length > 1 && input.rating.split(".")[1].length>1){
      errors.rating = "Too many decimals...";
      errors.red = true;
    }
    if(!input.genres.length){
      errors.genres = "At least one genre required";
      errors.red = true;
    }
    ///////////////
    return errors;
  }